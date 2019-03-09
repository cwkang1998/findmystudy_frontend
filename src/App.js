import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBarDrawer from './components/AppBarDrawer';
import HomePage from './views/HomePage';
import Contact from './Contact';
import Login from './login';

class App extends Component {
  render() {
    // return <HomePage />;
   // return <Contact />;
    return <Login />;
    return (
      <React.Fragment>
        <AppBarDrawer appName="FindMyStudy">
          {/* <HomePage /> */}
          <Contact />
        </AppBarDrawer>
      </React.Fragment>
    );
  }
}

export default App;
