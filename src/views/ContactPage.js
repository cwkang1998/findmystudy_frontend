import React, { Component } from 'react';
import Facebook from '../resources/icons/facebook.png';
import Email from '../resources/icons/email.png';
import WhatsApp from '../resources/icons/whatsapp.png';
import Phone from '../resources/icons/phone.png';
import Address from '../resources/icons/address.png';
import Skype from '../resources/icons/skype.png';

const styles = {
  titleText: {
    fontSize: 75,
    color: 'darkblue'
  },
  contentText: {
    color: 'black'
  },
  container: {
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  }
};
class ContactPage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.titleText}>CONTACT US</h1>
        {/* Facebook icon */}
        <a href="https://www.facebook.com/ckchiau">
          <img src={Facebook} alt="fb icon" />
        </a>
        <div style={styles.contentText}>CK CHIAU ADVISORY</div>
        {/* Email icon */}

        <a href="mailto:ck@mystudy.my?subject=Booking an appointment">
          <p>
            <img src={Email} alt="email icon" />
          </p>
          ck@mystudy.my
        </a>

        {/* Whatsapp icon */}

        <a href="whatsapp://send?phone=+60178897743">
          <p>
            <img src={WhatsApp} alt="whatsapp icon" />
          </p>
          +6017-8897743
        </a>
        {/* Phone icon */}
        <a href="tel:+60134751197">
          <p>
            <img src={Phone} alt="phone icon" />
          </p>
          +603-6259 0021
        </a>
        {/* Address icon */}
        <p>
          <div>
            <a href="https://www.google.com/search?rlz=1C1GCEA_enMY805MY805&tbm=lcl&ei=QKVrXJueKMLWwAKnyqIY&q=mystudy&oq=mystudy&gs_l=psy-ab.3...4758.4912.0.5120.2.2.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..2.0.0....0.IV3soXW7TJA#rlfi=hd:;si:2025452943986851701;mv:!1m2!1d3.1964837773190293!2d101.6795426577346!2m2!1d3.1961238226809696!2d101.67918214226542">
              <img src={Address} alt="address icon" />
            </a>
          </div>
          <div style={styles.contentText}>
            CK CHIAU ADVISORY 3-1-3, Cantonment Exchange, 698, Jalan Sultan
            Azlan Shah (Jalan Ipoh), 51200 Kuala Lumpur.
          </div>
        </p>

        {/* Skype icon */}
        <a href="skype:ckchiau">
          <div>
            <img src={Skype} alt="skype icon" />
          </div>
          ckchiau
        </a>
        <span>&nbsp;&nbsp;</span>
      </div>
    );
  }
}

export default ContactPage;
