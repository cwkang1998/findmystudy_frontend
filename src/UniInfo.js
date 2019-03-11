import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Test from './icons/test2.png'
import AppBarDrawer from './components/AppBarDrawer';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  layout: {
  //  fontSize : 75,
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },

  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}



const divStyle = {
  fontSize : 20,
  //color: 'darkblue',
  textAlign :'center',
};



function UniInfo(props) {

  const { classes } = props;

  return (
    
    <AppBarDrawer appName="FindMyStudy">
     <div className="App">
     <Grid container >
    <Grid item xs={12}>
      <div className={classes.layout}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
        <main>
          {/* Main featured post */}

                <div className={classes.mainFeaturedPostContent}>
                
                  <img src={Test} alt = "skype icon"  />
                  
                  <Typography variant="h5" color="inherit" paragraph>
                  
                  </Typography>
                </div>
          {/* End main featured post */}
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
               Information
              </Typography>
              <Divider />
              <Typography style = {divStyle}>
              The National University of Singapore (NUS) is the first autonomous research university in Singapore. NUS is a comprehensive research university, offering a wide range of disciplines, including the sciences, medicine and dentistry, design and environment, law, arts and social sciences, engineering, business, computing and music in both undergraduate and postgraduate levels. Founded in 1905 as the King Edward VII College of Medicine, NUS is the oldest higher education institution in Singapore.
              </Typography>

            </Grid>
            {/* End main content */}
            {/* LIST */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Grid container spacing={300}>
          <Grid item xs={12} md={6} style={{textAlign: "center", fontSize : 20}}>
            <Typography variant="h6" className={classes.title}>
              Courses
            </Typography>
            <div className={classes.demo}>
            <List>
              <ListItem
              button
              >
              Chinese Language
              </ListItem>
              <ListItem
              button
              >
              Chinese Studies 
                  </ListItem>
                  </List>
            </div>
          </Grid>
          </Grid>
              </Paper>
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </div>
    </Grid>
    </Grid>
    </div>
    
{/* ------------------------------------LIST------------------------------------------ */}
<Divider/>
<div>
<Typography variant="h6" gutterBottom style={{textAlign: "center", fontSize : 30,fontWeight :'bold'}} >
                  Address
                </Typography >
                <Typography style = {divStyle} >
                21 Lower Kent Ridge Rd, Singapore 119077
                </Typography>
                </div>
    </AppBarDrawer>
    
  );
}

UniInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UniInfo);
