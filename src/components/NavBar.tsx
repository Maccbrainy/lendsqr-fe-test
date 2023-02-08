import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon, NotificationIcon, SearchIcon } from "../assets/icons";
import InputForm from "./InputForm";
import profileImage from "../assets/profile-image.png"
import { MdDehaze } from "react-icons/md";
import MobileMenu from "./MobileMenu";

export default function NavBar(){
    const lendsqrLogoSource = `https://www.lendsqr.com/assets/icons/header-logo.svg`;
    //Search form data state declaration
    const [searchData, setSearchData] = useState({
        search: ""
    })
    //Mobile menu state declaration
    const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
    //Search form data state on change
    const handleSearchFormChange = (event: { target: { name: string; value: string; }; }) => {
        setSearchData((prevState) => ({...prevState, [event.target.name]:event.target.value}))
    }
    //Search bar function
    const submitSearchData = () => {
        alert("submit search data");
    }
    //Open Mobile menu function
    const openMobileMenu = () => {
        isMobileMenu ? setIsMobileMenu(false) : setIsMobileMenu(true)
    }
    return (
        <>
        <nav className="navigation-top-bar">
            <div className="navbar-left">
                <NavLink className="logo-link" to={'/app'}>
                    <img className="logo-size" title="Lendsqr logo" src={lendsqrLogoSource} alt="Lendsqr logo" />
                </NavLink>
                <div className="search-container">
                    <InputForm className="search-input" inputType="text" inputName="search" placeholder="Search for something" handleChange={handleSearchFormChange} />
                    <button onClick={submitSearchData} type="submit" title="Search button"><SearchIcon /></button>
                </div>
            </div>
            <div className="navbar-profile">
                <span  className="nav-doc">Docs</span>
                <NotificationIcon />
                <div className="profile">
                    <div className="profile-image">
                        <img src={profileImage} alt="Profile image" />
                    </div>
                    <div className="profile-name">
                        <span>Adedeji</span>
                        <ChevronDownIcon />
                    </div>
                </div>
            </div>
            <div onClick={openMobileMenu} className="mobile-menu"><MdDehaze fontSize={25}/></div>
        </nav>
        {
            isMobileMenu && (<MobileMenu closeMobileMenuHandler={() => setIsMobileMenu(false)}/>)
        }
    </>
    )
}