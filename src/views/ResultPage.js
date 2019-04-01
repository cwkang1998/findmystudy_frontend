import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Redirect from 'react-router-dom/Redirect';
import PersonalityTypes from '../services/PersonalityTypes';

const styles = theme => ({
  titleText: {
    fontSize: 36,
    fontWeight: 600,
    margin: 16,
    color: '#e67e00'
  },
  subtitleText: {
    fontSize: 24,
    margin: 16
  },
  content: {
    padding: 16,
    width: '100%',
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      width: 600
    }
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 8
  },
  colorText: {
    fontWeight: 600
  },
  contentList: {
    marginLeft: 0,
    marginTop: 8,
    marginBottom: 32
  },
  contentText: {
    fontSize: 16
  },
  buttonContainer: {
    padding: 8
  },
  button: {
    marginBottom: 16
  }
});
class ResultPage extends Component {
  constructor(props) {
    super(props);
    const passedState = this.props.location.state;
    if (passedState) {
      this.state = {
        isFromQuiz: true,
        color: passedState.color,
        resultData: PersonalityTypes[passedState.color]
      };
    } else {
      this.state = {
        isFromQuiz: false,
        resultData: {},
        color: ''
      };
    }
  }

  componentDidMount() {
    // Fix scrolling issue.
    window.scrollTo(0, 0);
  }

  navigateTo = destinationURL => {
    this.props.history.push(destinationURL);
  };

  render() {
    const { classes } = this.props;
    const { isFromQuiz, color, resultData } = this.state;
    if (!isFromQuiz) {
      return <Redirect to="/quiz" />;
    }
    return (
      <div>
        <Grid container direction="column" alignItems="center">
          {/* Title */}
          <Grid item xs={12}>
            <h1>
              <Typography className={classes.titleText}>Results</Typography>
            </h1>
            <h4>
              <Typography className={classes.subtitleText}>
                Your personality colour is:{' '}
                <span className={classes.colorText} style={{ color: color }}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </span>
              </Typography>
            </h4>
          </Grid>

          {/* Display based on form submission */}
          <Grid item xs={12} className={classes.content}>
            {/* Personalities */}
            <Typography className={classes.contentTitle}>
              Personalities
            </Typography>
            <Divider />
            <ul className={classes.contentList}>
              {resultData['personalities'].map((data, key) => (
                <li key={key}>
                  <Typography className={classes.contentText}>
                    {data}
                  </Typography>
                </li>
              ))}
            </ul>

            {/* Interests */}
            <Typography className={classes.contentTitle}>Interests</Typography>
            <Divider />
            <ul className={classes.contentList}>
              {resultData['interests'].map((data, key) => (
                <li key={key}>
                  <Typography className={classes.contentText}>
                    {data}
                  </Typography>
                </li>
              ))}
            </ul>

            {/* Preferred Work */}
            <Typography className={classes.contentTitle}>
              Preferred Work
            </Typography>
            <Divider />
            <ul className={classes.contentList}>
              {resultData['preferred_work'].map((data, key) => (
                <li key={key}>
                  <Typography className={classes.contentText}>
                    {data}
                  </Typography>
                </li>
              ))}
            </ul>

            {/* Preferred Career */}
            <Typography className={classes.contentTitle}>
              Preferred Career
            </Typography>
            <Divider />
            <ul className={classes.contentList}>
              {resultData['preferred_careers'].map((data, key) => (
                <li key={key}>
                  <Typography className={classes.contentText}>
                    {data}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12} className={classes.buttonContainer}>
            <Button
              name="University"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={() => this.navigateTo('/uni')}
            >
              Search for Universities
            </Button>
            <Button
              name="Book"
              variant="contained"
              color="secondary"
              fullWidth
              className={classes.button}
              onClick={() => this.navigateTo('/contact')}
            >
              Book an appointment to learn more.
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ResultPage);
