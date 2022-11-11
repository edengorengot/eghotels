import { useState } from 'react';
import Joi from "joi-browser";
import hotelValidation from '../../validation/hotel.validation';
import axios from 'axios';
import { toast } from "react-toastify";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DeleteHotel = (props) => {
    const token = props.token;
    const admin = props.admin;
    const [inputHotelName, setInputHotelName] = useState("");
    const [agree, setAgree] = useState(false);

    const handleHotelNameChange = (e) => {
        setInputHotelName(e.target.value);
    };

    const handleAgreeChange = (e) => {
        setAgree(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationCheck = Joi.validate(
            {
                hotelName: inputHotelName,
            },
            hotelValidation.searchSchema,
        );

        const options = {
            headers: {
                token: token,
                admin: admin,
                hotelName: inputHotelName,
            },
        };

        if (validationCheck.error) {
            toast.error(JSON.stringify(validationCheck.error.details[0].message));
        } else {
            toast.success("The request sent to the server!");
            axios.delete('/api/hotels/delete', options )
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
                };
            });
        };
    };

    return (
        <>
            <h2>Delete Hotel</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Hotel Name</Form.Label>
                    <Form.Control type="text" id="inputHotelName" onChange={handleHotelNameChange} value={inputHotelName} placeholder="EG Tel Aviv"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I am sure that I want to delete this hotel." onChange={handleAgreeChange} checked={agree}/>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!inputHotelName || agree !== true}>
                    Submit
                </Button>
            </Form>

            <hr />
        </>
    )
};

export default DeleteHotel;