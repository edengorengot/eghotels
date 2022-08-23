import { NavLink } from "react-router-dom";
import "./NavbarItemComponent.scss"

const NavbarItemComponent = (props) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={`/${props.menuLinksArrProps.replace(" ", "-").toLocaleLowerCase()}`} activeClassName="active-link">
                {props.menuLinksArrProps}
            </NavLink>
        </li>
    )
};

export default NavbarItemComponent;