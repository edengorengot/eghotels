import { useHistory } from "react-router-dom";
import { authActions } from "../store/auth.redux";
import { adminActions } from "../store/admin.redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Logout = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    (async () => {
        await localStorage.clear();
        await dispatch(authActions.logout());
        await dispatch(adminActions.logout());
        await toast.success("You have successfully been logged out.");
        await history.push("/");
    })();
    
    return (
        <>
            <div className="main container">
                <section className="center">
                    <div className="row">
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-6">
                            <h2>Log Out Page</h2>
                            <p>This is the Log-Out page, you don't supposed to see it for long.</p>
                            <img src="/images/general/logout.jpeg" alt="closed safe" />
                            <p>Our apologies, we cannot help you here.</p>
                        </div>
                        <div className="col-12 col-md-3"></div>
                    </div>
                </section>
            </div>
        </>
    )
};

export default Logout;