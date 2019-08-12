import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '100%',
    textAlign: 'center',
    padding: 16
  }
});

class AdminDashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <h1>Welcome to the dashboard !</h1>
      </Container>
    );
  }
}

export default withStyles(styles)(AdminDashboard);
