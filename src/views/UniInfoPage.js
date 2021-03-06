import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import GlobalContext from '../services/GlobalContext';

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
  },
  buttonContainer: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    },
    margin: 24,

    textAlign: 'center'
  }
});

class UniInfo extends Component {
  static contextType = GlobalContext;
  state = {
    uniID: '',
    uniData: null
  };

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.setState({
      uniID: params.id
    });

    const { api } = this.context;
    let data = {};
    try {
      let res = await api.getUni(params.id);
      data = await res.json();
    } catch (err) {
      console.log(err);
    }

    this.setState({
      uniData: data
    });
  }

  render() {
    const { classes, history } = this.props;
    const { uniData } = this.state;
    return (
      // Banner Image
      <React.Fragment>
        {uniData ? (
          <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.banner}>
              <img
                src={uniData.icon}
                alt="uniicon"
                className={classes.responsiveImg}
              />
            </Grid>
            {/* Main Content */}
            <Grid item xs={12} md={9} className={classes.main}>
              <Typography variant="h5" className={classes.contentTitle}>
                Information
              </Typography>
              <Divider />
              <Typography className={classes.content}>
                {uniData.description}
              </Typography>
            </Grid>
            {/* Course List */}
            <Grid item xs={12} md={3}>
              <Paper elevation={0}>
                <List>
                  <ListItem divider>
                    <Typography variant="h6">Popular Courses</Typography>
                  </ListItem>
                  {uniData.courses.map((e, index) => (
                    <ListItem key={index}>{e}</ListItem>
                  ))}
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
                {uniData.address}
              </Typography>
            </Grid>
            {/* Go to Bookings */}
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => history.push('/contact')}
              >
                Make an Enquiry
              </Button>
            </Grid>
          </Grid>
        ) : (
          <div />
        )}
      </React.Fragment>
    );
  }
}

UniInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UniInfo);
