import { NavLink, Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
// import { FaToolbox } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { HiUsers, HiUserGroup } from "react-icons/hi2";

export default function TheDashboardPage(){
    const { pathname } = useLocation();
    return (
        <>
        <NavBar/>
        <section className="dashboard-page">
            <div className="dashboard-page-layout">
                <div className="dashboard-layout-sidebar">
                    <nav className="flex flex-col">
                        <div className="nav-section">
                            <NavLink to={'/app'}>
                                <div className={`nav-main ${pathname == '/app' && 'active'}`}>
                                { pathname == '/app' && <div className="active-link"></div>}
                                    <div className="nav-link">
                                        <ImHome/>
                                        <span>Dashboard</span>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="nav-section">
                            <span className="nav-title">Customers</span>
                            <NavLink to={'/app/users'}>
                                <div className={`nav-main ${pathname == '/app/users' && 'active'}`}>
                                { pathname == '/app/users' && <div className="active-link"></div>}
                                    <div className="nav-link">
                                        <HiUsers />
                                        <span>Users</span>
                                    </div>
                                </div>
                            </NavLink>
                            <div className={`nav-main`}>
                                <div className="nav-link">
                                    <HiUserGroup />
                                    <span>Guarantors</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="dashboard-layout-mainbar">
                    {
                        pathname == '/app' &&
                        <div>
                            <h1>Dashboard Page</h1>
                            <p>Welcome there!</p>
                            <p>I am so excited on this opportunity! Thank you so much. Looking forward to working with you. God bless!</p>
                        </div>
                    }
                  <Outlet />
                </div>
            </div>
        </section>
        </>
    )
}