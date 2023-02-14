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
    navIcon: JSX.Element,
    navTitle: string,
    url: string
}
const navSidebarLinksCustomers = [
    {
        id: "users-list",
        title: "Users",
        url:"/users",
        icon:<UsersListIcon/>
    },
    {
        id: "guarantors",
        title: "Guarantors",
        url:"/#",
        icon:<GuarantorIcon/>
    },
    {
        id: "loans",
        title: "Loans",
        url:"/#",
        icon:<SackBagIcon/>
    },
    {
        id: "decision-models",
        title: "Decision Models",
        url:"/#",
        icon:<DecisionModelIcon/>
    },
    {
        id: "savings",
        title: "Savings",
        url:"/#",
        icon:<SavingsIcon/>
    },
    {
        id: "loan-request",
        title: "Loan Request",
        url:"/#",
        icon:<LoanRequestIcon/>
    },
    {
        id: "white-list",
        title: "Whitelist",
        url:"/#",
        icon:<WhiteListIcon/>
    },
    {
        id: "Karma",
        title: "Karma",
        url:"/#",
        icon:<KarmaIcon/>
    },
]
const navSidebarLinksBusinesses = [
    {
        id: "organization",
        title: "Organization",
        url:"/#",
        icon:<BriefCaseIcon/>
    },
    {
        id: "loan-products",
        title: "Loan Products",
        url:"/#",
        icon:<LoanRequestIcon/>
    },
    {
        id: "savings-products",
        title: "Savings Products",
        url:"/#",
        icon:<SavingsProductsIcon/>
    },
    {
        id: "fees-and-charges",
        title: "Fees and Charges",
        url:"/#",
        icon:<FeesAndChargesIcon/>
    },
    {
        id: "transactions",
        title: "Transactions",
        url:"/#",
        icon:<TransactionIcon/>
    },
    {
        id: "services",
        title: "Services",
        url:"/#",
        icon:<ServicesIcon/>
    },
    {
        id: "Service-account",
        title: "Service Account",
        url:"/#",
        icon:<ServiceAccountIcon/>
    },
    {
        id: "settlements",
        title: "Settlements",
        url:"/#",
        icon:<SettlementsIcon/>
    },
    {
        id: "report",
        title: "Report",
        url:"/#",
        icon:<ReportIcon/>
    },
]
const navSidebarLinksSettings = [
    {
        id: "preferences",
        title: "Preferences",
        url:"/#",
        icon:<PreferencesIcon/>
    },
    {
        id: "fees-and-pricing",
        title: "Fees and Pricing",
        url:"/#",
        icon:<FeesAndPricingIcon/>
    },
    {
        id: "audit-logs",
        title: "Audit Logs",
        url:"/#",
        icon:<AuditLogsIcon/>
    },
    {
        id: "systems-messages",
        title: "Systems Messages",
        url:"/#",
        icon:<SystemMessagesIcon/>
    }
]
const NavSideBarLink = ({navIcon, navTitle, url}: NavigationProps) => {
    return (
        <NavLink to={`${url}`} className="nav-main" title={navTitle}>
            <div className="nav-link">
                {navIcon}
            <span>{navTitle}</span>
            </div>
        </NavLink>
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
                    <NavSideBarLink url="/app" navTitle="Dashboard" navIcon={<HomeIcon/>} />
                </div>
                <div className="nav-section">
                    <span className="nav-title">Customers</span>
                    {
                        //Customers Links
                        navSidebarLinksCustomers.map((link, index) => <NavSideBarLink key={link.id + index} url={link.url} navTitle={link.title} navIcon={link.icon} />)
                    }
                </div>
                <div className="nav-section">
                    <span className="nav-title">Businesses</span>
                    {
                        //Business Links
                        navSidebarLinksBusinesses.map((link, index) => <NavSideBarLink key={link.id + index} url={link.url} navTitle={link.title} navIcon={link.icon} />)
                    }
                </div>
                <div className="nav-section">
                    <span className="nav-title">Settings</span>
                    {
                        //Settings Links
                        navSidebarLinksSettings.map((link, index) => <NavSideBarLink key={link.id + index} url={link.url} navTitle={link.title} navIcon={link.icon} />)
                    }
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