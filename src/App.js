import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppBarDrawer from './components/AppBarDrawer';
import HomePage from './views/HomePage';
import SearchPage from './views/SearchPage';
import ContactPage from './views/ContactPage';
import SurveyPage from './views/SurveyPage';
class App extends Component {
  render() {
    return (
      <Router>
        <AppBarDrawer appName="FindMyStudy">
          <Route exact path="/" component={HomePage} />
          <Route path="/survey" component={SurveyPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/contact" component={ContactPage} />
        </AppBarDrawer>
      </Router>
    );
  }
}

export default App;
