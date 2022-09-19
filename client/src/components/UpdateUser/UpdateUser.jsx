import { useState } from 'react';
// import Joi from "joi-browser";
// import userValidation from '../../validation/user.validation';
// import axios from 'axios';
import { toast } from "react-toastify";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateUser = () => {
    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputMobilePhone, setInputMobilePhone] = useState("");
    const [inputTelephone, setInputTelephone] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputPasswordRepeat, setInputPasswordRepeat] = useState("");

    const handleFirstNameChange = (e) => {
        setInputFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setInputLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    };
    
    const handleMobilePhoneChange = (e) => {
        setInputMobilePhone(e.target.value);
    };

    const handleTelephoneChange = (e) => {
        setInputTelephone(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setInputPassword(e.target.value);
    };

    const handlePasswordRepeatChange = (e) => {
        setInputPasswordRepeat(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputPassword || inputPasswordRepeat) {
            if (inputPassword !== inputPasswordRepeat) {
                toast.error("Both passwords need to be filled with the same password.");
                return;
            };
        };

        const userDataForm = {
            firstName: inputFirstName,
            lastName: inputLastName,
            email: inputEmail,
            mobilePhone: inputMobilePhone,
            telephone: inputTelephone,
            password: inputPassword,
            passwordRepeat: inputPasswordRepeat,
        };

        const filledUserData = {};

        // console.log("userDataForm:", userDataForm);
        
        for (const key in userDataForm) {
            if (userDataForm[key] !== "") {
                // console.log(key, userDataForm[key]);
                filledUserData[key] = userDataForm[key];
            }
        };
        
        console.log("filledUserData:", filledUserData);

        // const validationCheck = Joi.validate();

//         if (agree) {
//             toast.success("The request sent to the server!");

//             console.log(token);

//             axios.delete('/api/users/deleteuser', {headers: {token} })

//             .then((response) => {
//                 toast(response.data.message);
//                 if (response.data.message === "User deleted successfully.") {
//                     dispatch(authActions.logout());
//                     localStorage.clear();
//                     toast.success("You have successfully deleted your account.");
//                     history.push('/');
//                 };
//             })

//             .catch((err) => {
//                 if (err.response) {
//                     toast(err.response.data);
//                 } else if (err.request) {
//                     console.log("error.request:", err.request);
//                     toast.error("The request had a problem.");
//                 } else {
//                     toast.error("Something went wrong.");
//                 }
//             });
//         } else {
//             alert("Something went wrong. contact us if you want to delete your account.");
//         };
    };

    return (
        <>
            <div className='container'>
                <h3>Update My User</h3>

                <div>
                    <h4>Your Current Information</h4>
                    <p>First Name:</p>
                    <p>Last Name:</p>
                    <p>Email:</p>
                    <p>Mobile Phone:</p>
                    <p>Telephone:</p>
                </div>

                <hr/>

                <h4>Update Form</h4>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" id="inputFirstName" onChange={handleFirstNameChange} value={inputFirstName} placeholder="Enter your first name..."/>
                        <Form.Text className="text-muted">
                            Enter your first name (2-255 characters).
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" id="inputLastName" onChange={handleLastNameChange} value={inputLastName} placeholder="Enter your last name..."/>
                        <Form.Text className="text-muted">
                            Enter your last name (2-255 characters).
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" id="inputEmail" onChange={handleEmailChange} value={inputEmail} placeholder="someone@gmail.com"/>
                        <Form.Text className="text-muted">
                            Enter your email address<br/>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mobile Phone</Form.Label>
                        <Form.Control type="tel" id="inputMobilePhone" onChange={handleMobilePhoneChange} value={inputMobilePhone} placeholder="0501234567"/>
                        <Form.Text className="text-muted">
                            Enter your phone number.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control type="tel" id="inputTelephone" onChange={handleTelephoneChange} value={inputTelephone} placeholder="031234567"/>
                        <Form.Text className="text-muted">
                            Enter your home or office phone number.
                        </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id="inputPassword" onChange={handlePasswordChange} value={inputPassword} placeholder="Enter a password here..."/>
                        <Form.Text className="text-muted">
                            You have to use at least 1 uppercase and lowercase character plus a number and a symbol (! @ # $ % ^ - & _ *).
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Repeat Password <span>*required for changing password</span></Form.Label>
                        <Form.Control type="password" id="inputPasswordRepeat" onChange={handlePasswordRepeatChange} value={inputPasswordRepeat} placeholder="Repeat your password here..."></Form.Control>
                        <Form.Text className="text-muted">
                            You have to use at least 1 uppercase and lowercase character plus a number and a symbol (! @ # $ % ^ - & _ *).
                        </Form.Text>
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        disabled={
                            !inputFirstName &&
                            !inputLastName &&
                            !inputEmail &&
                            !inputMobilePhone &&
                            !inputTelephone &&
                            ((!inputPassword || !inputPasswordRepeat) || !(inputPassword === inputPasswordRepeat))
                        }
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
};

export default UpdateUser;