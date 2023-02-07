import { MdClose } from "react-icons/md";
interface MobileMenuProp {
    closeMobileMenuHandler: () => void
}
export default function MobileMenu({closeMobileMenuHandler}: MobileMenuProp){
    return(
        <div className="menu-container">
            <div onClick={closeMobileMenuHandler}><MdClose color="#fff" fontSize={25}/></div>
        </div>
    )
}