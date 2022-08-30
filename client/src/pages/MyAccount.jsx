import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import UpdateUser from '../components/UpdateUser/UpdateUser';
import DeleteUser from '../components/DeleteUser/DeleteUser';

const MyAccount = () => {
    const [key, setKey] = useState('home');

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