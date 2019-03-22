import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Facebook from '../resources/icons/facebook.png';
import Email from '../resources/icons/email.png';
import WhatsApp from '../resources/icons/whatsapp.png';
import Phone from '../resources/icons/phone.png';
import Address from '../resources/icons/address.png';
import Skype from '../resources/icons/skype.png';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  titleText: {
    fontSize: 48,
    color: '#e67e00'
  },
  fixedIcon: {
    width: 50,
    height: 'auto',
    margin: 8
  },
  physicalContacts: {
    padding: 16
  },
  physicalContactsItems: {
    display: 'flex',
    flexDirection: 'row'
  },
  forms: {
    padding: 32,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 400
    }
  },
  formItems: {
    marginTop: 16,
    marginBottom: 4
  }
});
class ContactPage extends Component {
  state = {
    name: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    nameErrorMsg: '',
    nameError: false,
    dobErrorMsg: '',
    dobError: false,
    genderErrorMsg: '',
    genderError: false,
    phoneErrorMsg: '',
    phoneError: false,
    emailErrorMsg: '',
    emailError: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  formOnEnterKey = event => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      this.validateAndSubmit();
    }
  };

  validateAndSubmit = () => {
    const { name, dob, gender, phone, email } = this.state;
    const all = { name, dob, gender, phone, email };
    const required = { name, dob, gender };
    let validatedFlag = true;
    //reset
    Object.keys(all).forEach(key => {
      this.setState({
        [`${key}Error`]: false,
        [`${key}ErrorMsg`]: ''
      });
    });

    //Required validate
    Object.keys(required).forEach(key => {
      if (!required[key]) {
        validatedFlag = false;
        this.setState({
          [`${key}Error`]: true,
          [`${key}ErrorMsg`]: 'This field is required.'
        });
      }
    });

    //Either exist validation
    if (!(phone || email)) {
      validatedFlag = false;
      this.setState({
        phoneError: true,
        phoneErrorMsg: 'Either phone no. or email should be provided.',
        emailError: true,
        emailErrorMsg: 'Either phone no. or email should be provided.'
      });
    }
    //Phone number validation
    if (phone && !phone.match(/^\d{10,11}$/)) {
      validatedFlag = false;
      this.setState({
        phone: '',
        phoneError: true,
        phoneErrorMsg: 'Invalid phone number.'
      });
    }
    //Email validation
    if (
      email &&
      !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      validatedFlag = false;
      this.setState({
        email: '',
        emailError: true,
        emailErrorMsg: 'Invalid email address.'
      });
    }
    if (validatedFlag) {
      console.log('senddata');
    }
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <h1 className={classes.titleText}>Contact Us</h1>
          </Grid>
          {/* E-contacts */}
          <Grid item xs={12}>
            <a href="mailto:ck@mystudy.my?subject=Booking an appointment">
              <img src={Email} alt="email" className={classes.fixedIcon} />
            </a>
            <a href="whatsapp://send?phone=+60178897743">
              <img
                src={WhatsApp}
                alt="whatsapp"
                className={classes.fixedIcon}
              />
            </a>
            <a href="skype:ckchiau">
              <img src={Skype} alt="skype" className={classes.fixedIcon} />
            </a>
            <a href="https://www.facebook.com/ckchiau">
              <img src={Facebook} alt="fb icon" className={classes.fixedIcon} />
            </a>
          </Grid>

          <Grid item xs={12} className={classes.forms}>
            <form onKeyPress={this.formOnEnterKey.bind(this)}>
              <TextField
                id="name"
                label="Name"
                fullWidth
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                placeholder="MyName"
                required
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.formItems}
                helperText={this.state.nameErrorMsg}
                error={this.state.nameError}
              />
              <TextField
                id="dob"
                label="Date of Birth"
                fullWidth
                value={this.state.dob}
                type="date"
                onChange={this.handleChange('dob')}
                margin="normal"
                required
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.formItems}
                helperText={this.state.dobErrorMsg}
                error={this.state.dobError}
              />

              <FormControl
                fullWidth
                required
                className={classes.formItems}
                error={this.state.genderError}
              >
                <InputLabel shrink htmlFor="gender">
                  Gender
                </InputLabel>
                <Select
                  value={this.state.gender}
                  onChange={this.handleChange('gender')}
                  input={<Input name="gender" id="gender" />}
                  name="gender"
                >
                  <MenuItem value={'Male'}>Male</MenuItem>
                  <MenuItem value={'Female'}>Female</MenuItem>
                </Select>
                <FormHelperText error={this.state.genderError}>
                  {this.state.genderErrorMsg}
                </FormHelperText>
              </FormControl>

              <TextField
                id="phone"
                label="Phone"
                fullWidth
                value={this.state.phone}
                type="phone"
                onChange={this.handleChange('phone')}
                margin="normal"
                placeholder="0123456789"
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.formItems}
                helperText={this.state.phoneErrorMsg}
                error={this.state.phoneError}
              />

              <TextField
                id="email"
                label="Email"
                fullWidth
                value={this.state.email}
                type="email"
                onChange={this.handleChange('email')}
                margin="normal"
                placeholder="myemail@email.com"
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.formItems}
                helperText={this.state.emailErrorMsg}
                error={this.state.emailError}
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                className={classes.formItems}
                onClick={this.validateAndSubmit}
              >
                Submit
              </Button>
            </form>
          </Grid>

          {/* Physical Contacts */}
          <Grid item xs={12} className={classes.physicalContacts}>
            <Divider />
            <div className={classes.physicalContactsItems}>
              <a href="tel:+60134751197">
                <img
                  src={Phone}
                  alt="phone icon"
                  className={classes.fixedIcon}
                />
              </a>
              <p>+60134751197</p>
            </div>
            <div className={classes.physicalContactsItems}>
              <a href="https://www.google.com/search?rlz=1C1GCEA_enMY805MY805&tbm=lcl&ei=QKVrXJueKMLWwAKnyqIY&q=mystudy&oq=mystudy&gs_l=psy-ab.3...4758.4912.0.5120.2.2.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..2.0.0....0.IV3soXW7TJA#rlfi=hd:;si:2025452943986851701;mv:!1m2!1d3.1964837773190293!2d101.6795426577346!2m2!1d3.1961238226809696!2d101.67918214226542">
                <img
                  src={Address}
                  alt="address icon"
                  className={classes.fixedIcon}
                />
              </a>
              <p>
                CK CHIAU ADVISORY 3-1-3, Cantonment Exchange, 698, Jalan Sultan
                Azlan Shah (Jalan Ipoh), 51200 Kuala Lumpur.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ContactPage);
