import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from 'react-router-dom/Link';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginLeft: -8,
    marginRight: 8
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  }
});

class AppBarDrawer extends Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, appName, children } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />

        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {appName}
            </Typography>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={open}
          onOpen={this.handleDrawerOpen}
          onClose={this.handleDrawerClose}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {/* Home */}
            <Link style={{ textDecoration: 'none' }} to="/">
              <ListItem button key={'Home'} onClick={this.handleDrawerClose}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItem>
            </Link>
            {/* Survey */}
            <Link style={{ textDecoration: 'none' }} to="/survey">
              <ListItem button key={'Survey'} onClick={this.handleDrawerClose}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Survey'} />
              </ListItem>
            </Link>
            {/* Search */}
            <Link style={{ textDecoration: 'none' }} to="/search">
              <ListItem button key={'Search'} onClick={this.handleDrawerClose}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={'Search'} />
              </ListItem>
            </Link>
            {/* Contact Us */}
            <Link style={{ textDecoration: 'none' }} to="/contact">
              <ListItem
                button
                key={'Contact Us'}
                onClick={this.handleDrawerClose}
              >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={'Contact Us'} />
              </ListItem>
            </Link>
          </List>
        </SwipeableDrawer>

        <main className={classes.content}>
          <div className={classes.drawerHeader} />
          {children}
        </main>
      </div>
    );
  }
}

AppBarDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(styles, { withTheme: true })(AppBarDrawer);
