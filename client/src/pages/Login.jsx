import { useState } from "react";
import Joi from "joi-browser";
import userValidation from "../validation/user.validation";
import axios from "axios";
import { authActions } from "../store/auth.redux";
import { adminActions } from "../store/admin.redux";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";



const Login = () => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const history = useHistory();
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setInputPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationCheck = Joi.validate(
            {
                email: inputEmail,
                password: inputPassword,
            },
            userValidation.loginSchema
        );
        
        let userData = {
            email: inputEmail.trim(),
            password: inputPassword.trim(),
        };

        if (validationCheck.error) {
            toast.error(JSON.stringify(validationCheck.error.details[0].message));
        } else {
            toast.success("The DATA sent to the server!");

            axios.post(
                '/api/users/login',
                userData
            )
            .then((response) => {
                toast(response.data.message);
                if (response.data.message === "You have successfully logged in.") {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('loggedIn', true);
                    dispatch(authActions.login());
                    
                    if (response.data.admin) {
                        localStorage.setItem('admin', response.data.admin);

                        if (response.data.admin === 1) {
                            dispatch(adminActions.loginAdminWorker());
                        } else if (response.data.admin === 2) {
                            dispatch(adminActions.loginAdmin());
                        } else if (response.data.admin === 3) {
                            dispatch(adminActions.loginOwner());
                        } else {
                            console.log("There is an error with the admin login option.");
                        }

                        dispatch(adminActions.loginOwner());
                    }
                    history.push('/my-account');
                };
            })
            /* err login */
            .catch((err) => {
                if (err.response) {
                    toast(err.response.data);
                } else if (err.request) {
                    console.log("error.request:", err.request);
                    toast.error("The request had a problem.");
                } else {
                    toast.error("Something went wrong.");
                }
            });
        };
    };

    return (
        <>
            <div className="top-banner">
                <img
                    className="fullSize"
                    src="/images/general/login-banner.jpeg"
                    alt="login screen in a tablet"
                />

                <img
                    className="responsiveImg"
                    src="/images/general/login-banner-responsive.jpeg"
                    alt="login screen in a tablet"
                />
            </div>

            <div className="main container">
                <section className="center">
                    <div className="row">
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-6 form-box">
                            <h2>Login</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="inputEmail" className="form-label">Email<span>*required</span></label>
                                    <input type="email" className="form-control" id="inputEmail" onChange={handleEmailChange} value={inputEmail} placeholder="someone@gmail.com"/>
                                    <div id="emailHelp" className="form-text">
                                        Enter your email address<br/>
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="inputPassword" className="form-label">Password<span>*required</span></label>
                                    <input type="password" className="form-control" id="inputPassword" onChange={handlePasswordChange} value={inputPassword} placeholder="Enter a password here..."/>
                                    <div id="passwordHelp" className="form-text">You have to use at least 1 uppercase and lowercase character plus a number and a symbol (! @ # $ % ^ - & _ *).</div>
                                </div>

                                <button type="submit" className="btn btn-dark" disabled={!inputEmail || !inputPassword}>Submit</button>
                            </form>

                            <div className="form-link">
                                <Link className="btn btn-dark" to={"/forgot-password"}>Forgot password?</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-3"></div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Login;
