import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  form: {
    padding: 16
  },
  formItems: {
    marginTop: 16,
    marginBottom: 4
  }
});

class AdminForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.formData;
  }
  formOnEnterKey = event => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      this.validateAndProceed();
    }
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes, formSchema } = this.props;
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <form
            className={classes.form}
            onKeyPress={this.formOnEnterKey.bind(this)}
          >
            <TextField
              id="name"
              label="Name"
              fullWidth
              //   value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              placeholder="MyName"
              required
              InputLabelProps={{
                shrink: true
              }}
              className={classes.formItems}
              variant="outlined"
            />
            <TextField
              id="dob"
              label="Date of Birth"
              fullWidth
              //   value={this.state.dob}
              type="date"
              onChange={this.handleChange('dob')}
              margin="normal"
              required
              InputLabelProps={{
                shrink: true
              }}
              className={classes.formItems}
              variant="outlined"
            />

            <Button
              color="primary"
              variant="contained"
              className={classes.formItems}
            >
              Save
            </Button>
            <Button
              color="primary"
              variant="contained"
              className={classes.formItems}
            >
              Delete
            </Button>
            <Button
              color="primary"
              variant="contained"
              className={classes.formItems}
            >
              Cancel
            </Button>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AdminForm);
