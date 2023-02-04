import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon, NotificationIcon, SearchIcon } from "../assets/icons";
import InputForm from "./InputForm";
import profileImage from "../assets/profile-image.png"
import { MdDehaze } from "react-icons/md";

export default function NavBar(){
    const lendsqrLogoSource = `https://www.lendsqr.com/assets/icons/header-logo.svg`;
    const [searchData, setSearchData] = useState({
        search: ""
    })
    const handleSearchFormChange = (event: { target: { name: string; value: string; }; }) => {
        setSearchData((prevState) => ({...prevState, [event.target.name]:event.target.value}))
    }
    const submitSearchData = () => {
        alert("submit search data");
    }
    return (
        <nav className="navigation-top-bar">
            <div className="navbar-left">
                <NavLink className="logo-link" to={'/'}>
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
            <div className="mobile-menu"><MdDehaze fontSize={25}/></div>
        </nav>
    )
}