import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBarDrawer from './components/AppBarDrawer';
import HomePage from './views/HomePage';
import SearchPage from './views/SearchPage';

class App extends Component {
  render() {
    return (
      <AppBarDrawer appName="MyApp">
        <HomePage />
        {/* <SearchPage /> */}
      </AppBarDrawer>
    );
  }
}

export default App;
