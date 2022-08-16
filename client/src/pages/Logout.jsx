import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { authActions } from "../store/auth.redux";

const Logout = () => {
    const history = useHistory();
    // const dispatch = useDispatch();

    localStorage.clear();
    // dispatch(authActions.logout());
    history.push("/");
    
    return (
        <>
            <h1>Logout</h1>
        </>
    )

};

export default Logout;