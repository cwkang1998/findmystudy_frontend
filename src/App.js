import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { amber, orange, teal, blueGrey } from '@material-ui/core/colors';
// Shared Imports
import AppBarDrawer from './components/AppBarDrawer';
import NoMatchPage from './views/NoMatchPage';

// User Page Imports
import HomePage from './views/HomePage';
import UniSearchPage from './views/UniSearchPage';
import ContactPage from './views/ContactPage';
import ResultPage from './views/ResultPage';
import QuizPage from '././views/QuizPage';
import UniInfoPage from './views/UniInfoPage';

// Admin Page Imports
import AdminHomePage from './views/AdminHomePage';
import AdminLoginPage from './views/AdminLoginPage';
import AdminStudentPage from './views/AdminStudentPage';
import AdminUniversityPage from './views/AdminUniversityPage';

import Api from './services/Api';
import Storage from './services/Storage';
import GlobalContext from './services/GlobalContext';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: orange
  },
  typography: {
    useNextVariants: true
  }
});

const adminTheme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: blueGrey
  },
  typography: {
    useNextVariants: true
  }
});

const appBarList = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Personality Quiz',
    path: '/quiz'
  },
  {
    name: 'University',
    path: '/uni'
  },
  {
    name: 'Contact Us',
    path: '/contact'
  }
];

const adminAppBarList = [
  {
    name: 'Home',
    path: '/admin'
  },
  {
    name: 'Universities Management',
    path: '/admin/uni'
  },
  {
    name: 'Students Profile',
    path: '/admin/student'
  },
  {
    name: 'Back to User App',
    path: '/'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.appHistory = createBrowserHistory();
    this.state = {
      adminToken: '',
      appName: 'FindMyStudy',
      navList: appBarList,
      currentTheme: theme
    };
  }

  setAdminToken = token => {
    this.setState({ adminToken: token });
  };

  /**
   * componentWillMount here actually determines the theme colour and the appbar design and title
   * all of it depends on the route that it is currently in
   */
  componentWillMount = () => {
    if (window.location.pathname.split('/').includes('admin')) {
      this.setState({
        appName: 'FindMyStudy Admin',
        navList: adminAppBarList,
        currentTheme: adminTheme
      });
    } else {
      this.setState({
        appName: 'FindMyStudy',
        navList: appBarList,
        currentTheme: theme
      });
    }
    this.unlisten = this.appHistory.listen((location, action) => {
      if (location.pathname.split('/').includes('admin')) {
        this.setState({
          appName: 'FindMyStudy Admin',
          navList: adminAppBarList,
          currentTheme: adminTheme
        });
      } else {
        this.setState({
          appName: 'FindMyStudy',
          navList: appBarList,
          currentTheme: theme
        });
      }
    });
  };

  render() {
    const { appName, navList, currentTheme } = this.state;
    return (
      <Router history={this.appHistory}>
        <GlobalContext.Provider
          value={{
            api: new Api(),
            storage: new Storage(),
            admin: this.state.adminToken,
            setAdminToken: this.setAdminToken
          }}
        >
          <MuiThemeProvider theme={currentTheme}>
            <AppBarDrawer appName={appName} navList={navList}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/quiz" component={QuizPage} />
                <Route exact path="/uni" component={UniSearchPage} />
                <Route path="/uni/:id" component={UniInfoPage} />
                <Route path="/result" component={ResultPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/admin/login" component={AdminLoginPage} />
                {this.state.adminToken ? (
                  <Switch>
                    <Route exact path="/admin" component={AdminHomePage} />
                    <Route path="/admin/student" component={AdminStudentPage} />
                    <Route path="/admin/uni" component={AdminUniversityPage} />
                    <Route component={NoMatchPage} />
                  </Switch>
                ) : (
                  <Switch>
                    <Route
                      path="/admin"
                      render={props => (
                        <Redirect {...props} to="/admin/login" />
                      )}
                    />
                    <Route component={NoMatchPage} />
                  </Switch>
                )}
              </Switch>
            </AppBarDrawer>
          </MuiThemeProvider>
        </GlobalContext.Provider>
      </Router>
    );
  }
}

export default App;
