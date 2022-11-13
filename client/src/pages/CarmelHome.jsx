import { Link } from "react-router-dom";
import CallToAction from '../components/CallToAction/CallToAction';


const CarmelHome = () => {
    return (
        <>
            <div className="top-banner">
                <img
                    className="fullSize"
                    src="/images/carmel/banner.jpeg"
                    alt="pool with seats"
                />

                <img
                    className="responsiveImg"
                    src="/images/carmel/banner-responsive.jpeg"
                    alt="pool with seats"
                />
            </div>

            <div className="main container">
                <section className="responsive-center">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="/images/carmel/about-carmel.jpeg" alt="pool deck" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>About EG Carmel</h2>
                            <p>
                                This 5-star Haifa hotel is quietly located next to Baháʼí World Centre Mount Carmel. The hotel offers breath-taking views of the famous Haifa skyline. It offers a free on-site 24/7 gym and two award winning restaurants.
                            </p>
                            <p>
                                The bright, soundproofed rooms at the EG Carmel all have Smart TVs, heated bathroom floors and USB charging points. They have satellite TV and a work desk. The marble bathrooms have free toiletries and a bathrobe.
                            </p>
                            <p>
                                The EG Carmel Restaurants serves authentic Israeli cuisine prepared in elegant surroundings. The hotel also offers the contemporary Island Grill, which offers rich meals and a selection of wines. The Carmel Cafe serves light snacks and refreshing drinks throughout the day.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="center">
                    <h2>Our rooms at EG Carmel</h2>

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/carmel/standard-carmel.jpeg" alt="Standard Rooms"/>
                                <div className="card-body">
                                    <h3 className="card-title">Standard Rooms</h3>
                                    <p className="card-text">The Standard Rooms are equipped with a working desk, sofa, 40-inch Smart TV, USB hubs as well as a wet-room style bathroom with a shower, heated floors and towel rails.</p>
                                    <Link className="btn btn-dark" to={"/carmel-rooms"}>Click here</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/carmel/executive-carmel.jpeg" alt="Executive Rooms"/>
                                <div className="card-body">
                                    <h3 className="card-title">Executive Rooms</h3>
                                    <p className="card-text">The Executive Rooms offer sea views, a seating area, work desk, additional wardrobe space, 44-inch Smart TV, USB hubs as well as a wet-room style bathroom with a shower, heated floor and towel rails.</p>
                                    <Link className="btn btn-dark" to={"/carmel-rooms"}>Click here</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/carmel/suite-carmel.jpeg" alt="Suite Rooms"/>
                                <div className="card-body">
                                    <h3 className="card-title">Carmel Suit</h3>
                                    <p className="card-text">These Carmel suites are one-bedroom suites featuring an open-plan design and offer panoramic views, a separate seating area, dining table, 55-inch Smart TV, USB hubs as well as a bathroom with heated flooring, a bathtub and walk-in shower.</p>
                                    <Link className="btn btn-dark" to={"/carmel-rooms"}>Click here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="center info-banner">
                    <h2>Our information at EG Carmel</h2>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <address>address: Yefe Nof St 34, Haifa</address>
                            <p>phone: 04-8312106</p>
                            <p>email: egcarmel@eghotels.com</p>
                        </div>

                        <div className="col-12 col-md-6">
                            <p>Check-in time: 15:00</p>
                            <p>Check-out time: 12:00</p>
                        </div>
                    </div>
                </section>


                <section className="center">
                    <h2>Our facilities at EG Carmel</h2>

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/carmel/carmel-spa.jpeg" alt="Spa"/>
                                <div className="card-body">
                                    <h3 className="card-title">Spa</h3>
                                    <p className="card-text">
                                        The EG Carmel hotel features a magnificent spa that includes treatment rooms & a sauna at a discounted price for hotel guests.
                                    </p>
                                    <Link className="btn btn-dark" to={"/carmel-hotel-facilities"}>Click here</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/carmel/parking.jpeg" alt="Parking"/>
                                <div className="card-body">
                                    <h3 className="card-title">Free Parking</h3>
                                    <p className="card-text">
                                        As with any big city, parking in Haifa can be confusing and a hassle.
                                        We are here to offers a free parking spaces at our private parking at the hotel.
                                    </p>
                                    <Link className="btn btn-dark" to={"/carmel-hotel-facilities"}>Click here</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/home/tel-aviv-facilities.jpeg" alt="Swimming Pool"/>
                                <div className="card-body">
                                    <h3 className="card-title">Swimming Pool</h3>
                                    <p className="card-text">
                                        The main pool with the round area enhances the relaxing environment, Ideally suitable for the perfect family vacation!
                                        The pool features a water slide and a whirl pool.
                                    </p>
                                    <Link className="btn btn-dark" to={"/carmel-hotel-facilities"}>Click here</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="read-more-btn">
                        <Link className="btn btn-dark" to={"/carmel-hotel-facilities"}>For all the facilities, click here</Link>
                    </div>
                </section>
            </div>

            <CallToAction/>
        </>
    );
};

export default CarmelHome;