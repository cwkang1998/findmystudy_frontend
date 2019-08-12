import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';

import GlobalContext from '../services/GlobalContext';

const styles = theme => ({
  loginTitle: {
    padding: 8
  },
  form: {
    padding: 16
  },
  formItems: {
    marginTop: 16,
    marginBottom: 4
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 16,
    marginBottom: 4
  },
  btnItems: {
    marginTop: 8
  }
});

class AdminLoginPage extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: ''
    };
  }
  formOnEnterKey = event => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      this.login();
    }
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  login = async () => {
    const { username, password } = this.state;
    try {
      const res = await this.context.api.adminLogin(username, password);
      if (res.ok) {
        const data = await res.json();
        await this.context.setAdminToken(data['token']);
        this.setState({ redirect: 'admin' });
      } else {
        console.log('Incorrect username/password'); //Please display this later on
        await this.context.setAdminToken('');
        this.setState({ redirect: '' });
      }
    } catch (err) {
      console.log(err);
    }
  };

  backToUserApp = () => {
    this.setState({ redirect: 'user' });
  };

  render() {
    const { classes } = this.props;
    if (this.state.redirect == 'user') {
      return <Redirect to="/" />;
    } else if (this.state.redirect == 'admin') {
      return <Redirect to="/admin" />;
    } else {
      return (
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <form
              className={classes.form}
              onKeyPress={this.formOnEnterKey.bind(this)}
            >
              <h2 className={classes.loginTitle}>Admin Login</h2>
              <TextField
                id="username"
                label="Username"
                fullWidth
                value={this.state.username}
                onChange={this.handleChange('username')}
                margin="normal"
                placeholder="Username"
                required
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.formItems}
                variant="outlined"
              />
              <TextField
                id="password"
                label="Password"
                fullWidth
                value={this.state.password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange('password')}
                margin="normal"
                required
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.formItems}
                variant="outlined"
              />
              <div className={classes.btnContainer}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.btnItems}
                  onClick={this.login}
                >
                  Login
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  className={classes.btnItems}
                  onClick={this.backToUserApp}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      );
    }
  }
}

export default withStyles(styles)(AdminLoginPage);
