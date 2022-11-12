import CallToAction from '../components/CallToAction/CallToAction';

const TelAvivRooms = () => {
    return (
        <>
            <div className="top-banner">
                <img
                    className="fullSize"
                    src="/images/tel-aviv/banner.jpeg"
                    alt=""
                />

                <img
                    className="responsiveImg"
                    src="/images/tel-aviv/banner-responsive.jpeg"
                    alt=""
                />
            </div>

            <div className="main container">

                <section className="center">
                    <h2>Our rooms at EG Tel Aviv</h2>
                    <p>
                        The hotel has 100 spacious and beautifully decorated guest rooms, all of them have a fantastic views over the sea. All of the rooms are modern in design and feature a luxury bathroom.
                    </p>

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/tel-aviv/standard-tel-aviv.jpeg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Standard Rooms</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/tel-aviv/executive-tel-aviv.jpeg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Executive Rooms</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/tel-aviv/tel-aviv-suite.jpeg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Tel Aviv Suite</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr />

                <section className="responsive-center">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="/images/tel-aviv/standard-tel-aviv-box.jpeg" alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>Standard Rooms</h2>
                            <p>
                                Modern, spacious design with comfortable seating area, facing the sea or pool decks.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="responsive-center">
                    <div className="row flex-row-reverse">
                        <div className="col-12 col-md-6">
                            <img src="/images/tel-aviv/executive-tel-aviv-box.jpeg" alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>Executive Rooms</h2>
                            <p>
                                Large rooms with sea view, comfortably designed with plush interior, separate living room & bedroom.
                            </p>
                            <p>
                                Rooms include a Jacuzzi bath and other mod-cons.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="responsive-center">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="/images/tel-aviv/tel-aviv-suite-box.jpeg" alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>Tel Aviv Suit</h2>
                            <p>
                                Spectacular very spacious living room area, overlooking the magnificent views of the sea.
                            </p>
                            <p>
                                Exquisite luxurious bedroom and bathroom including a Jacuzzi bath and walk-in wardrobe.
                            </p>
                            <p>
                                Large terrace with great Mediterranean view.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <CallToAction/>
        </>
    );
};

export default TelAvivRooms;