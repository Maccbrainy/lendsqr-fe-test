import { Outlet } from "react-router-dom";
export default function UserDetailsHero(){
    return (
        <div className="UserDetailsHero">
            <h1>User Details</h1>
            <Outlet />
        </div>
    )
}