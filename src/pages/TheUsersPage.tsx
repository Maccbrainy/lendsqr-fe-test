import { Outlet } from "react-router-dom";

export default function TheUsersPage(){
    return (
        <div className="UsersPage">
            <h1>All Users</h1>
            <Outlet />
        </div>
    )
}