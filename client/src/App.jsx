import logo from './logo.svg';
import './App.css';
import { ToastContainer } from "react-toastify";




// components
// Guard




// pages
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import About from './pages/About';
import OurRooms from './pages/OurRooms';
import ContactUs from './pages/ContactUs';
import PageNotFound from './pages/PageNotFound';






function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <h1>TEST</h1>
      <HomePage/>
      <Signup/>
      <Login/>
      <MyAccount/>
      <About/>
      <OurRooms/>
      <HomePage/>
      <ContactUs/>
      <PageNotFound/>
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
    </div>
  );
}

export default App;
