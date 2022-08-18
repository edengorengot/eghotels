// import logo from './logo.svg';
import './App.css';
import { ToastContainer } from "react-toastify";
import { Switch, Route, Redirect } from 'react-router-dom';

// Guard
import AuthGuardRoute from "./AuthGurad/AuthGuardRoute";

// components
import NavbarComponent from './components/NavbarComponent/NavbarComponent';

// pages
import HomePage from './pages/HomePage';
import About from './pages/About';
import MyAccount from './pages/MyAccount';
import OurRooms from './pages/OurRooms';
import ContactUs from './pages/ContactUs';
import Signup from './pages/Signup';
import Login from './pages/Login';
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
          <Route path="/our-rooms" component={OurRooms}/>
          <Route path="/contact" component={ContactUs}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/log-in" component={Login}/>
          <Route path="/log-out" component={Logout}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>

      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
