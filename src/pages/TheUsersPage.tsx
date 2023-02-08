import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { ActiveUsersIcon, FilterViewIcon, NoOfUsersIcon, UsersWithLoanIcon, UsersWithSavingsIcon, ViewMoreIcon } from "../assets/icons";
import TablePagination from "../components/TablePagination";
import TableFiltersModal from "../components/TableFiltersModal";
import TableActionsViewModal from "../components/TableActionsViewModal";
interface UsersCardProps {
    cardIcon: any,
    cardTitle: string,
    cardValue: number,
    cardClass?:string
}
interface TableHeaderProps {
    headerTitle: string,
    showTableFilter: () => void

}
//Async fetching data from endpoint
const urlUsersListEnpoint = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
const getUserLists = async() => {
    const response = await fetch(urlUsersListEnpoint);
    return response.json();
};

//Users page card analytics  component
const UsersCardAnalytics = ({cardIcon, cardTitle, cardValue, cardClass}: UsersCardProps) => {
    return (
        <div className="users-card">
            <div className={`icon ${cardClass}`}>{cardIcon}</div>
            <div className="title">{cardTitle}</div>
            <div className="value">{cardValue}</div>
        </div>
    )
};
//Table Header Title component
const TableHeaderTitle = ({headerTitle, showTableFilter}: TableHeaderProps) => {
    return (
        <div onClick={showTableFilter} className="table-header-title">
            <span>{ headerTitle }</span>
            <FilterViewIcon />
        </div>
    )
}

export default function TheUsersPage(){
    //Title document
    document.title = "Lendsqr: Users";
    const {pathname} = useLocation();
    const [openTableFilter, setOpenTableFilter] = useState<boolean>(false);

    const actionModalRef = useRef() as MutableRefObject<HTMLDivElement>
    const [isActionModalOpen, setIsActionModal] = useState<boolean>(false);
    const [isAUserInTheList, setIsAUserInTheList] = useState<{id: string, phoneNumber: string, email:string}>({
        id: "",
        phoneNumber: "",
        email: ""
    });

    const {data, status } = useQuery("usersList", getUserLists);

    const openUserActionModal = (data: {id: string , phoneNumber: string, email: string}) => {
        const {id, phoneNumber, email } = data;

        setIsAUserInTheList({
            id: id,
            phoneNumber: phoneNumber,
            email: email
        })
        setIsActionModal(true);
    }
    
    const showTableFilter = () => {
        openTableFilter ? setOpenTableFilter(false) : setOpenTableFilter(true);
    }

    useEffect(() => {
        //Add and remove event listener on opening and closing of usersActionModal
        const caughtOutSideClickAndCloseModal = (event: { target: any }) => {
            if (actionModalRef.current && actionModalRef.current.contains(event.target)){
                return;
            }
            setIsAUserInTheList({
                id: "",
                phoneNumber: "",
                email: ""
            });
            setIsActionModal(false); 
            return () => {
                window.removeEventListener('mousedown', caughtOutSideClickAndCloseModal)
                window.removeEventListener('touchstart', caughtOutSideClickAndCloseModal)
                }
            }
        window.addEventListener('mousedown', caughtOutSideClickAndCloseModal);
        window.addEventListener('touchstart', caughtOutSideClickAndCloseModal);
              
    }, [isActionModalOpen])
    return (
        
        <>
        <div className={`users-page ${pathname == '/users' ? 'visible' : 'hidden'}`}>
            <h1 className="users-title">Users</h1>
            {
                status === "error" && <p className="error-message-fetching-data">Error fetching data</p>
            }
            {
                status === "loading" && <p className="fetching-data-message"> Loading ...</p>
            }
            {
                status === "success" && (
                    <>
                    
                        <div className="users-card-section">
                            <UsersCardAnalytics cardIcon={<NoOfUsersIcon />} cardTitle={'Users'} cardValue={data.length} cardClass={'no-of-users'} />
                            <UsersCardAnalytics cardIcon={<ActiveUsersIcon />} cardTitle={'Active users'} cardValue={data.length} cardClass={'active-users'} />
                            <UsersCardAnalytics cardIcon={<UsersWithLoanIcon />} cardTitle={'Users with loans'} cardValue={data.length} cardClass={'users-with-loans'} />
                            <UsersCardAnalytics cardIcon={<UsersWithSavingsIcon />} cardTitle={'Users with savings'} cardValue={data.length} cardClass={'users-with-savings'} />
                        </div>
                        <div className="users-table-section">
                            <div className="table-header">
                                <TableHeaderTitle showTableFilter={showTableFilter}  headerTitle="Organization" />
                                <TableHeaderTitle showTableFilter={showTableFilter} headerTitle="Username" />
                                <TableHeaderTitle showTableFilter={showTableFilter} headerTitle="Email" />
                                <TableHeaderTitle showTableFilter={showTableFilter} headerTitle="Phone Number" />
                                <TableHeaderTitle showTableFilter={showTableFilter} headerTitle="Date Joined" />
                                <TableHeaderTitle showTableFilter={showTableFilter} headerTitle="Status" />

                                {
                                    //Open TableFiltersModal on clicking on showTableFilter 
                                    openTableFilter && <TableFiltersModal />
                                }
                            </div>
                                {  //Map data and display data fetched from user endpoint 
                                    data.map((user: { id: string; orgName: string; userName: string; email: string; phoneNumber: string; createdAt: string; }, index:number) => 
                                    <div key={user.id + index} className="table-main">
                                        <span className="content organization">{user.orgName}</span>
                                        <span className="content">{user.userName}</span>
                                        <span className="content email">{user.email}</span>
                                        <span className="content">{user.phoneNumber}</span>
                                        <span className="content">{user.createdAt}</span>
                                        <div className={`content status-action`}>
                                            <span className="active">Active</span>
                                            <div onClick={() => openUserActionModal(user)} className="action"><ViewMoreIcon /></div>
                                            {//On clicking openUserActionModal,
                                            //Show a user action menu: view detail, blacklist user, and activate user 
                                                isAUserInTheList.id == user.id && isAUserInTheList.phoneNumber == user.phoneNumber && isAUserInTheList.email == user.email &&
                                                    <TableActionsViewModal ref={actionModalRef} user={user} />
                                                }
                                        </div>
                                    </div>
                                )
                            }
                            </div>
                            <TablePagination />
                    </>
                )
            }
        </div>
        <Outlet />
        </>
    
    )
}