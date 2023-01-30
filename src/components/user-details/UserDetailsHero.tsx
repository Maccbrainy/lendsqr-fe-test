import { HiArrowLongLeft, HiOutlineUser } from "react-icons/hi2";
import { NavLink, Outlet } from "react-router-dom";
export default function UserDetailsHero(){
    return (
        <div className="UserDetailsHero">
            <NavLink to={'/app/users'} className="breadcrumb">
                <HiArrowLongLeft />
                <div>Back to Users</div>
            </NavLink>
            <div className="detail-actions">
                <h1>User Details</h1>
                <div className="actions-button">
                    <button className="blacklist-user" title="Blacklist user" type="button">Blacklist user</button>
                    <button className="activate-user" title="Activate user" type="button">Activate user</button>
                </div>
            </div>
            <div className="detail-hero">
                <div className="hero-summary">
                    <div className="profile-detail">
                        <div className="profile-image"><HiOutlineUser fontSize={40}/></div>
                        <div className="profile-name">
                            <span className="profile">Grace Effiong</span>
                            <span className="profile-id">7yudrtERFD</span>
                        </div>
                    </div>
                    <div className="profile-rating">
                        <span>Users tiers</span>
                        <span className="rating">Ratings</span>
                    </div>
                    <div className="profile-value">
                        <div className="amount">N 2, 000, 000, 000</div>
                        <div className="bank-id">98769999/Providus Bank</div>
                    </div>
                </div>
                <div className="detail-hero-navigation">
                    <NavLink className="hero-link" to={''}>General details</NavLink>
                    <NavLink className="hero-link" to={'documents'}>Documents</NavLink>
                    <NavLink className="hero-link" to={'bank-details'}>Bank details</NavLink>
                    <NavLink className="hero-link" to={'loan'}>Loan</NavLink>
                    <NavLink className="hero-link" to={'savings'}>Savings</NavLink>
                    <NavLink className="hero-link" to={'app-and-systems'}>App and Systems</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}