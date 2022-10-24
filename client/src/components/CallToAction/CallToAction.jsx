import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <>
            <div className="container-fluid no-padding">
                <section className="call-to-action responsive-center">
                    <div className="row">
                        <div className="col-12 col-md-3 col-lg-4">Do you want to make a reservation?</div>
                        <div className="col-12 col-md-3 col-lg-2"><Link className="btn btn-dark" to={"/signup"}>signup here!</Link></div>
                        <div className="col-12 col-md-3 col-lg-4">already a signed member?</div>
                        <div className="col-12 col-md-3 col-lg-2"><Link className="btn btn-dark" to={"/log-in"}>Click here!</Link></div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CallToAction;











