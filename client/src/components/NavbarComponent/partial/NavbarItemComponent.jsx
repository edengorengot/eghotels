import { NavLink } from "react-router-dom";
import "./NavbarItemComponent.css"

const NavbarItemComponent = (props) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={`/${props.menuLinksArrProps.replace(" ", "-").toLowerCase()}`} activeClassName="active-link"></NavLink>
            {/* <NavLink className="nav-link" to={`/${props.menuLinksArrProps.replace(" ", "-").toLocaleLowerCase()}`}></NavLink> */}
        </li>
    )
};

export default NavbarItemComponent;