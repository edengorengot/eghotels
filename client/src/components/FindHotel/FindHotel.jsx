import { useState } from 'react';
import Joi from "joi-browser";
import hotelValidation from '../../validation/hotel.validation';
import axios from 'axios';
import { toast } from "react-toastify";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FindHotel = (props) => {
    const token = props.token;
    const admin = props.admin;
    const [inputHotelName, setInputHotelName] = useState("");

    const handleHotelNameChange = (e) => {
        setInputHotelName(e.target.value);
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
            axios.get('/api/hotels/find', options )
            .then((response) => {
                toast(response.data.message);
                let savedHotel = response.data.databaseCheckerHotelName[0];
                props.setHotel({
                    _id: savedHotel._id,
                    hotelId: savedHotel.hotelId,
                    hotelName: savedHotel.hotelName,
                    generalInformation: savedHotel.generalInformation,
                });
                props.setShowSpinnerHotelData(true);
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
            <h2>Find Hotel</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Hotel Name</Form.Label>
                    <Form.Control type="text" id="inputHotelName" onChange={handleHotelNameChange} value={inputHotelName} placeholder="EG Tel Aviv"/>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!inputHotelName}>
                    Submit
                </Button>
            </Form>

            <hr />
        </>
    );
};

export default FindHotel;