import CallToAction from '../components/CallToAction/CallToAction';

const CarmelRooms = () => {
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
                    <h2>Our rooms at EG Carmel</h2>
                    <p>
                        The hotel has a 100 rooms with panoramic views. The property offers spacious, elegant rooms with views of the Mediterranean Sea.
                    </p>

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Standard Rooms</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Executive Rooms</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder-image-286-180.jpg" alt="Card"/>
                                <div className="card-body">
                                    <h3 className="card-title">Carmel Suit</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr />

                <section className="responsive-center">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="/images/placeholder-image-500-500.jpg" alt="" />
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
                            <img src="/images/placeholder-image-500-500.jpg" alt="" />
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
                            <img src="/images/placeholder-image-500-500.jpg" alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>Carmel Suit</h2>
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

export default CarmelRooms;