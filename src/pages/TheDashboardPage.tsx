import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
// import { FaToolbox } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { HiUsers, HiUserGroup } from "react-icons/hi2";

// interface NavBarType {
//     linkTitle?: string,
//     linkIcon: any,
//     linkName: string
// }

// const NavBarSection = ({linkTitle, linkIcon, linkName}:NavBarType) => {
//     return (
//     <div className="nav-section">
//         <span className="nav-title">{linkTitle}</span>
//         <div className="nav-main">
//             <div className="active-link"></div>
//             <div className="nav-link">
//                 {linkIcon}
//                 <span>{linkName}</span>
//             </div>
//         </div>
//     </div> 
//     )
// }
export default function TheDashboardPage(){
    return (
        <>
        <NavBar/>
        <section className="dashboard-page">
            <div className="dashboard-page-layout">
                <div className="dashboard-layout-sidebar">
                    <nav className="flex flex-col">
                        <div className="nav-section">
                            <div className="nav-main">
                                <div className="nav-link">
                                <ImHome/>
                                    <span>Dashboard</span>
                                </div>
                            </div>
                        </div>
                        <div className="nav-section">
                            <span className="nav-title">Customers</span>
                            <div className="nav-main">
                                <div className="active-link"></div>
                                <div className="nav-link">
                                    <HiUsers />
                                    <span>Users</span>
                                </div>
                            </div>
                            <div className="nav-main">
                                <div className="active-link"></div>
                                <div className="nav-link">
                                    <HiUserGroup />
                                    <span>Guarantors</span>
                                </div>
                            </div>
                        </div>
                        {/* <NavBarSection linkTitle={'Customers'} linkIcon={<HiUsers />} linkName={'Users'}/> */}
                    </nav>
                </div>
                <div className="dashboard-layout-mainbar">
                  <Outlet />
                </div>
            </div>
        </section>
        </>
    )
}