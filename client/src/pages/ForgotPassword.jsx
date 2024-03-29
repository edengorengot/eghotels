
import { useState } from "react";
import Joi from "joi-browser";
import userValidation from "../validation/user.validation";
import axios from "axios";
import { toast } from "react-toastify";



const ForgotPassword = () => {
    const [inputEmail, setInputEmail] = useState("");

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationCheck = Joi.validate(
            {
                email: inputEmail,
            },
            userValidation.forgotPasswordSchema
        );
        
        let userData = {
            email: inputEmail.trim(),
        };

        if (validationCheck.error) {
            toast.error(JSON.stringify(validationCheck.error.details[0].message));
        } else {
            toast.success("The DATA sent to the server!");

            axios.patch(
                '/api/users/forgot-password',
                userData
            )
            .then((response) => {
                toast(response.data.message);
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
                    src="/images/general/forgot-password-banner.jpeg"
                    alt="closed lock"
                />

                <img
                    className="responsiveImg"
                    src="/images/general/forgot-password-banner-responsive.jpeg"
                    alt="closed lock"
                />
            </div>

            <div className="main container">
                <section className="center">
                    <div className="row">
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-6 form-box">
                            <h2>Forgot My Password</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="inputEmail" className="form-label">Email<span>*required</span></label>
                                    <input type="email" className="form-control" id="inputEmail" onChange={handleEmailChange} value={inputEmail} placeholder="someone@gmail.com"/>
                                    <div id="emailHelp" className="form-text">
                                        Enter your email address<br/>
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark" disabled={!inputEmail}>Submit</button>
                            </form>
                        </div>
                        <div className="col-12 col-md-3"></div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ForgotPassword;