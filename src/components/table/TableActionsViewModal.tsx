import { ForwardedRef, forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { ViewUserDetailsIcon, BlackListUserIcon, ActivateUserIcon } from "../../assets/icons";
interface UserProps {
    user: any,
}
const TableActionsViewModal = forwardRef(({user }:UserProps, ref:ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className="table-action-modal">
            <NavLink to={`/users/${user.id}/general-details`}>
                <div className="action-modal">
                    <ViewUserDetailsIcon />
                    <span>View Details</span>
                </div>
            </NavLink>
            <div className="action-modal">
                <BlackListUserIcon />
                <span>Blacklist user</span>
            </div>
            <div className="action-modal">
                <ActivateUserIcon />
                <span>Activate user</span>
            </div>
        </div>
    )
})
export default TableActionsViewModal