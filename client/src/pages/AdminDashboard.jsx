import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import SpinnerComponent from '../components/SpinnerComponent/SpinnerComponent';
import { toast } from 'react-toastify';
import AdminTier from '../components/AdminTier/AdminTier';
import CreateHotel from '../components/CreateHotel/CreateHotel';
import DeleteHotel from '../components/DeleteHotel/DeleteHotel';
import FindHotel from '../components/FindHotel/FindHotel';
import UpdateHotel from '../components/UpdateHotel/UpdateHotel';



const AdminDashboard = () => {
    const token = localStorage.getItem("token");
    const admin = localStorage.getItem("admin");
    const [showSpinnerUserData, setShowSpinnerUserData] = useState(false);
    const [showSpinnerHotelData, setShowSpinnerHotelData] = useState(false);
    const [user, setUser] = useState({});
    const [hotel, setHotel] = useState({});
    const [key, setKey] = useState('home');

    useEffect(() => {
        setShowSpinnerUserData(false);
    }, [user]);

    useEffect(() => {
        setShowSpinnerHotelData(false);
    }, [hotel]);

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
                                                <h2>EG Admin Dashboard</h2>
                                                <p>Welcome {user.firstName} {user.lastName}.</p>
                                                <p>Your admin tier is: {admin}</p>
                                                <p>You have joined the team in: {user.registered}</p>
                                            </div>
                                            <div className="col-12 col-md-3"></div>
                                        </div>
                                    </section>
                                </div>
                            </>
                        }
                    </div>
                </Tab>

                <Tab eventKey="promotion" title="Promotion Profiles">
                    <div className="container">
                        <section className="center">
                            <div className="row">
                                <div className="col-12 col-md-3"></div>
                                <div className="col-12 col-md-6 form-box">
                                    <h2>Changing admin tiers</h2>
                                    <AdminTier token={token} admin={admin}/>
                                </div>
                                <div className="col-12 col-md-3"></div>
                            </div>
                        </section>
                    </div>
                </Tab>

                <Tab eventKey="updateHotels" title="Update Hotels">
                    <div className="container">
                        <section className="center">
                            <div className="row">
                                <div className="col-12 col-md-3"></div>
                                <div className="col-12 col-md-6 form-box">
                                    <FindHotel token={token} admin={admin} setHotel={setHotel} setShowSpinnerHotelData={setShowSpinnerHotelData}/>
                                </div>
                                <div className="col-12 col-md-3"></div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-3"></div>
                                <div className="col-12 col-md-6">

                                {showSpinnerHotelData && <SpinnerComponent/>}

                                {
                                    showSpinnerHotelData === false &&
                                    <>
                                        <h3>Loaded Hotel Data</h3>
                                        <p>Hotel Name: {hotel.hotelName}</p>
                                        <p>Hotel ID: {hotel.hotelId}</p>
                                    </>
                                }
                                </div>
                                <div className="col-12 col-md-3"></div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-3"></div>
                                <div className="col-12 col-md-6 form-box">
                                    <UpdateHotel token={token} admin={admin} setHotel={setHotel}/>
                                </div>
                                <div className="col-12 col-md-3"></div>
                            </div>
                        </section>
                    </div>
                </Tab>

                <Tab eventKey="hotels" title="Hotels">
                    <div className="container">
                        <section className="center">
                            <div className="row">
                                <div className="col-12 col-md-3"></div>
                                <div className="col-12 col-md-6 form-box">
                                    <CreateHotel token={token} admin={admin}/>
                                </div>
                                <div className="col-12 col-md-3"></div>
                            </div>
                        </section>

                        <section className="center">
                            <div className="row">
                                <div className="col-12 col-md-3"></div>
                                <div className="col-12 col-md-6 form-box">
                                    <DeleteHotel token={token} admin={admin}/>
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

export default AdminDashboard;