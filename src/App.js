import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppBarDrawer from './components/AppBarDrawer';
import HomePage from './views/HomePage';
import UniSearchPage from './views/UniSearchPage';
import ContactPage from './views/ContactPage';
import QuizPage from '././views/QuizPage';
import UniInfoPage from './views/UniInfoPage';
import GlobalState from './services/GlobalState';

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalState>
          <AppBarDrawer appName="FindMyStudy">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/quiz" component={QuizPage} />
            <Route exact path="/uni" component={UniSearchPage} />
            <Route path="/uni/:id" component={UniInfoPage} />
            <Route path="/contact" component={ContactPage} />
          </AppBarDrawer>
        </GlobalState>
      </Router>
    );
  }
}

export default App;
