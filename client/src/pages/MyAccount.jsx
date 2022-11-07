import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import axios from 'axios';
import SpinnerComponent from '../components/SpinnerComponent/SpinnerComponent';
import UpdateUser from '../components/UpdateUser/UpdateUser';
import DeleteUser from '../components/DeleteUser/DeleteUser';
import { toast } from 'react-toastify';

const MyAccount = () => {
    const token = localStorage.getItem("token");
    const [showSpinnerUserData, setShowSpinnerUserData] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        setShowSpinnerUserData(false);
    }, [user]);

    useEffect(() => {
        setShowSpinnerUserData(true);
        axios.get('/api/users/userbyid', { headers: {token} })
        .then((response) => {
            if (response.data.message === "User's data sent successfully") {
                setUser({
                    id: response.data.databaseCheckerId._id,
                    firstName: response.data.databaseCheckerId.firstName,
                    lastName: response.data.databaseCheckerId.lastName,
                    email: response.data.databaseCheckerId.email,
                    mobilePhone: response.data.databaseCheckerId.mobilePhone,
                    telephone: response.data.databaseCheckerId.telephone,
                    registered: response.data.databaseCheckerId.createdAt,
        
                    favoriteHotels: response.data.databaseCheckerId.favoriteHotels,
                    reservations: response.data.databaseCheckerId.reservations,
                    clubPoints: response.data.databaseCheckerId.clubPoints,
                    preferences: response.data.databaseCheckerId.preferences,
                });
    
                toast.success(response.data.message);
            } else {
                toast(response.data.message);
                console.log(response.data.message);
            };
        })
        .catch((err) => {
            console.log("errors:", err);
            toast.error("There was an error with the data retrieval");
        });
      }, [token]);

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
                    <div className="container">
                        {showSpinnerUserData && <SpinnerComponent/>}

                        {
                            showSpinnerUserData === false &&
                            <>
                                <p>Welcome {user.firstName} {user.lastName}.</p>
                                <p>You have {user.clubPoints} club points right now.</p>
                                <p>Club member since: {user.registered}</p>

                                <h2>My Active Reservations</h2>
                                <h1>On Constructions</h1>
                                <h2>My Favorite Hotels</h2>
                                <h1>On Constructions</h1>
                            </>
                        }
                    </div>
                </Tab>

                <Tab eventKey="reservations" title="Reservations">
                    <div className="container">
                        <h2>My Favorite Hotels</h2>
                        <h2>My Reservations</h2>
                        <h1>On Constructions</h1>
                    </div>
                </Tab>

                <Tab eventKey="profile" title="My Profile">
                    <div className="container">
                        <h2>My Profile</h2>
                        <UpdateUser token={token} user={user}/>
                    </div>
                </Tab>

                <Tab eventKey="favorites" title="Favorite Hotels">
                    <div className="container">
                        <h2>My Favorite Hotels</h2>
                        <p>adding and deleting favorite hotels</p>
                        <h1>On Constructions</h1>
                    </div>
                </Tab>

                {/* <Tab eventKey="contact" title="Contact">
                    <div className="container">
                        <h2>Contact Us</h2>
                        <h5>Open Socket</h5>
                        <h1>On Constructions</h1>
                    </div>
                </Tab> */}

                <Tab eventKey="settings" title="Settings">
                    <div className="container">
                        <h2>My Settings</h2>
                        <DeleteUser token={token}/>
                    </div>
                </Tab>
            </Tabs>
        </>
    );
};

export default MyAccount;