import { useState } from "react";
import Joi from "joi-browser";
import userValidation from "../validation/user.validation";
import axios from "axios";
import { authActions } from "../store/auth.redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";


const Signup = () => {
    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputMobilePhone, setInputMobilePhone] = useState("");
    const [inputTelephone, setInputTelephone] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputPasswordRepeat, setInputPasswordRepeat] = useState("");

    const history = useHistory();
    const dispatch = useDispatch();

    const handleFirstNameChange = (e) => {
        // console.log("First Name:", e.target.value);
        setInputFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        // console.log("Last Name:", e.target.value);
        setInputLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        // console.log("Email:", e.target.value);
        setInputEmail(e.target.value);
    };
    
    const handleMobilePhoneChange = (e) => {
        // console.log("Mobile Phone:", e.target.value);
        setInputMobilePhone(e.target.value);
    };

    const handleTelephoneChange = (e) => {
        // console.log("Telephone:", e.target.value);
        setInputTelephone(e.target.value);
    };

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
                firstName: inputFirstName,
                lastName: inputLastName,
                email: inputEmail,
                mobilePhone: inputMobilePhone,
                telephone: inputTelephone,
                password: inputPassword,
                passwordRepeat: inputPasswordRepeat,
            },
            userValidation.signupSchema
        );

        let newUserData = {};
        /* String changes for double validation */
        let inputFirstNameModified = inputFirstName.trim();
        inputFirstNameModified = userValidation.namePipe(inputFirstNameModified);
        let inputLastNameModified = inputLastName.trim();
        inputLastNameModified = userValidation.namePipe(inputLastNameModified);
        let inputEmailModified = inputEmail.trim();
        let inputMobilePhoneModified = inputMobilePhone.replace("-", "").trim();
        let inputTelephoneModified = inputTelephone.replace("-", "").trim();
        let inputPasswordModified = inputPassword.trim();


        if (inputTelephoneModified) {
            newUserData = {
                firstName: inputFirstNameModified,
                lastName: inputLastNameModified,
                email: inputEmailModified,
                mobilePhone: inputMobilePhoneModified,
                telephone: inputTelephoneModified,
                password: inputPasswordModified,
            };
        } else {
            newUserData = {
                firstName: inputFirstNameModified,
                lastName: inputLastNameModified,
                email: inputEmailModified,
                mobilePhone: inputMobilePhoneModified,
                password: inputPasswordModified,
            };
        };

        let passwordValidation = userValidation.passwordValidation(newUserData.password);

        if (validationCheck.error) {
            toast.error(JSON.stringify(validationCheck.error.details[0].message));
        } else if (!passwordValidation) {
            toast.error("The password is not strong enough!");
        } else {
            toast.success("The DATA sent to the server!");
            axios.post('/api/users/signup', newUserData)
            .then((response) => {
                toast(response.data.message);

                if (response.data.message === "New user inserted!") {
                    axios.post('/api/users/login', { email: inputEmail, password: inputPassword})
                    .then((response) => {
                        toast(response.data.message);

                        localStorage.setItem('token', response.data.token);
                        dispatch(authActions.login());
                        history.push('/my-account');
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
            /* err signup */
            }).catch((err) => {
                if (err.response) {
                    toast(err.response.data);
                } else if (err.request) {
                    console.log("error.request:", err.request);
                    toast.error("The request had a problem.");
                } else {
                    toast.error("Something went wrong.");
                };
            });
        };
    };

    return (
        <>
            <div className="container">
                <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputFirstName" className="form-label">First Name<span>*required</span></label>
                        <input type="text" className="form-control" id="inputFirstName" onChange={handleFirstNameChange} value={inputFirstName} placeholder="First name..."/>
                        <div id="firstNameHelp" className="form-text">Enter your first name (2-255 characters).</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputLastName" className="form-label">Last Name<span>*required</span></label>
                        <input type="text" className="form-control" id="inputLastName" onChange={handleLastNameChange} value={inputLastName} placeholder="Last name..."/>
                        <div id="lastNameHelp" className="form-text">Enter your last name (2-255 characters).</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email<span>*required</span></label>
                        <input type="email" className="form-control" id="inputEmail" onChange={handleEmailChange} value={inputEmail} placeholder="someone@gmail.com"/>
                        <div id="emailHelp" className="form-text">
                            Enter your email address<br/>
                            We'll never share your email with anyone else.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputMobilePhone" className="form-label">Mobile Phone<span>*required</span></label>
                        <input type="tel" className="form-control" id="inputMobilePhone" onChange={handleMobilePhoneChange} value={inputMobilePhone} placeholder="0501234567"/>
                        <div id="mobilePhoneHelp" className="form-text">Enter your phone number.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputTelephone" className="form-label">Telephone</label>
                        <input type="tel" className="form-control" id="inputTelephone" onChange={handleTelephoneChange} value={inputTelephone} placeholder="031234567"/>
                        <div id="telephoneHelp" className="form-text">Enter your home or office phone number.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password<span>*required</span></label>
                        <input type="password" className="form-control" id="inputPassword" onChange={handlePasswordChange} value={inputPassword} placeholder="Enter a password here..."/>
                        <div id="passwordHelp" className="form-text">You have to use at least 1 uppercase and lowercase character  and a symbol (! @ # $ % ^ - & _ *) plus at least 4 numbers.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPasswordRepeat" className="form-label">Repeat Password<span>*required</span></label>
                        <input type="password" className="form-control" id="inputPasswordRepeat" onChange={handlePasswordRepeatChange} value={inputPasswordRepeat} placeholder="Repeat your password here..."/>
                        <div id="passwordRepeatHelp" className="form-text">You have to use at least 1 uppercase and lowercase character  and a symbol (! @ # $ % ^ - & _ *) plus at least 4 numbers.</div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={
                            !inputFirstName ||
                            !inputLastName ||
                            !inputEmail ||
                            !inputMobilePhone ||
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
    );
};

export default Signup;
