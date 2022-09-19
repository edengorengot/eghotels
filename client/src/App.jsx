import './styles/app.scss';
import { ToastContainer } from "react-toastify";
import { Switch, Route, Redirect } from 'react-router-dom';

// Guard
import AuthGuardRoute from "./AuthGurad/AuthGuardRoute";
import AdminAuthGuardRoute from './AuthGurad/AdminAuthGuardRoute';

// components
import NavbarComponent from './components/NavbarComponent/NavbarComponent';

// pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import MyAccount from './pages/MyAccount';
import AdminDashboard from './pages/AdminDashboard';

import CarmelHome from './pages/CarmelHome';
import CarmelRooms from './pages/CarmelRooms';
import CarmelHotelFacilities from './pages/CarmelHotelFacilities';

import TelAvivHome from './pages/TelAvivHome';
import TelAvivRooms from './pages/TelAvivRooms';
import TelAvivHotelFacilities from './pages/TelAvivHotelFacilities';

import ContactUs from './pages/ContactUs';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Logout from './pages/Logout';
import PageNotFound from './pages/PageNotFound';



function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <ToastContainer/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/" exact>
            <Redirect to="/home"/>
          </Route>

          <Route path="/about" component={About}/>
          <AuthGuardRoute path="/my-account" component={MyAccount}/>
          <AdminAuthGuardRoute path="/admin-dashboard" component={AdminDashboard}/>

          <Route path="/carmel-home" component={CarmelHome}/>
          <Route path="/carmel-rooms" component={CarmelRooms}/>
          <Route path="/carmel-hotel-facilities" component={CarmelHotelFacilities}/>

          <Route path="/tel-aviv-home" component={TelAvivHome}/>
          <Route path="/tel-aviv-rooms" component={TelAvivRooms}/>
          <Route path="/tel-aviv-hotel-facilities" component={TelAvivHotelFacilities}/>

          <Route path="/contact" component={ContactUs}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/log-in" component={Login}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route path="/reset-password/:resetPassword/:email" component={ResetPassword}/>
          <Route path="/log-out" component={Logout}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
    </div>
  );
}

export default App;
