import { useState } from 'react';
import Joi from "joi-browser";
import hotelValidation from '../../validation/hotel.validation';
import axios from 'axios';
import { toast } from "react-toastify";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateHotel = (props) => {
    const token = props.token;
    const admin = props.admin;
    const [inputHotelId, setInputHotelId] = useState("");
    const [inputHotelName, setInputHotelName] = useState("");

    const handleHotelIdChange = (e) => {
        setInputHotelId(e.target.value);
    };

    const handleHotelNameChange = (e) => {
        setInputHotelName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationCheck = Joi.validate(
            {
                hotelId: inputHotelId,
                hotelName: inputHotelName,
            },
            hotelValidation.createSchema,
        );

        const userData = validationCheck.value;

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
            axios.post('/api/hotels/create', userData, options )
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
            <h2>Create Hotel</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Hotel ID</Form.Label>
                    <Form.Control type="text" id="inputHotelId" onChange={handleHotelIdChange} value={inputHotelId} placeholder="12345"/>
                    <Form.Text className="text-muted">
                        Enter a number with 4-8 characters.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Hotel Name</Form.Label>
                    <Form.Control type="text" id="inputHotelName" onChange={handleHotelNameChange} value={inputHotelName} placeholder="EG Tel Aviv"/>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!inputHotelId || !inputHotelName}>
                    Submit
                </Button>
            </Form>

            <hr />
        </>
    )
};

export default CreateHotel;