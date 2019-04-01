import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  titleText: {
    fontSize: 48,
    fontWeight: 600,
    margin: 16,
    color: '#e67e00'
  },
  content: {
    padding: 16,
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      width: 600
    }
  },
  contentText: {
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 16
  }
});
class NoMatchPage extends Component {
  navigateTo = destinationURL => {
    this.props.history.push(destinationURL);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column" alignItems="center">
          {/* Title */}
          <Grid item xs={12}>
            <h1>
              <Typography className={classes.titleText}>
                404 Not Found
              </Typography>
            </h1>
          </Grid>

          {/* Display based on form submission */}
          <Grid item xs={12} className={classes.content}>
            {/* Personalities */}
            <Typography className={classes.contentText}>
              The page you are looking for does not exists.
            </Typography>
            <Divider />
            <Button
              name="University"
              variant="contained"
              color="inherit"
              fullWidth
              onClick={() => this.navigateTo('/')}
            >
              Back to Home Page
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(NoMatchPage);
