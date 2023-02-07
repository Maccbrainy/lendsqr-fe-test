import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { 
    AuditLogsIcon, 
    BriefCaseIcon, 
    DecisionModelIcon, 
    FeesAndChargesIcon, 
    FeesAndPricingIcon, 
    GuarantorIcon, 
    HomeIcon, 
    KarmaIcon, 
    LoanRequestIcon, 
    LogoutIcon, 
    PreferencesIcon, 
    ReportIcon, 
    SackBagIcon, 
    SavingsIcon, 
    SavingsProductsIcon, 
    ServiceAccountIcon, 
    ServicesIcon, 
    SettlementsIcon, 
    SystemMessagesIcon, 
    TransactionIcon, 
    UsersListIcon, 
    WhiteListIcon 
} from "../assets/icons";
import { MutableRefObject, useRef } from "react";

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
    const navigate = useNavigate();
    //The ref content of the navigation bar container
    //persist values between renders.
    // store a mutable value that does not cause a re-render when updated
    const navBarContainerRef = useRef() as MutableRefObject<HTMLDivElement>
    //Logout User function
    const logoutUser = () => {
        localStorage.removeItem("userPassword");
        navigate("/");
    }
    const scrollDashboardNavigationBar = (direction: string) => {
        //Get the children inside this container;
        const { children } = navBarContainerRef.current;
        //Get the clientWidth of the first child
        const clientWidthOfFirstElement = children[0].clientWidth;
        /**
         * Scroll the overflow content of the nav container by the size of the clientWidth of the first child element 
         * which is the const scrollIndex;
         * 
         */
        const scrollIndex = direction == "forward" ? (clientWidthOfFirstElement) : -(clientWidthOfFirstElement)
        navBarContainerRef.current.scrollBy({
           top: 0,
           left: scrollIndex,
           behavior: "smooth" 
        })
    }
    return (
        <>
        <NavBar/>
        <section className="dashboard-page">
            <div className="dashboard-page-layout">
                <div className="dashboard-layout-sidebar">
                        <div className="switch-organization">
                            <BriefCaseIcon/>
                            <select title="switch organization" className="switch-select">
                                <option>Switch organization</option>
                            </select>
                        </div>
                    <nav ref={navBarContainerRef} className="navbar-container">
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
                            <DashboardNavLink navIcon={<LoanRequestIcon />} navTitle={"Loan Products"} />
                            <DashboardNavLink navIcon={<SavingsProductsIcon />} navTitle={"Savings Products"} />
                            <DashboardNavLink navIcon={<FeesAndChargesIcon />} navTitle={"Fees and Charges"} />
                            <DashboardNavLink navIcon={<TransactionIcon />} navTitle={"Transactions"} />
                            <DashboardNavLink navIcon={<ServicesIcon />} navTitle={"Services"} />
                            <DashboardNavLink navIcon={<ServiceAccountIcon />} navTitle={"Service Account"} />
                            <DashboardNavLink navIcon={<SettlementsIcon />} navTitle={"Settlements"} />
                            <DashboardNavLink navIcon={<ReportIcon />} navTitle={"Report"} />
                        </div>
                        <div className="nav-section">
                            <span className="nav-title">Settings</span>
                            <DashboardNavLink navIcon={<PreferencesIcon />} navTitle={"Preferences"} />
                            <DashboardNavLink navIcon={<FeesAndPricingIcon />} navTitle={"Fees and Pricing"} />
                            <DashboardNavLink navIcon={<AuditLogsIcon />} navTitle={"Audit Logs"} />
                            <DashboardNavLink navIcon={<SystemMessagesIcon />} navTitle={"Systems Messages"} />
                        </div>
                    </nav>
                    <div className="navigation-button">
                        <div title="navigate forward" onClick={() => scrollDashboardNavigationBar("forward")} className="button-forward">
                            <MdChevronRight fontSize={25} />
                        </div>
                        <div title="navigate backward" onClick={() => scrollDashboardNavigationBar("backward")} className="button-backward">
                            <MdChevronLeft fontSize={25} />
                        </div>
                    </div>
                    <div className="logout-section">
                        <div onClick={logoutUser} className="logout">
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