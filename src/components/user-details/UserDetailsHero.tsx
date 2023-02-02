import { useQuery } from "react-query";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";

export default function UserDetailsHero(){
    //Getting user id from route params
    let { userId } = useParams();
    //Async fetching data from endpoint using user id 
    const getUserDetailedInformation = async () => {
        const response = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`);
        return response.json();
    };
    const {data, status } = useQuery("userDetails", getUserDetailedInformation);
    localStorage.setItem("LENDSQR_USERDETAIL", JSON.stringify(data))

    //Title document
    document.title = `${data.profile.firstName} ${data.profile.lastName}`
    return (
        <div className="UserDetailsHero">
            <NavLink to={'/app/users'} className="breadcrumb">
                <HiArrowLongLeft />
                <div>Back to Users</div>
            </NavLink>
                {
                    status === "error" && <p className="error-message-fetching-data">Error fetching data</p>
                }
                {
                    status === "loading" && <p className="fetching-data-message"> Fetching data</p>
                }
                {
                status === "success" && (
                    <>
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
                                    <img className="profile-image" src={data.profile.avatar} alt={data.userName} title={data.userName} />
                                    <div className="profile-name">
                                        <span className="profile">{data.userName}</span>
                                        <span className="profile-id">{data.accountNumber}</span>
                                    </div>
                                </div>
                                <div className="profile-rating">
                                    <span>Users tiers</span>
                                    <span className="rating">Ratings</span>
                                </div>
                                <div className="profile-value">
                                    <div className="amount"> {`${data.profile.currency} ${data.accountBalance}`}</div>
                                    <div className="bank-id">{`${data.profile.bvn}/${data.orgName}`}</div>
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
                    </>
                )
            }
        </div>
    )
}