import CallToAction from '../components/CallToAction/CallToAction';
import { useState } from "react";
import Joi from "joi-browser";
import userValidation from "../validation/user.validation";
import axios from "axios";
import { toast } from "react-toastify";



const ContactUs = () => {
    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputBody, setInputBody] = useState("");

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

    const handleBodyChange = (e) => {
        // console.log("Body:", e.target.value);
        setInputBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationCheck = Joi.validate(
            {
                firstName: inputFirstName,
                lastName: inputLastName,
                email: inputEmail,
                body: inputBody,
            },
            userValidation.contactSchema
        );

        let inputFirstNameModified = inputFirstName.trim();
        inputFirstNameModified = userValidation.namePipe(inputFirstNameModified);
        let inputLastNameModified = inputLastName.trim();
        inputLastNameModified = userValidation.namePipe(inputLastNameModified);

        let formData = {
            firstName: inputFirstNameModified,
            lastName: inputLastNameModified,
            email: inputEmail.trim(),
            body: inputBody.trim(),
        };

        if (validationCheck.error) {
            console.log(validationCheck.error);
            toast.error(JSON.stringify(validationCheck.error.details[0].message));
        } else {
            toast.success("The DATA sent to the server!");
            axios.post('/api/users/contact', formData)
            .then((response) => {
                toast(response.data.message);
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
            <div className="top-banner">
                <img
                    className="fullSize"
                    src="/images/placeholder-image-1920-700.jpg"
                    alt=""
                />

                <img
                    className="responsiveImg"
                    src="/images/placeholder-image-992-661.jpg"
                    alt=""
                />
            </div>

            <div className="main container">
                <section className="center">
                    <div className="row">
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-6 form-box">
                            <h2>Contact Us</h2>

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
                                    <label htmlFor="inputBody" className="form-label">Body<span>*required</span></label>
                                    <textarea className="form-control" id="inputBody" onChange={handleBodyChange} value={inputBody} placeholder="Enter your message here..."/>
                                    <div id="bodyHelp" className="form-text">Enter your message (Up to 2000 characters).</div>
                                </div>

                                <button type="submit" className="btn btn-dark" disabled={!inputFirstName || !inputLastName || !inputEmail || !inputBody}>Submit</button>
                            </form>
                        </div>
                        <div className="col-12 col-md-3"></div>
                    </div>
                </section>
            </div>

            <CallToAction/>
        </>
    );
};

export default ContactUs;