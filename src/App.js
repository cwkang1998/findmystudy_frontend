import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBarDrawer from './components/AppBarDrawer';
import HomePage from './views/HomePage';

class App extends Component {
  render() {
    // return <HomePage />;
    return (
      <React.Fragment>
        <AppBarDrawer appName="MyApp">
          <HomePage />
        </AppBarDrawer>
      </React.Fragment>
    );
  }
}

export default App;
