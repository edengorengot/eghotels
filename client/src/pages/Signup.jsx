import { useState } from "react";
import Joi from "joi-browser";
import signupSchema from "../validation/signup.validation";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


const Signup = () => {
    const [inputFirstName, setInputFirstName]  = useState("");
    const [inputLastName, setInputLastName]  = useState("");
    const [inputEmail, setInputEmail]  = useState("");
    const [inputMobilePhone, setInputMobilePhone]  = useState("");
    const [inputTelephone, setInputTelephone]  = useState("");
    const [inputPassword, setInputPassword]  = useState("");
    const [inputPasswordRepeat, setInputPasswordRepeat]  = useState("");
    const [inputProfileImg, setInputProfileImg]  = useState("");

    const history = useHistory();

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

    const handleInputProfileImgChange = (e) => {
        // console.log("Profile Image:", e.target.value);
        setInputProfileImg(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let passwordChecker = (inputPassword, inputPasswordRepeat) => {
            if (inputPassword === inputPasswordRepeat) {
                return true;
            } else {
                return false;
            };
            
            // if (inputPassword !== inputPasswordRepeat) {
            //     console.log("the passwords are not the same...");
                
            // }
        };
        // if (
        //     inputText.title.trim() &&
        //     inputText.title.length >= 3 &&
        //     inputText.title.length <= 20
        //   ) {
        //     props.addTodoProps(inputText.title);
        //     setInputText({
        //       title: "",
        //     });
        //   } else {
        //     alert("Please write an item between 3 to 20 letters");
        //   }
        console.log("firstName", inputFirstName);
        console.log("lastName", inputLastName);
        console.log("email", inputEmail);
        console.log("mobilePhone", inputMobilePhone);
        console.log("telephone", inputTelephone);
        console.log("password", inputPassword);
        console.log("passwordRepeat", inputPasswordRepeat);
        console.log("profileImg", inputProfileImg);

        const validationCheck = Joi.validate(
            {
                firstName: inputFirstName,
                lastName: inputLastName,
                email: inputEmail,
                mobilePhone: inputMobilePhone,
                telephone: inputTelephone,
                password: inputPassword,
                passwordRepeat: inputPasswordRepeat,
                profileImg: inputProfileImg,
            },
            signupSchema
        );
        console.log("Validated Values:", validationCheck);
        console.log("Password Checker:", passwordChecker());

        console.log(validationCheck.error);

        if (validationCheck.error) {
            toast.error("One of the values is incorrect...");
        } else {
            console.log("here!!!!!!!!!!!!!!!!!!!!!!!!");
            axios.post(
                '/api/users/signup',
                {
                    firstName: inputFirstName,
                    lastName: inputLastName,
                    email: inputEmail,
                    mobilePhone: inputMobilePhone,
                    telephone: inputTelephone,
                    password: inputPassword,
                    profileImg: inputProfileImg,
                }
            )
            .then((response) => {
                console.log("response", response);
            });
            console.log("here is my test!");
        };
    };

    return (
        <>
            <div className="container">
                <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputFirstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="inputFirstName" onChange={handleFirstNameChange} value={inputFirstName} placeholder="First name..."/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputLastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="inputLastName" onChange={handleLastNameChange} value={inputLastName} placeholder="Last name..."/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" onChange={handleEmailChange} value={inputEmail} placeholder="someone@gmail.com"/>
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputMobilePhone" className="form-label">Mobile Phone</label>
                        <input type="tel" className="form-control" id="inputMobilePhone" onChange={handleMobilePhoneChange} value={inputMobilePhone} placeholder="0501234567"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputTelephone" className="form-label">Telephone</label>
                        <input type="tel" className="form-control" id="inputTelephone" onChange={handleTelephoneChange} value={inputTelephone} placeholder="031234567"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword" onChange={handlePasswordChange} value={inputPassword} placeholder="Enter a password here..."/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPasswordRepeat" className="form-label">Repeat Password</label>
                        <input type="password" className="form-control" id="inputPasswordRepeat" onChange={handlePasswordRepeatChange} value={inputPasswordRepeat} placeholder="Repeat your password here..."/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputProfileImg" className="form-label">Profile Image</label>
                        <input type="url" className="form-control" id="inputProfileImg" onChange={handleInputProfileImgChange} value={inputProfileImg} placeholder="Enter a link to an image..."/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Signup;
