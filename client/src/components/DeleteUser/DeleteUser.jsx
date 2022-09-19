import { useState } from 'react';
import axios from 'axios';
import { authActions } from "../../store/auth.redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DeleteUser = () => {
    const [agree, setAgree] = useState(false);

    const history = useHistory();
    const dispatch = useDispatch();

    const token = localStorage.getItem("token");

    const handleAgreeChange = (e) => {
        setAgree(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (agree) {
            toast.success("The request sent to the server!");

            console.log(token);

            axios.delete('/api/users/deleteuser', { headers: {token} })

            .then((response) => {
                toast(response.data.message);
                if (response.data.message === "User deleted successfully.") {
                    dispatch(authActions.logout());
                    localStorage.clear();
                    toast.success("You have successfully deleted your account.");
                    history.push('/');
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
                }
            });
        } else {
            alert("Something went wrong. contact us if you want to delete your account.");
        };
    };

    return (
        <>
            <h3>Delete My User</h3>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I am sure that I want to delete my account." onChange={handleAgreeChange} checked={agree}/>
                    <Form.Text className="text-muted">
                        Once a user is deleted, its permanently!
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={agree !== true}>
                    Submit
                </Button>
            </Form>
        </>
    )
};

export default DeleteUser;