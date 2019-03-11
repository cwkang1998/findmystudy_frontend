import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppBarDrawer from './components/AppBarDrawer';
import HomePage from './views/HomePage';
import SearchPage from './views/SearchPage';

class App extends Component {
  render() {
    return (
      <Router>
        <AppBarDrawer appName="MyApp">
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
        </AppBarDrawer>
      </Router>
    );
  }
}

export default App;
