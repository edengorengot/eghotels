import NavbarItemComponent from "./partial/NavbarItemComponent";
import { useSelector } from "react-redux";

const menuLinksArr = ["Home", "About", "My Account", "Our Rooms", "Signup", "Contact"];

const NavbarComponent = () => {
    const loggedIn = useSelector((state) => state.auth.loggedIn);

    return (
        <div className="container">
            <nav>
                <ul className="nav">
                    {menuLinksArr.map((item, idx) => {
                        return (
                            <NavbarItemComponent key={idx} menuLinksArrProps={item}/>
                            )
                        })}
                    {loggedIn ? (
                        <NavbarItemComponent menuLinksArrProps="Log Out"/>
                        ) :(
                        <NavbarItemComponent menuLinksArrProps="Log In"/>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default NavbarComponent;
