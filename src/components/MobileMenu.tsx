import { MdClose } from "react-icons/md";
import NavSidebar from "./NavSidebar";
interface MobileMenuProp {
    closeMobileMenuHandler: () => void
}
export default function MobileMenu({closeMobileMenuHandler}: MobileMenuProp){
    return(
        <div className="menu-container">
            <div className="close-menu" onClick={closeMobileMenuHandler}><MdClose fontSize={25}/></div>
            <div className="menu-content">
                <NavSidebar/>
            </div>
        </div>
    )
}