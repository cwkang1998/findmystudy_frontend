import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
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
import Typography from '@material-ui/core/Typography';
import GlobalContext from '../services/GlobalContext';

const styles = theme => ({
  titleText: {
    fontSize: 36,
    fontWeight: 600,
    margin: 16,
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
  physicalContactsContent: {
    alignSelf: 'center'
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
  },
  thankMsg: {
    textAlign: 'center',
    padding: 8
  },
  thankMsgTitle: {
    padding: 8,
    fontSize: 24,
    fontWeight: 400
  },
  thankMsgContent: {
    fontSize: 16
  }
});
class ContactPage extends Component {
  static contextType = GlobalContext;

  state = {
    id: '',
    name: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    booking: '',
    nameErrorMsg: '',
    nameError: false,
    dobErrorMsg: '',
    dobError: false,
    genderErrorMsg: '',
    genderError: false,
    phoneErrorMsg: '',
    phoneError: false,
    emailErrorMsg: '',
    emailError: false,
    bookingErrorMsg: '',
    bookingError: false,
    submitted: false,
    quizTaken: false
  };

  componentDidMount() {
    // Fix scrolling issue.
    window.scrollTo(0, 0);

    // Get student data
    let studentData = this.context.storage.getStudentData();
    console.log(studentData);
    if (studentData) {
      let quizTaken = false;
      if (studentData['color']) {
        quizTaken = true;
      }
      this.setState({
        id: studentData['id'],
        name: studentData['name'],
        dob: studentData['dob'],
        gender: studentData['gender'],
        quizTaken: quizTaken
      });
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  formOnEnterKey = event => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      this.validateAndSubmit();
    }
  };

  requiredFieldValidation = () => {
    let valid = true;
    const { name, dob, gender, booking } = this.state;
    const required = { name, dob, gender, booking };

    Object.keys(required).forEach(key => {
      if (!required[key]) {
        valid = false;
        this.setState({
          [`${key}Error`]: true,
          [`${key}ErrorMsg`]: 'This field is required.'
        });
      }
    });
    return valid;
  };

  phoneOrEmailRequiredValidation = () => {
    if (!(this.state.phone || this.state.email)) {
      this.setState({
        phoneError: true,
        phoneErrorMsg: 'Either phone no. or email should be provided.',
        emailError: true,
        emailErrorMsg: 'Either phone no. or email should be provided.'
      });
      return false;
    }
    return true;
  };

  phoneNumberValidation = () => {
    if (this.state.phone && !this.state.phone.match(/^\d{10,11}$/)) {
      this.setState({
        phone: '',
        phoneError: true,
        phoneErrorMsg: 'Invalid phone number.'
      });
      return false;
    }
    return true;
  };

  emailValidation = () => {
    if (
      this.state.email &&
      !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      this.setState({
        email: '',
        emailError: true,
        emailErrorMsg: 'Invalid email address.'
      });
      return false;
    }
    return true;
  };

  dateAfterTodayValidation = () => {
    let startSeconds = Date.now();
    if (Date.parse(this.state.booking) < startSeconds) {
      this.setState({
        booking: '',
        bookingError: true,
        bookingErrorMsg: 'Date chosen must be in the future.'
      });
      return false;
    }
    return true;
  };

  validateAndSubmit = async () => {
    const { name, dob, gender, phone, email, booking } = this.state;
    const all = { name, dob, gender, phone, email, booking };

    //reset
    Object.keys(all).forEach(key => {
      this.setState({
        [`${key}Error`]: false,
        [`${key}ErrorMsg`]: ''
      });
    });

    let f1 = this.requiredFieldValidation();
    let f2 = this.phoneOrEmailRequiredValidation();
    let f3 = this.phoneNumberValidation();
    let f4 = this.emailValidation();
    let f5 = this.dateAfterTodayValidation();

    if (f1 && f2 && f3 && f4 && f5) {
      const { api, storage } = this.context;
      let studentData = storage.getStudentData();

      // Get color from saved data.
      let color = null;
      if (studentData) {
        if (studentData['color']) {
          color = studentData['color'];
        }
      }

      let successFlag = false;
      let id = this.state.id;
      if (id) {
        try {
          let updateStudentRes = await api.updateStudent(id, {
            name,
            dob,
            gender,
            color
          });
          let createBookingRes = await api.createBooking({
            student: id,
            phone_number: phone,
            email,
            booking_time: booking
          });
          if (updateStudentRes.ok && createBookingRes.ok) {
            successFlag = true;
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          let createStudentRes = await api.createStudent({
            name,
            dob,
            gender,
            color
          });
          if (createStudentRes.ok) {
            let data = await createStudentRes.json();
            id = data['_id'];
            let createBookingRes = await api.createBooking({
              student: id,
              phone_number: phone,
              email,
              booking_time: booking
            });
            if (createBookingRes.ok) {
              successFlag = true;
            }
          }
        } catch (e) {
          console.log(e);
        }
      }

      storage.saveStudentData({
        id: id,
        name: name,
        dob: dob,
        gender: gender
      });
      if (successFlag && color) {
        storage.removeStudentData();
      }
      this.setState({ submitted: successFlag });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column" alignItems="center">
          {/* Title */}
          <Grid item xs={12}>
            <h1>
              <Typography className={classes.titleText}>Contact Us</Typography>
            </h1>
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

          {/* Display based on form submission */}
          <Grid item xs={12} className={classes.forms}>
            {this.state.submitted ? (
              <div className={classes.thankMsg}>
                <Typography className={classes.thankMsgTitle}>
                  Thank you.{' '}
                </Typography>
                <Typography className={classes.thankMsgContent}>
                  We have received your request to book for an appointment and
                  will contact you soon.
                </Typography>
              </div>
            ) : (
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
                <TextField
                  id="booking"
                  label="Booking Date"
                  fullWidth
                  value={this.state.booking}
                  type="date"
                  onChange={this.handleChange('booking')}
                  onBlur={this.validateDate}
                  margin="normal"
                  required
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.formItems}
                  helperText={this.state.bookingErrorMsg}
                  error={this.state.bookingError}
                />
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  className={classes.formItems}
                  onClick={this.validateAndSubmit}
                >
                  Book an appointment
                </Button>
              </form>
            )}

            {/* Dont show if quiz was taken(Redirected from quiz) */}
            {this.state.quizTaken ? (
              <div />
            ) : (
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                className={classes.formItems}
                style={{ marginTop: 24 }}
                onClick={() => this.props.history.push('/quiz')}
              >
                Take the personality quiz
              </Button>
            )}
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
              <Typography className={classes.physicalContactsContent}>
                +60134751197
              </Typography>
            </div>
            <div className={classes.physicalContactsItems}>
              <a href="https://www.google.com/search?rlz=1C1GCEA_enMY805MY805&tbm=lcl&ei=QKVrXJueKMLWwAKnyqIY&q=mystudy&oq=mystudy&gs_l=psy-ab.3...4758.4912.0.5120.2.2.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..2.0.0....0.IV3soXW7TJA#rlfi=hd:;si:2025452943986851701;mv:!1m2!1d3.1964837773190293!2d101.6795426577346!2m2!1d3.1961238226809696!2d101.67918214226542">
                <img
                  src={Address}
                  alt="address icon"
                  className={classes.fixedIcon}
                />
              </a>
              <Typography className={classes.physicalContactsContent}>
                CK CHIAU ADVISORY 3-1-3, Cantonment Exchange, 698, Jalan Sultan
                Azlan Shah (Jalan Ipoh), 51200 Kuala Lumpur.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ContactPage);
