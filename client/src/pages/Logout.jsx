import { useHistory } from "react-router-dom";
import { authActions } from "../store/auth.redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Logout = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    (async () => {
        await localStorage.clear();
        await dispatch(authActions.logout());
        await toast.success("You have successfully been logged out.");
        await history.push("/");
    })();
    
    return (
        <>
            <h1>Log out</h1>
        </>
    )
};

export default Logout;