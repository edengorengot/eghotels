import logo from './logo.svg';
import './App.css';
import { ToastContainer } from "react-toastify";
import { Switch, Route, Redirect } from 'react-router-dom';

// Guard

// components
import NavbarComponent from './components/NavbarComponent/NavbarComponent';

// pages
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import MyAccount from './pages/MyAccount';
import About from './pages/About';
import OurRooms from './pages/OurRooms';
import ContactUs from './pages/ContactUs';
import PageNotFound from './pages/PageNotFound';



function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <ToastContainer/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/home">
          <Redirect to="/"/>
        </Route>

        <Route path="/test" component={HomePage}/>

        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/my-account" component={MyAccount}/>
        <Route path="/about" component={About}/>
        <Route path="/our-rooms" component={OurRooms}/>
        <Route path="/contact" component={ContactUs}/>
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
