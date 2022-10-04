import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AdminAuthGuardRoute = ({ component: Component, ...rest }) => {
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const admin = useSelector((state) => state.admin.adminStatus);

    return (
        <Route
            {...rest}
            render={(props) => {
                return loggedIn === true && (admin === "Owner" || admin === "Admin" || admin === "AdminWorker") ? (
                    <Component {...props}/>
                ) : (
                    toast.error("You have to logged in first and be an admin."),
                    <Redirect to="/home"/>
                );
            }}
        />
    );
};

export default AdminAuthGuardRoute;