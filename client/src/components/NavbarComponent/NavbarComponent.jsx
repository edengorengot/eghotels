import { useSelector } from "react-redux";
import logo from '../../logo.svg';

/* Bootstrap imports */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


const NavbarComponent = () => {
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const admin = useSelector((state) => state.admin.adminStatus);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        />{' '}
                        <h1>EG Hotels</h1>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100vh' }} navbarScroll>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            <NavDropdown title="EG Tel Aviv" id="eg-tel-aviv-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/tel-aviv-home">EG Tel Aviv</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/tel-aviv-rooms">Our Rooms</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/tel-aviv-hotel-facilities">Hotel Facilities</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="EG Carmel" id="eg-carmel-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/carmel-home">EG Carmel</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/carmel-rooms">Our Rooms</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/carmel-hotel-facilities">Hotel Facilities</NavDropdown.Item>
                            </NavDropdown>

                            {/* 
                            <NavDropdown title="EG Eilat">
                                <NavDropdown.Item as={Link} to="/carmel-home">EG 1</NavDropdown.Item>

                                <NavDropdown title="EG 2" id="eg-carmel-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/carmel-home">EG 2.1</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/carmel-home">EG 2.2</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown.Item as={Link} to="/carmel-home">EG 3</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to="/carmel-home">EG 4</NavDropdown.Item>
                            </NavDropdown>
                            */}

                            <Nav.Link as={Link} to="/my-account">My Account</Nav.Link>
                            {(admin === "Owner" || admin === "Admin" || admin === "AdminWorker") && <Nav.Link as={Link} to="/admin-dashboard">Admin Dashboard</Nav.Link>}

                            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                            {loggedIn ? (
                                <Nav.Link as={Link} to="/log-out">Log Out</Nav.Link>
                                ) : (
                                <Nav.Link as={Link} to="/log-in">Log In</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;