import { Outlet } from "react-router-dom";
import { MdFilterList, MdMoreVert, MdNavigateBefore, MdNavigateNext, MdOutlineHowToReg, MdOutlinePersonOff, MdPeopleOutline, MdVisibility } from "react-icons/md";
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
    return (
        <div className="users-page">
            <h1 className="users-title">Users</h1>
            <div className="users-card-section">
                <UsersCardAnalytics cardIcon={<MdPeopleOutline fontSize={25}/>} cardTitle={'Users'}  cardValue={2234}/>
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
                    <div className="action"><MdMoreVert fontSize={20}/></div>

                    <div className="table-action-modal">
                        <div className="action-modal">
                            <MdVisibility fontSize={15}/>
                            <span>View Details</span>
                        </div>
                        <div className="action-modal">
                            <MdOutlinePersonOff fontSize={15} />
                            <span>Blacklist user</span>
                        </div>
                        <div className="action-modal">
                            <MdOutlineHowToReg fontSize={15} />
                            <span>Activate user</span>
                        </div>
                    </div>
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
            <Outlet />
        </div>
    )
}