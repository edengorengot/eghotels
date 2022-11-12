import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import axios from 'axios';
import SpinnerComponent from '../components/SpinnerComponent/SpinnerComponent';
import UpdateUser from '../components/UpdateUser/UpdateUser';
import DeleteUser from '../components/DeleteUser/DeleteUser';
import FavoriteHotels from '../components/FavoriteHotels/FavoriteHotels';
import HotelCardFavorite from '../components/HotelCardFavorite/HotelCardFavorite';
import { toast } from 'react-toastify';

const MyAccount = () => {
    const token = localStorage.getItem("token");
    const [showSpinnerUserData, setShowSpinnerUserData] = useState(false);
    const [user, setUser] = useState({});
    const [hotels, setHotels] = useState([]);
    const [key, setKey] = useState('home');

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

                /* Get hotels */
                axios.get('/api/hotels/all', { headers: {token} })
                .then((response) => {
                    if (response.data.message === "The hotels has been loaded!") {
                        setHotels(response.data.allHotels);
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

    const handleFavoriteToggle = (id) => {
        axios.patch('/api/users/favorite-hotels', {id: id}, { headers: {token} })
        .then((response) => {
            if (response.data.message === "Favorites hotels changed successfully") {
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
    };

    return (
        <>
            <div className="top-banner">
                <img
                    className="fullSize"
                    src="/images/placeholder-image-1920-700.jpg"
                    alt=""
                />

                <img
                    className="responsiveImg"
                    src="/images/placeholder-image-992-661.jpg"
                    alt=""
                />
            </div>

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
                                <div className="container">
                                    <section className="center">
                                        <div className="row">
                                            <div className="col-12 col-md-3"></div>
                                            <div className="col-12 col-md-6">
                                                <h2>My Account</h2>
                                                <p>Welcome {user.firstName} {user.lastName}.</p>
                                                <p>You have {user.clubPoints} club points right now.</p>
                                                <p>Club member since: {user.registered}</p>
                                            </div>
                                            <div className="col-12 col-md-3"></div>
                                        </div>
                                    </section>

                                    <hr />
                                {/* 
                                    <section className="center">
                                        <div className="row">
                                            <div className="col-12 col-md-3"></div>
                                            <div className="col-12 col-md-6 form-box">
                                                <h2>My Active Reservations</h2>
                                                <h1>On Constructions</h1>
                                            </div>
                                            <div className="col-12 col-md-3"></div>
                                        </div>
                                    </section>

                                    <hr />
                                */}

                                    <section className="center">
                                        <div className="row">
                                            <div className="col-12 col-md-3"></div>
                                            <div className="col-12 col-md-6">
                                                <h2>My Favorite Hotels</h2>

                                                {user.favoriteHotels.map((item) => {
                                                    let favoriteSearch = user.favoriteHotels.indexOf(item);
                                                    return (
                                                        <div className="col-12">
                                                            <HotelCardFavorite hotelName={hotels[favoriteSearch].hotelName} hotelId={hotels[favoriteSearch].hotelId} id={hotels[favoriteSearch].id} key={hotels[favoriteSearch].id}/>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="col-12 col-md-3"></div>
                                        </div>
                                    </section>
                                </div>
                            </>
                        }
                    </div>
                </Tab>

                {/* <Tab eventKey="reservations" title="Reservations">
                    <div className="container">
                        <h2>My Favorite Hotels</h2>
                        <h2>My Reservations</h2>
                        <h1>On Constructions</h1>
                    </div>
                </Tab> */}

                <Tab eventKey="profile" title="My Profile">
                    <div className="container">
                        <section className="center">
                            <div className="row">
                                <div className="col-12 col-md-3"></div>
                                <div className="col-12 col-md-6 form-box">
                                    <h2>My Profile</h2>
                                    <UpdateUser token={token} user={user}/>
                                </div>
                                <div className="col-12 col-md-3"></div>
                            </div>
                        </section>
                    </div>
                </Tab>

                <Tab eventKey="favorites" title="Favorite Hotels">
                    <div className="container">
                        <section className="center">
                            <div className="row">
                                <FavoriteHotels token={token} user={user} hotels={hotels} handleFavoriteToggle={handleFavoriteToggle}/>
                            </div>
                        </section>
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
                        <section className="center">
                            <div className="row">
                                <div className="col-12 col-md-3"></div>
                                <div className="col-12 col-md-6 form-box">
                                    <h2>My Settings</h2>
                                    <DeleteUser token={token}/>
                                </div>
                                <div className="col-12 col-md-3"></div>
                            </div>
                        </section>
                    </div>
                </Tab>
            </Tabs>
        </>
    );
};

export default MyAccount;