import { useState } from 'react';
import Joi from "joi-browser";
import userValidation from '../../validation/user.validation';
import axios from 'axios';
import { toast } from "react-toastify";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AdminTier = (props) => {
    const token = props.token;
    const admin = props.admin;
    const [inputEmail, setInputEmail] = useState("");
    const [inputAdmin, setInputAdmin] = useState("");
    const [agree, setAgree] = useState(false);

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    };

    const handleAdminChange = (e) => {
        setInputAdmin(e.target.value);
    };

    const handleAgreeChange = (e) => {
        setAgree(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationCheck = Joi.validate(
            {
                email: inputEmail,
                admin: inputAdmin,
            },
            userValidation.adminSchema
        );
        
        const userData = {
            email: inputEmail.trim(),
            admin: inputAdmin,
        };

        const options = {
            headers: {
                token: token,
                admin: admin
            },
        };

        if (validationCheck.error) {
            toast.error(JSON.stringify(validationCheck.error.details[0].message));
        } else {
            toast.success("The request sent to the server!");
            axios.patch('/api/users/admin', userData, options )
            .then((response) => {
                toast(response.data.message);
            })
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
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="inputEmail" onChange={handleEmailChange} value={inputEmail} placeholder="someone@gmail.com"/>
                    <Form.Text className="text-muted">
                        Enter your email address
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Admin tier</Form.Label>
                    <br />
                    <Form.Text className="text-muted">
                        Open the select menu below.
                    </Form.Text>
                    <Form.Select id="inputAdmin" onChange={handleAdminChange} value={inputAdmin}>
                        <option value="0">Client</option>
                        <option value="1">AdminWorker</option>
                        <option value="2">Admin</option>
                        <option value="3">Owner</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I am sure that I want to changed this account tier level." onChange={handleAgreeChange} checked={agree}/>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!inputEmail || !inputAdmin || agree !== true}>
                    Submit
                </Button>
            </Form>
        </>
    )
};

export default AdminTier;