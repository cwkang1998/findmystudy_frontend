import React, { Component } from 'react';
import Facebook from '../resources/icons/facebook.png';
import Email from '../resources/icons/email.png';
import WhatsApp from '../resources/icons/whatsapp.png';
import Phone from '../resources/icons/phone.png';
import Address from '../resources/icons/address.png';
import Skype from '../resources/icons/skype.png';

class ResultPage extends Component {
  render() {
    return (
      <div>
        <h1>Your Results are :</h1>
        <h1 style={divStyle}>CONTACT US</h1>
        {/* Facebook icon */}
        <a href="https://www.facebook.com/ckchiau">
          <img src={Facebook} alt="fb icon" />
        </a>
        CK CHIAU ADVISORY
        {/* Email icon */}
        <p>
          <img src={Email} alt="email icon" />
        </p>
        ck@mystudy.my
        {/* Whatsapp icon */}
        <p>
          <img src={WhatsApp} alt="whatsapp icon" />
        </p>
        +6017-8897743
        {/* Phone icon */}
        <p>
          <img src={Phone} alt="phone icon" />
        </p>
        +603-6259 0021
        {/* Address icon */}
        <p>
          <div>
            <a href="https://www.google.com/search?rlz=1C1GCEA_enMY805MY805&tbm=lcl&ei=QKVrXJueKMLWwAKnyqIY&q=mystudy&oq=mystudy&gs_l=psy-ab.3...4758.4912.0.5120.2.2.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..2.0.0....0.IV3soXW7TJA#rlfi=hd:;si:2025452943986851701;mv:!1m2!1d3.1964837773190293!2d101.6795426577346!2m2!1d3.1961238226809696!2d101.67918214226542">
              <img src={Address} alt="address icon" />
            </a>
          </div>
          CK CHIAU ADVISORY 3-1-3, Cantonment Exchange, 698, Jalan Sultan Azlan
          Shah (Jalan Ipoh), 51200 Kuala Lumpur.
        </p>
        {/* Skype icon */}
        <div>
          <img src={Skype} alt="skype icon" />
        </div>
        ckchiau
        <span>&nbsp;&nbsp;</span>
      </div>
    );
  }
}

const divStyle = {
  fontSize: 75,
  color: 'darkblue'
};

export default ResultPage;
