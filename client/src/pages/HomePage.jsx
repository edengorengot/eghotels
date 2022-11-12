import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import CallToAction from '../components/CallToAction/CallToAction';

const HomePage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel className="top-slider" activeIndex={index} onSelect={handleSelect} fade>
                <Carousel.Item>
                    <div className="overlay"></div>
                    <img
                        className="d-block w-100"
                        src="/images/home/slider-1.jpeg"
                        alt="First slide"
                    />
{/*
                    <Carousel.Caption>
                        <h1>EG Hotels</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
*/}
                </Carousel.Item>

                <Carousel.Item>
                    <div className="overlay"></div>
                    <img
                        className="d-block w-100"
                        src="/images/home/slider-2.jpeg"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <div className="overlay"></div>
                    <img
                        className="d-block w-100"
                        src="/images/home/slider-3.jpeg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="responsive-banner">
                <img
                    className="d-block w-100"
                    src="/images/home/slider-1-responsive.jpeg"
                    alt=""
                />
            </div>

            <div className="main container">
                <section className="responsive-center">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="/images/home/about.jpeg" alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>Welcome to EG Hotels</h2>
                            <p>At EG Hotels, every stay is a story. And it starts with love. We believe luxury – meaningful, personalized, warm – is our love language, and we deliver it one small act at a time.</p>
                            <h3>The EG story</h3>
                            <p>A name synonymous around the world for continual innovation, remarkable expansion and a single-minded dedication to the highest standards of service, discover how EG Hotels has transformed the hospitality industry and redefined the meaning of luxury travel since first opening its doors back in 2022.</p>
                        </div>
                    </div>
                </section>

                <section className="call-to-action responsive-center">
                    <div className="row">
                        <div className="col-12 col-md-3 col-lg-4">Do you want to make a reservation?</div>
                        <div className="col-12 col-md-3 col-lg-2"><Link className="btn btn-dark" to={"/signup"}>signup here!</Link></div>
                        <div className="col-12 col-md-3 col-lg-4">already a signed member?</div>
                        <div className="col-12 col-md-3 col-lg-2"><Link className="btn btn-dark" to={"/log-in"}>Click here!</Link></div>
                    </div>
                </section>

                <section className="center">
                    <h2>EG Tel Aviv</h2>
                    <p>there is a lot of amazing things at our EG Tel Aviv hotel.</p>

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/home/tel-aviv-location.jpeg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">EG Tel Aviv Location</h3>
                                    <p className="card-text">Our hotel is in the center of the biggest city in Israel by the amazing sea.</p>
                                    <Link className="btn btn-dark" to={"/tel-aviv-home"}>Click here</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/home/tel-aviv-rooms.jpeg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">EG Tel Aviv Rooms</h3>
                                    <p className="card-text">The bright rooms at EG Tel Aviv all have Smart TVs. They have satellite TV and a work desk.</p>
                                    <Link className="btn btn-dark" to={"/tel-aviv-rooms"}>Click here</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/home/tel-aviv-facilities.jpeg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">EG Tel Aviv Facilities</h3>
                                    <p className="card-text">Our facilities contains: spa, swimming pool, poolside bar, jacuzzi, car parking etc...</p>
                                    <Link className="btn btn-dark" to={"/tel-aviv-hotel-facilities"}>Click here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="center">
                    <h2>EG Carmel</h2>
                    <p>there is a lot of amazing things at our EG Carmel hotel.</p>

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/home/carmel-location.jpeg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">EG Carmel Location</h3>
                                    <p className="card-text">Our hotel is in the center of the Carmel mountain in Haifa in a young and spicy position.</p>
                                    <Link className="btn btn-dark" to={"/carmel-home"}>Click here</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/home/carmel-rooms.jpeg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">EG Carmel Rooms</h3>
                                    <p className="card-text">The huge rooms at EG Carmel have a top tier Smart TVs with satellite TV and a work desk.</p>
                                    <Link className="btn btn-dark" to={"/carmel-rooms"}>Click here</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/home/carmel-facilities.jpeg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">EG Carmel Facilities</h3>
                                    <p className="card-text">Our facilities contains: spa, swimming pool, poolside bar, jacuzzi, car parking etc...</p>
                                    <Link className="btn btn-dark" to={"/carmel-hotel-facilities"}>Click here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <CallToAction/>
        </>
    );
};

export default HomePage;