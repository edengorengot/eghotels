import { useState } from "react";
import Joi from "joi-browser";
import userValidation from "../validation/user.validation";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const [inputPassword, setInputPassword] = useState("");
    const [inputPasswordRepeat, setInputPasswordRepeat] = useState("");
    const { resetPassword, email } = useParams();

    const history = useHistory();

    const handlePasswordChange = (e) => {
        // console.log("Password:", e.target.value);
        setInputPassword(e.target.value);
    };

    const handlePasswordRepeatChange = (e) => {
        // console.log("Password Repeat:", e.target.value);
        setInputPasswordRepeat(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationCheck = Joi.validate(
            {
                password: inputPassword,
                passwordRepeat: inputPasswordRepeat
            },
            userValidation.resetPasswordSchema
        );

        let userData = {
            password: inputPassword.trim(),
        };

        let passwordValidation = userValidation.passwordValidation(userData.password);

        if (validationCheck.error) {
            toast.error(JSON.stringify(validationCheck.error.details[0].message));
            return;
        } else if (!passwordValidation) {
            toast.error("The password is not strong enough!");
            return;
        } else {
            toast.success("The DATA sent to the server!");

            axios.patch(
                "/api/users/reset-password/" + resetPassword + "/" + email,
                userData
            )
            .then((response) => {
                toast(response.data.message);
                console.log(response.data.message);

                if (response.data.message === "You have successfully changed your password.") {
                    history.push("/log-in");
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
            <div className="container">
                <h1>Reset My Password</h1>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password<span>*required</span></label>
                        <input type="password" className="form-control" id="inputPassword" onChange={handlePasswordChange} value={inputPassword} placeholder="Enter a password here..."/>
                        <div id="passwordHelp" className="form-text">You have to use at least 1 uppercase and lowercase character plus a number and a symbol (! @ # $ % ^ - & _ *).</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPasswordRepeat" className="form-label">Repeat Password<span>*required</span></label>
                        <input type="password" className="form-control" id="inputPasswordRepeat" onChange={handlePasswordRepeatChange} value={inputPasswordRepeat} placeholder="Repeat your password here..."/>
                        <div id="passwordRepeatHelp" className="form-text">You have to use at least 1 uppercase and lowercase character plus a number and a symbol (! @ # $ % ^ - & _ *).</div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={
                            !inputPassword ||
                            !inputPasswordRepeat ||
                            !(inputPassword === inputPasswordRepeat)
                        }
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
};

export default ResetPassword;