import { useState } from 'react';
// import { useEffect } from 'react';
import Joi from "joi-browser";
import userValidation from '../../validation/user.validation';
import axios from 'axios';
import { toast } from "react-toastify";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';

const UpdateUser = (props) => {
    const user = props.user;
    const token = props.token;
    const [showSpinnerUserData, setShowSpinnerUserData] = useState(false);
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

        userDataForm.firstName = userDataForm.firstName.trim();
        userDataForm.firstName = userValidation.namePipe(userDataForm.firstName);
        userDataForm.lastName = userDataForm.lastName.trim();
        userDataForm.lastName = userValidation.namePipe(userDataForm.lastName);
        userDataForm.email = userDataForm.email.trim();
        userDataForm.mobilePhone = userDataForm.mobilePhone.replace("-", "").trim();
        userDataForm.telephone = userDataForm.telephone.replace("-", "").trim();
        userDataForm.password = userDataForm.password.trim();
        userDataForm.passwordRepeat = userDataForm.passwordRepeat.trim();

        const filledUserData = {};
        
        for (const key in userDataForm) {
            if (userDataForm[key] !== "") {
                filledUserData[key] = userDataForm[key];
            }
        };
        
        const validationCheck = Joi.validate(filledUserData, userValidation.updateSchema);
        let passwordValidation = userValidation.passwordValidation(userDataForm.password);

        if (userDataForm.password) {
            if (!passwordValidation) {
                toast.error("The password is not strong enough!");
                return;
            }
        }

        if (filledUserData.passwordRepeat) {
            delete filledUserData.passwordRepeat;
        }

        if (validationCheck.error) {
            toast.error(JSON.stringify(validationCheck.error.details[0].message));
        } else {
            toast.success("The request sent to the server!");

            setShowSpinnerUserData(true);
            axios.patch('/api/users/update',filledUserData, { headers: {token} })
            .then((response) => {
                toast(response.data.message);
                if (response.data.message === "User was updated successfully.") {
                    for (const key in filledUserData) {
                        if (key !== "password") {
                            user[key] = filledUserData[key];
                        };
                    };
                    setShowSpinnerUserData(false);
                };
            })
            .catch((err) => {
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
            <h3>Update My User</h3>

            <div>
                {showSpinnerUserData && <SpinnerComponent/>}

                {
                    showSpinnerUserData === false &&
                    <>
                        <h4>My Current Information</h4>
                        <p>First Name: {user.firstName}</p>
                        <p>Last Name: {user.lastName}</p>
                        <p>Email: {user.email}</p>
                        <p>Mobile Phone: {user.mobilePhone}</p>
                        <p>Telephone: {user.telephone}</p>
                    </>
                }
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
                    You have to use at least 1 uppercase and lowercase character and a symbol (! @ # $ % ^ - & _ *) plus at least 4 numbers.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Repeat Password <span>*required for changing password</span></Form.Label>
                    <Form.Control type="password" id="inputPasswordRepeat" onChange={handlePasswordRepeatChange} value={inputPasswordRepeat} placeholder="Repeat your password here..."></Form.Control>
                    <Form.Text className="text-muted">
                        You have to use at least 1 uppercase and lowercase character and a symbol (! @ # $ % ^ - & _ *) plus at least 4 numbers.
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
        </>
    )
};

export default UpdateUser;