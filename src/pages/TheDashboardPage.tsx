import { NavLink, Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import { BriefCaseIcon, DecisionModelIcon, GuarantorIcon, HomeIcon, KarmaIcon, LoanRequestIcon, LogoutIcon, SackBagIcon, SavingsIcon, UsersListIcon, WhiteListIcon } from "../assets/icons";

interface NavigationProps {
    navIcon: any,
    navTitle: string
}
const DashboardNavLink = ({navIcon, navTitle}: NavigationProps) => {
    return (
        <div className="nav-main">
            <div className="nav-link">
                {navIcon}
            <span>{navTitle}</span>
            </div>
        </div>
    )
}
export default function TheDashboardPage(){
    document.title = "Dashboard"
    const { pathname } = useLocation();
    return (
        <>
        <NavBar/>
        <section className="dashboard-page">
            <div className="dashboard-page-layout">
                <div className="dashboard-layout-sidebar">
                    <nav className="navbar-container">
                        <div className="nav-section">
                            <NavLink to={'/app'}>
                                <div className={`nav-main ${pathname == '/app' && 'active'}`}>
                                { pathname == '/app' && <div className="active-link"></div>}
                                    <div className="nav-link">
                                        <HomeIcon/>
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
                                        <UsersListIcon />
                                        <span>Users</span>
                                    </div>
                                </div>
                            </NavLink>
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Guarantors"} />
                            <DashboardNavLink navIcon={<SackBagIcon />} navTitle={"Loans"} />
                            <DashboardNavLink navIcon={<DecisionModelIcon />} navTitle={"Decision Models"} />
                            <DashboardNavLink navIcon={<SavingsIcon />} navTitle={"Savings"} />
                            <DashboardNavLink navIcon={<LoanRequestIcon />} navTitle={"Loan Request"} />
                            <DashboardNavLink navIcon={<WhiteListIcon />} navTitle={"Whitelist"} />
                            <DashboardNavLink navIcon={<KarmaIcon />} navTitle={"Karma"} />
                        </div>
                        <div className="nav-section">
                            <span className="nav-title">Businesses</span>
                            <DashboardNavLink navIcon={<BriefCaseIcon />} navTitle={"Organization"} />
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Loan Products"} />
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Savings Products"} />
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Fees and Charges"} />
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Transactions"} />
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Services"} />
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Service Account"} />
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Settlements"} />
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Report"} />
                        </div>
                        <div className="nav-section">
                            <span className="nav-title">Settings</span>
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Preferences"} />
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Fees and Pricing"} />
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Audit Logs"} />
                            <DashboardNavLink navIcon={<GuarantorIcon />} navTitle={"Systems Messages"} />
                        </div>
                    </nav>
                    <div className="logout-section">
                        <div className="logout">
                            <LogoutIcon/>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
                <div className="dashboard-layout-mainbar">
                    {
                        pathname == '/app' &&
                        <div>
                            <h1>Dashboard Page</h1>
                            <p>Welcome there!</p>
                            <p>I am so excited on this opportunity! My sincere appreciation and gratitude. Thank you.</p>
                        </div>
                    }
                  <Outlet />
                </div>
            </div>
        </section>
        </>
    )
}