import React, { Component } from 'react';
//import logo from './logo.svg';
import AppBarDrawer from './components/AppBarDrawer';
import Facebook from './icons/facebook.png';
import Email from './icons/email.png';
import WhatsApp from './icons/whatsapp.png';
import Phone from './icons/phone.png';
import Address from './icons/address.png';
import Skype from './icons/skype.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppBarDrawer appName="FindMyStudy">
      <div className="App">
        <header className="App-header">
        <h1>
        Your Results are : 
        </h1>

        <h1 style = {divStyle}>
        CONTACT US
        </h1>

          {/* Facebook icon */}
          <img src={Facebook} alt = "fb icon" /> 
          <a
            href="https://www.facebook.com/ckchiau"
            >
          CK CHIAU ADVISORY
              </a>

          {/* Email icon */}
          <p>
            <img src={Email} alt = "email icon" /> 
              </p>
              ck@mystudy.my

          {/* Whatsapp icon */}
          <p>
            <img src={WhatsApp} alt = "whatsapp icon" />
              </p>
              +6017-8897743

          {/* Phone icon */}
          <p>
            <img src={Phone} alt = "phone icon" /> 
              </p>
              +603-6259 0021

          {/* Address icon */}
          <p>    
            <img src={Address} alt = "address icon" />
              </p>

          {/* Skype icon */}
          <p>    
            <img src={Skype} alt = "skype icon"  />
              </p>
              ckchiau

          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
      </AppBarDrawer>
    );
  }
}

const divStyle = {
  fontSize : 100,
  color: 'darkblue',
};

export default App;
