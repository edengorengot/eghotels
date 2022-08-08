import NavbarItemComponent from "./partial/NavbarItemComponent";

const menuLinksArr = ["Home", "About", "My Account", "Our Rooms", "Signup", "Contact"];

const NavbarComponent = () => {
    return (
        <div className="container">
            <nav>
                <ul className="nav">
                    {menuLinksArr.map((item, idx) => {
                        return (
                            <NavbarItemComponent key={idx} menuLinksArrProps={item}/>
                            )
                        })}
                    {true ? (
                        <NavbarItemComponent menuLinksArrProps="Login"/>
                        ) :(
                        <NavbarItemComponent menuLinksArrProps="Logout"/>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default NavbarComponent;
