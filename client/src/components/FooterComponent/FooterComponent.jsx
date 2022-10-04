/* Images */
import logo from '../../logo.svg';

/* Icons */
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";

/* Bootstrap imports */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


const FooterComponent = () => {
    return (
        <footer className="bg-dark">
            <Container className="main-footer">
                <Row>
                    <Col xs={12} md={3} className="footer-col">
                        <Link to={"/home"} className="navbar-brand">
                            <img
                                src={logo}
                                alt=""
                                width="40"
                                height="40"
                                className="d-inline-block"
                            />{' '}
                            <p className="footer-title">EG Hotels</p>
                        </Link>

                        <div className="social-media">
                            <h4>social media</h4>
                            <button className="social-media-btn">
                                <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank">
                                    <FaFacebookSquare/>
                                </Link>
                            </button>

                            <button className="social-media-btn">
                                <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank">
                                    <FaInstagramSquare/>
                                </Link>
                            </button>

                            {/* <button className="social-media-btn">
                                <Link to={{ pathname: "https://www.youtube.com/" }} target="_blank">
                                    <FaYoutube/>
                                </Link>
                            </button> */}

                            <button className="social-media-btn">
                                <Link to={{ pathname: "https://www.twitter.com/" }} target="_blank">
                                    <FaTwitterSquare/>
                                </Link>
                            </button>
                        </div>
                    </Col>

                    <Col xs={12} md={3} className="footer-col">
                        <h4>Sitemap</h4>
                        <p className="sitemapLink">
                            <Link to={"/home"}>Home</Link>
                        </p>
                        <p className="sitemapLink">
                            <Link to={"/about"}>About</Link>
                        </p>
                        <p className="sitemapLink">
                            <Link to={"/contact"}>Contact</Link>
                        </p>
                        <p className="sitemapLink">
                            <Link to={"/my-account"}>My Account</Link>
                        </p>
                    </Col>

                    <Col xs={12} md={3} className="footer-col">
                        <h4>EG Tel Aviv</h4>
                        <p className="sitemapLink">
                            <Link to={"/tel-aviv-home"}>EG Tel Aviv Home</Link>
                        </p>
                        <p className="sitemapLink">
                            <Link to={"/tel-aviv-rooms"}>EG Tel Aviv Rooms</Link>
                        </p>
                        <p className="sitemapLink">
                            <Link to={"/tel-aviv-hotel-facilities"}>EG Tel Aviv Facilities</Link>
                        </p>
                    </Col>
                    
                    <Col xs={12} md={3} className="footer-col">
                        <h4>EG Carmel</h4>
                        <p className="sitemapLink">
                            <Link to={"/carmel-home"}>EG Carmel Home</Link>
                        </p>
                        <p className="sitemapLink">
                            <Link to={"/carmel-rooms"}>EG Carmel Rooms</Link>
                        </p>
                        <p className="sitemapLink">
                            <Link to={"/carmel-hotel-facilities"}>EG Carmel Facilities</Link>
                        </p>
                    </Col>
                </Row>
            </Container>

            <div className="lowerFooter">
                <div className="rights">
                    Copyright &copy; {new Date().getFullYear()} EG Hotels. All rights reserved &reg;. Created by Eden Gorengot.
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;