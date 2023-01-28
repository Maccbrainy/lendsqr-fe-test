import { Outlet } from "react-router-dom";

export default function TheDashboardPage(){
    return (
        <div className="DashboardPage">
            <h1>Dashboard Page</h1>
            <Outlet />
        </div>
        
    )
}