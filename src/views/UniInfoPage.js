import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import NottIcon from '../icons/Nottingham-Logo.jpg';

const styles = theme => ({
  root: {
    padding: 16
  },
  banner: {
    marginBottom: 16,
    textAlign: 'center'
  },
  responsiveImg: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 250,
      width: 'auto'
    }
  },
  main: {
    paddingTop: 8,
    paddingBottom: 8,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 16,
      paddingRight: 24
    }
  },
  contentTitle: {
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 16,
    paddingRight: 16
  },
  content: {
    marginTop: 8,
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: 'justify'
  }
});

class UniInfo extends Component {
  state = {
    uniData: {}
  };
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.setState({
      uniData: {
        _id: params
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      // Banner Image
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.banner}>
          <img src={NottIcon} alt="uniicon" className={classes.responsiveImg} />
        </Grid>
        {/* Main Content */}
        <Grid item xs={12} md={9} className={classes.main}>
          <Typography variant="h5" className={classes.contentTitle}>
            Information
          </Typography>
          <Divider />
          <Typography className={classes.content}>
            The National University of Singapore (NUS) is the first autonomous
            research university in Singapore. NUS is a comprehensive research
            university, offering a wide range of disciplines, including the
            sciences, medicine and dentistry, design and environment, law, arts
            and social sciences, engineering, business, computing and music in
            both undergraduate and postgraduate levels. Founded in 1905 as the
            King Edward VII College of Medicine, NUS is the oldest higher
            education institution in Singapore.
          </Typography>
        </Grid>

        {/* Course List */}
        <Grid item xs={12} md={3}>
          <Paper elevation={0}>
            <List>
              <ListItem divider>
                <Typography variant="h6">Popular Courses</Typography>
              </ListItem>
              <ListItem>Chinese Language</ListItem>
              <ListItem>Chinese Studies</ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Address */}
        <Grid item xs={12} className={classes.main}>
          <Typography variant="h6" className={classes.contentTitle}>
            Address
          </Typography>
          <Divider />
          <Typography className={classes.content}>
            21 Lower Kent Ridge Rd, Singapore 119077
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

UniInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UniInfo);
