import { MdNotificationsNone } from "react-icons/md";
export default function NavBar(){
    return (
        <nav className="navigation-top-bar shadow-lg">
            <div className="flex items-center flex-nowrap gap-10">
                <span>Logo</span>
                <span>Search Function</span>
            </div>
            <div className="flex items-center justify-center flex-nowrap gap-10">
                <span  className="underline cursor-pointer">Docs</span>
                <MdNotificationsNone fontSize={25}/>
                <span>Profile</span>
            </div>
        </nav>
    )
}