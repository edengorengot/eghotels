import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import axios from 'axios';
import UpdateUser from '../components/UpdateUser/UpdateUser';
import DeleteUser from '../components/DeleteUser/DeleteUser';
import { toast } from 'react-toastify';

const MyAccount = () => {
    const token = localStorage.getItem("token");
    let [user] = useState({});

    // (async () => {
    //     toast.success("The DATA sent to the server!");
    //     console.log("here1");
    //     axios.get('/api/users/userbyid', { headers: {token} })
    //     .then((response) => {
    //         console.log("here2");
    //         console.log("res:", response);
    //         user = {
    //             id: response.data._id,
    //             firstName: response.data.firstName,
    //             lastName: response.data.lastName,
    //             email: response.data.email,
    //             mobilePhone: response.data.mobilePhone,
    //             telephone: response.data.telephone,
    //             clubPoints: response.data.clubPoints,
    //             preferences: response.data.preferences,
    //             reservations: response.data.reservations,
    //             registered: response.data.createdAt,
    //         };
    //         console.log(user);
    //         // toast(response.data.message);
    //     })
    //     .catch((err) => {
    //         console.log("errors:", err);
    //         toast.error("There was an error with the data retrieval");
    //     });
    // })();

    const [key, setKey] = useState('home');
    const myData = "Get my data with token or something else...";

    return (
        <>
            <h1>MyAccount</h1>

            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
                fill
            >
                <Tab eventKey="home" title="Home">
                    <h2>my favorite hotels</h2>
                    <h2>{myData}</h2>
                    <h2>My Active Reservations</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quibusdam, qui temporibus quo nobis, expedita dolorum consequuntur sapiente architecto, quaerat corporis. Autem at dicta molestias voluptatibus sint atque voluptate illo!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quibusdam, qui temporibus quo nobis, expedita dolorum consequuntur sapiente architecto, quaerat corporis. Autem at dicta molestias voluptatibus sint atque voluptate illo!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quibusdam, qui temporibus quo nobis, expedita dolorum consequuntur sapiente architecto, quaerat corporis. Autem at dicta molestias voluptatibus sint atque voluptate illo!</p>
                </Tab>

                <Tab eventKey="reservations" title="Reservations">
                    <h2>My Reservations</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quibusdam, qui temporibus quo nobis, expedita dolorum consequuntur sapiente architecto, quaerat corporis. Autem at dicta molestias voluptatibus sint atque voluptate illo!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quibusdam, qui temporibus quo nobis, expedita dolorum consequuntur sapiente architecto, quaerat corporis. Autem at dicta molestias voluptatibus sint atque voluptate illo!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quibusdam, qui temporibus quo nobis, expedita dolorum consequuntur sapiente architecto, quaerat corporis. Autem at dicta molestias voluptatibus sint atque voluptate illo!</p>
                </Tab>

                <Tab eventKey="profile" title="My Profile">
                    <h2>My Profile</h2>
                    <UpdateUser/>
                </Tab>

                <Tab eventKey="contact" title="Contact">
                    <h2>Contact Us</h2>
                    <h5>Open Socket</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quibusdam, qui temporibus quo nobis, expedita dolorum consequuntur sapiente architecto, quaerat corporis. Autem at dicta molestias voluptatibus sint atque voluptate illo!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quibusdam, qui temporibus quo nobis, expedita dolorum consequuntur sapiente architecto, quaerat corporis. Autem at dicta molestias voluptatibus sint atque voluptate illo!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quibusdam, qui temporibus quo nobis, expedita dolorum consequuntur sapiente architecto, quaerat corporis. Autem at dicta molestias voluptatibus sint atque voluptate illo!</p>
                </Tab>

                <Tab eventKey="settings" title="Settings">
                    <h2>My Settings</h2>
                    <DeleteUser/>
                </Tab>
            </Tabs>
        </>
    );
};

export default MyAccount;