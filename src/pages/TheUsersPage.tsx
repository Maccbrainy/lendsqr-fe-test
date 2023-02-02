import { NavLink, Outlet, useLocation } from "react-router-dom";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { ActivateUserIcon, ActiveUsersIcon, BlackListUserIcon, FilterViewIcon, NoOfUsersIcon, UsersWithLoanIcon, UsersWithSavingsIcon, ViewMoreIcon, ViewUserDetailsIcon } from "../assets/icons";
import InputForm from "../components/InputForm";
interface UsersCard {
    cardIcon: any,
    cardTitle: string,
    cardValue: number,
    cardClass?:string
}
//Async fetching data from endpoint
const urlUsersListEnpoint = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
const getUserLists = async() => {
    const response = await fetch(urlUsersListEnpoint);
    return response.json();
};

//Users page card analytics  component
const UsersCardAnalytics = ({cardIcon, cardTitle, cardValue, cardClass}: UsersCard) => {
    return (
        <div className="users-card">
            <div className={`icon ${cardClass}`}>{cardIcon}</div>
            <div className="title">{cardTitle}</div>
            <div className="value">{cardValue}</div>
        </div>
    )
};
//Table Header Title component
const TableHeaderTitle = ({headerTitle}: any) => {
    const [openTableFilter, setOpenTableFilter] = useState<boolean>(false);
    const showTableFilter = () => {
        openTableFilter ? setOpenTableFilter(false) : setOpenTableFilter(true);
    }
    const handleFilterFormChange = () => {

    }
    const applyTableFilter = () => {
        alert('Apply Table Filters functionalities coming soon!')
    }
    const resetTableFilterHandle = () => {
        alert('Reset Table Filters functionalities coming soon!')
    }
    return (
        <>
            <div onClick={showTableFilter} className="table-header-title">
                <span>{ headerTitle }</span>
                <FilterViewIcon />
            </div>
            {
                openTableFilter && 

                <div className="table-filter-modal">
                <div className="filter-button">
                    <label>Organization</label>
                    <select title="select organization" className="input-filter">
                        <option>select</option>
                    </select>
                </div>
                <div className="filter-button">
                    <label>Username</label>
                    <InputForm inputType="text" inputName="name" placeholder="User" handleChange={handleFilterFormChange} className="input-filter" />
                </div>
                <div className="filter-button">
                    <label>Email</label>
                    <InputForm inputType="email" inputName="email" placeholder="Email" handleChange={handleFilterFormChange} className="input-filter" />
                </div>
                <div className="filter-button">
                    <label>Date</label>
                    <InputForm inputType="date" inputName="date" placeholder="Date" handleChange={handleFilterFormChange} className="input-filter" />
                </div>
                <div className="filter-button">
                    <label>Phone Number</label>
                    <InputForm inputType="number" inputName="number" placeholder="Phone Number" handleChange={handleFilterFormChange} className="input-filter" />
                </div>
                <div className="filter-button">
                    <label>Status</label>
                    <select title="select organization" className="input-filter">
                        <option>select</option>
                    </select>
                </div>
                <div className="filter-footer">
                    <button onClick={resetTableFilterHandle} className="reset-button" title="Reset filter" type="button">Reset</button>
                    <button onClick={applyTableFilter} className="apply-button" title="Apply filter" type="button">Filter</button>
                </div>
            </div>
            }

        </>
    )
}

export default function TheUsersPage(){
    //Title document
    document.title = "Lendsqr: Users";
    const {pathname} = useLocation();
    const actionModalRef = useRef() as MutableRefObject<HTMLDivElement>
    const {data, status } = useQuery("usersList", getUserLists);

    const [isActionModalOpen, setIsActionModal] = useState<boolean>(false);
    const [isAUserInTheList, setIsAUserInTheList] = useState<{id: string, phoneNumber: string, email:string}>({
        id: "",
        phoneNumber: "",
        email: ""
    });
    const openUserActionModal = (data: {id: string , phoneNumber: string, email: string}) => {
        const {id, phoneNumber, email } = data;

        setIsAUserInTheList({
            id: id,
            phoneNumber: phoneNumber,
            email: email
        })
        setIsActionModal(true);
    }


    useEffect(() => {
        
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
        <div className={`users-page ${pathname == '/app/users' ? 'visible' : 'hidden'}`}>
            <h1 className="users-title">Users</h1>
            {
                status === "error" && <p className="error-message-fetching-data">Error fetching data</p>
            }
            {
                status === "loading" && <p className="fetching-data-message"> fetching data...</p>
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
                                <TableHeaderTitle headerTitle="Organization" />
                                <TableHeaderTitle headerTitle="Username" />
                                <TableHeaderTitle headerTitle="Email" />
                                <TableHeaderTitle headerTitle="Phone Number" />
                                <TableHeaderTitle headerTitle="Date Joined" />
                                <TableHeaderTitle headerTitle="Status" />
                            </div>
                                {  
                                    data.map((user: { id: string; orgName: string; userName: string; email: string; phoneNumber: string; createdAt: string; }, index:number) => 
                                    <div key={user.id + index} className="table-main">
                                        <span className="content organization">{user.orgName}</span>
                                        <span className="content">{user.userName}</span>
                                        <span className="content email">{user.email}</span>
                                        <span className="content">{user.phoneNumber}</span>
                                        <span className="content">{user.createdAt}</span>
                                        <div className={`content status-action`}>
                                            <span>status</span>
                                            <div onClick={() => openUserActionModal(user)} className="action"><ViewMoreIcon /></div>
                                            {
                                                isAUserInTheList.id == user.id && isAUserInTheList.phoneNumber == user.phoneNumber && isAUserInTheList.email == user.email &&
                                                    <div ref={actionModalRef} className="table-action-modal">
                                                        <NavLink to={`/app/users/${user.id}`}>
                                                            <div className="action-modal">
                                                                <ViewUserDetailsIcon />
                                                                <span>View Details</span>
                                                            </div>
                                                        </NavLink>
                                                        <div className="action-modal">
                                                            <BlackListUserIcon />
                                                            <span>Blacklist user</span>
                                                        </div>
                                                        <div className="action-modal">
                                                            <ActivateUserIcon />
                                                            <span>Activate user</span>
                                                        </div>
                                                    </div>
                                                }
                                        </div>
                                    </div>
                                )
                            }
                            </div>
                            <div className="table-pagination">
                            <div className="pagination-size">
                                <div>Showing</div>
                                    <select title="pagination range" className="pagination-select">
                                        <option>100</option>
                                    </select>
                                <div>out of 100</div>
                            </div>
                            <div className="pagination-pages">
                                <span className="pagination-icon"><MdNavigateBefore fontSize={25}/>
                                </span>
                                
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <span>...</span>
                                <div>11</div>
                                <div>12</div>
                                <div>13</div>
                                <span className="pagination-icon"><MdNavigateNext fontSize={25}/>
                                </span>
                                
                            </div>
                        </div>
                    </>
                )
            }
        </div>
        <Outlet />
        </>
    
    )
}