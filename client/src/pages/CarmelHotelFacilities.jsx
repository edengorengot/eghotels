import CallToAction from '../components/CallToAction/CallToAction';

const CarmelHotelFacilities = () => {
    return (
        <>
            <div className="top-banner">
                <img
                    className="fullSize"
                    src="/images/placeholder-image-1920-700.jpg"
                    alt=""
                />

                <img
                    className="responsiveImg"
                    src="/images/placeholder-image-992-661.jpg"
                    alt=""
                />
            </div>

            <div className="main container">
                <section className="center">
                    <h2>Our hotel facilities at EG Carmel</h2>

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">24 Hour Front Desk</h3>
                                    <p className="card-text">
                                        Our reception desk is always open. In case our guests need help or information, they are always there.
                                        Staff were very friendly and happy.
                                        All employees are very kind and responsible.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Fitness Center</h3>
                                    <p className="card-text">
                                        The EG Carmel features an advanced, fully equipped fitness center, offering effective and fun workouts to maintain or improve your fitness while on vacation.
                                        Entrance to the fitness center is free for hotel guests and is limited to adults aged 18+.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Business Lounge</h3>
                                    <p className="card-text">
                                        A beautifully decorated lounge with a magnificent view of the beach offers snacks, light meals and drinks throughout most the day. In addition, the lounge offers internet services.

                                        Access to the business lounge is available in selected room types according to the rate plan and all suites.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Swimming Pools</h3>
                                    <p className="card-text">
                                        The EG Tel-Aviv hotel boasts both an outdoor and an indoor swimming pool both with gorgeous view to the mediterranean sea.
                                        Our outdoor pool is a salt water pool, while the Indoor pool is a chlorinated water pool.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Spa</h3>
                                    <p className="card-text">
                                        The magnificent luxurious spa offering top-of-the-line facilities and treatment rooms.
                                        Spa includes Dry Sauna, Turkish 'Hammam' and a relaxing seating area with refreshments and drinks available throughout the day.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Jacuzzi</h3>
                                    <p className="card-text">
                                        We all know that a spa without a Jacuzzi is not a spa. So especially for that, you will be given a spa pool only with a Jacuzzi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Kids Club</h3>
                                    <p className="card-text">
                                        Enter a magical world at the EG Carmel Kids Club, where every corner is packed with fun activities just for kids: storytime, arts & crafts workshops, toddlers' corner, puppet shows, computer games, toys, and more.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Teenagers Club</h3>
                                    <p className="card-text">
                                        Older children and teens staying at the hotel are invited to step into an innovative multimedia room outfitted with the latest gaming systems: Xbox, PlayStation VR, and more. There's simply nothing better than a vacation filled with new friends and endless tournaments!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Synagogue</h3>
                                    <p className="card-text">
                                        A luxurious hotel with high-quality on-site synagogue.
                                    </p>
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

export default CarmelHotelFacilities;