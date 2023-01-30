import { NavLink, Outlet, useLocation } from "react-router-dom";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { MdFilterList, MdMoreVert, MdNavigateBefore, MdNavigateNext, MdOutlineHowToReg, MdOutlinePersonOff, MdPeopleOutline } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi2";
interface UsersCard {
    cardIcon: any,
    cardTitle: string,
    cardValue: number
}
const UsersCardAnalytics = ({cardIcon, cardTitle, cardValue}: UsersCard) => {
    return (
        <div className="users-card">
            <div className="icon">{cardIcon}</div>
            <div className="title">{cardTitle}</div>
            <div className="value">{cardValue}</div>
        </div>
    )
}

export default function TheUsersPage(){
    const actionModalRef = useRef() as MutableRefObject<HTMLDivElement>
    const [isActionModalOpen, setIsActionModal] = useState<boolean>(false);
    const [usersList, setUsersList] = useState(JSON.parse(localStorage.getItem("ORGANIZATION_USERSLIST") || "[]"))
    const openActionModal = () => {
        setIsActionModal(true);
    }
    const {pathname} = useLocation();
    useEffect(() => {
        const getUserLists = async() => {
            await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
                .then(response => response.json())
                .then((data) => {
                    setUsersList(data)
                    localStorage.setItem("ORGANIZATION_USERSLIST", JSON.stringify(data))
                    console.log(data)
                })
                .catch(err => console.log(err))
        };
        getUserLists();
    }, [])
    useEffect(() => {
        
        const caughtOutSideClickAndCloseModal = (event: { target: any }) => {
            if (actionModalRef.current && actionModalRef.current.contains(event.target)){
                return;
            }
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
            <div className="users-card-section">
                <UsersCardAnalytics cardIcon={<MdPeopleOutline fontSize={25}/>} cardTitle={'Users'}  cardValue={usersList.length}/>
                <UsersCardAnalytics cardIcon={<MdPeopleOutline fontSize={25}/>} cardTitle={'Active users'}  cardValue={2234}/>
                <UsersCardAnalytics cardIcon={<MdPeopleOutline fontSize={25}/>} cardTitle={'Users with loans'}  cardValue={2234}/>
                <UsersCardAnalytics cardIcon={<MdPeopleOutline fontSize={25}/>} cardTitle={'Users with savings'}  cardValue={2234}/>
            </div>
            <div className="users-table-section">
                <div className="table-header">
                    <div className="table-header-title">
                        <span>Organization</span>
                        <MdFilterList fontSize={20}/>
                    </div>
                    <div className="table-header-title">
                        <span>Username</span>
                        <MdFilterList fontSize={20}/>
                    </div>
                    <div className="table-header-title">
                        <span>Email</span>
                        <MdFilterList fontSize={20}/>
                    </div>
                    <div className="table-header-title">
                        <span>Phone Number</span>
                        <MdFilterList fontSize={20}/>
                    </div>
                    <div className="table-header-title">
                        <span>Date Joined</span>
                        <MdFilterList fontSize={20}/>
                    </div>
                    <div className="table-header-title">
                        <span>Status</span>
                        <MdFilterList fontSize={20}/>
                    </div>
                </div>
                <div className="table-main">
                    <span className="content">Lendsqr</span>
                    <span className="content">Adedeji</span>
                    <span className="content">adedeji@Lendsqr.com</span>
                    <span className="content">08145678901</span>
                    <span className="content">May 20, 2020 10:00AM</span>
                    <span className="content status">active</span>
                    <div onClick={openActionModal} className="action"><MdMoreVert fontSize={20}/></div>

                    {isActionModalOpen && 
                        <div ref={actionModalRef} className="table-action-modal">
                            <NavLink to={'/app/users/12'}>
                                <div className="action-modal">
                                    <HiOutlineEye fontSize={15}/>
                                    <span>View Details</span>
                                </div>
                            </NavLink>
                            <div className="action-modal">
                                <MdOutlinePersonOff fontSize={15} />
                                <span>Blacklist user</span>
                            </div>
                            <div className="action-modal">
                                <MdOutlineHowToReg fontSize={15} />
                                <span>Activate user</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="table-pagination">
                    <div className="pagination-size">
                        <div>Showing</div>
                            <select title="pagination range" className="pagination-select">
                                <option>50</option>
                                <option>100</option>
                                <option>150</option>
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
        </div>
        <Outlet />
        </>
    )
}