import CallToAction from '../components/CallToAction/CallToAction';
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <div className="main container">
                <section className="center">
                    <div className="row">
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-6">
                            <img src="/images/placeholder-image-992-661.jpg" alt="" />
                            <h2>Error 404 - Missing Page</h2>
                            <p>
                                Our apologies, we cannot find the page you are looking for.
                            </p>
                            <p>
                                please discover alternatives below.
                            </p>
                            <div className="404-btn">
                                <Link className="btn btn-dark small-margin" to={"/home"}>Home</Link>
                                <Link className="btn btn-dark small-margin" to={"/Contact"}>Contact</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-3"></div>
                    </div>
                </section>
            </div>

            <CallToAction/>
        </>
    );
};

export default PageNotFound;