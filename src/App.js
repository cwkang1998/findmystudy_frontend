import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppBarDrawer from './components/AppBarDrawer';
import HomePage from './views/HomePage';
import UniSearchPage from './views/UniSearchPage';
import ContactPage from './views/ContactPage';
import SurveyPage from './views/SurveyPage';
import UniInfoPage from './views/UniInfoPage';

class App extends Component {
  render() {
    return (
      <Router>
        <AppBarDrawer appName="FindMyStudy">
          <Route exact path="/" component={HomePage} />
          <Route path="/survey" component={SurveyPage} />
          <Route exact path="/uni" component={UniSearchPage} />
          <Route path="/uni/:id" component={UniInfoPage} />
          <Route path="/contact" component={ContactPage} />
        </AppBarDrawer>
      </Router>
    );
  }
}

export default App;
