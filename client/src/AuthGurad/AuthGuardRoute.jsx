import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AuthGuardRoute = ({ component: Component, ...rest }) => {
    const loggedIn = useSelector((state) => state.auth.loggedIn);

    return (
        <Route
            {...rest}
            render={(props) => {
                return loggedIn === true ? (
                    <Component {...props}/>
                ) : (
                    toast.error("You have to logged in first."),
                    <Redirect to="/log-in"/>
                );
            }}
        />
    );
};

export default AuthGuardRoute;