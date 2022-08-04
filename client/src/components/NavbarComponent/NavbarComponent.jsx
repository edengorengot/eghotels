// import { NavLink } from "react-router-dom";
// const menuLinksArr = ["Home", "Test", "Signup", "My Account", "About", "Contact"];
// import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <div className="container">
            <h1>I am the Navbar Component</h1>
{/* 
            <Navbar bg="dark" variant="dark"> נווה
                <Container>
                    <Nav className="me-auto">
                        <NavLink eventKey="1" as={Link} to="/">
                            Home
                        </NavLink>
                        <NavLink eventKey="2" as={Link} to="/about">
                            About
                        </NavLink>
                        <NavLink eventKey="3" as={Link} to="/contact">
                            Contact
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar> */}



            
            {/* <nav className="nav"> שלמה
                <ul>
                    <Link></Link>
                    {menuLinksArr.map((item, idx) => {
                        return (
                            <li className="nav-item" key={idx}>
                                <NavLink className="nav-link" to={`/${item.replace(" ", "-").toLowerCase()}`}>{item}</NavLink>
                            </li>
                        )
                    })}
                    {true ? (
                        "12345"
                    ) :(
                        "54321"
                    )}
                </ul>
            </nav> */}
        </div>
    );
};

export default NavbarComponent;



{/* <Route path="/login" component={Login}/>
<Route path="/logout" component={Logout}/> */}
{/* <Route path="/my-account" component={MyAccount}/> */}
{/* <Route path="/our-rooms" component={OurRooms}/> */}
