import { MutableRefObject, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
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

interface NavigationProps {
    navIcon: any,
    navTitle: string
}
const AppNavigationLink = ({navIcon, navTitle}: NavigationProps) => {
    return (
        <div className="nav-main">
            <div className="nav-link">
                {navIcon}
            <span>{navTitle}</span>
            </div>
        </div>
    )
}
export default function AppNavigationSidebar(){
    const { pathname } = useLocation();
    const navigate = useNavigate();
    /**
     * The ref content of the navigation bar container
     * persist values between renders.
     * store a mutable value that does not cause a re-render when updated
     */
    const navBarContainerRef = useRef() as MutableRefObject<HTMLDivElement>
    //Logout User function
    const logoutUser = () => {
        localStorage.removeItem("userPassword");
        navigate("/");
    }
    /**
     *  Intersection Observer to tell you when an element enters or 
     * leaves the viewport. Detecting visibility of an element.
     * @useInView()
     * target elements: 1st child & last child of the navbar-container
     */
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 1,
      });

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
        <div className="navigation-sidebar">
                <div className="switch-organization">
                    <BriefCaseIcon/>
                    <select title="switch organization" className="switch-select">
                        <option>Switch organization</option>
                    </select>
                </div>
            <nav ref={navBarContainerRef} className="navbar-container">
                <div className="nav-section">
                    <NavLink to={'/app'} ref={ref} className={`nav-main`}>
                        <div className="nav-link">
                            <HomeIcon/>
                            <span>Dashboard</span>
                        </div>
                    </NavLink>
                </div>
                <div className="nav-section">
                    <span className="nav-title">Customers</span>
                    <NavLink to={'/users'} className={`nav-main`}>
                        <div className="nav-link">
                            <UsersListIcon />
                            <span>Users</span>
                        </div>
                    </NavLink>
                    <AppNavigationLink navIcon={<GuarantorIcon />} navTitle={"Guarantors"} />
                    <AppNavigationLink navIcon={<SackBagIcon />} navTitle={"Loans"} />
                    <AppNavigationLink navIcon={<DecisionModelIcon />} navTitle={"Decision Models"} />
                    <AppNavigationLink navIcon={<SavingsIcon />} navTitle={"Savings"} />
                    <AppNavigationLink navIcon={<LoanRequestIcon />} navTitle={"Loan Request"} />
                    <AppNavigationLink navIcon={<WhiteListIcon />} navTitle={"Whitelist"} />
                    <AppNavigationLink navIcon={<KarmaIcon />} navTitle={"Karma"} />
                </div>
                <div className="nav-section">
                    <span className="nav-title">Businesses</span>
                    <AppNavigationLink navIcon={<BriefCaseIcon />} navTitle={"Organization"} />
                    <AppNavigationLink navIcon={<LoanRequestIcon />} navTitle={"Loan Products"} />
                    <AppNavigationLink navIcon={<SavingsProductsIcon />} navTitle={"Savings Products"} />
                    <AppNavigationLink navIcon={<FeesAndChargesIcon />} navTitle={"Fees and Charges"} />
                    <AppNavigationLink navIcon={<TransactionIcon />} navTitle={"Transactions"} />
                    <AppNavigationLink navIcon={<ServicesIcon />} navTitle={"Services"} />
                    <AppNavigationLink navIcon={<ServiceAccountIcon />} navTitle={"Service Account"} />
                    <AppNavigationLink navIcon={<SettlementsIcon />} navTitle={"Settlements"} />
                    <AppNavigationLink navIcon={<ReportIcon />} navTitle={"Report"} />
                </div>
                <div className="nav-section">
                    <span className="nav-title">Settings</span>
                    <AppNavigationLink navIcon={<PreferencesIcon />} navTitle={"Preferences"} />
                    <AppNavigationLink navIcon={<FeesAndPricingIcon />} navTitle={"Fees and Pricing"} />
                    <AppNavigationLink navIcon={<AuditLogsIcon />} navTitle={"Audit Logs"} />
                    <AppNavigationLink navIcon={<SystemMessagesIcon />} navTitle={"Systems Messages"} />
                </div>
            </nav>
            <div className="navigation-button">
                <div title="navigate forward" onClick={() => scrollDashboardNavigationBar("forward")} className="button-forward">
                    <MdChevronRight fontSize={25} />
                </div>
                {
                    !inView && (
                        <div title="navigate backward" onClick={() => scrollDashboardNavigationBar("backward")} className="button-backward">
                            <MdChevronLeft fontSize={25} />
                        </div>
                    )
                }
                
            </div>
            <div className="logout-section">
                <div onClick={logoutUser} className="logout">
                    <LogoutIcon/>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    )
}