import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AppBarDrawer from './components/AppBarDrawer';
import HomePage from './views/HomePage';
import UniSearchPage from './views/UniSearchPage';
import ContactPage from './views/ContactPage';
import ResultPage from './views/ResultPage';
import QuizPage from '././views/QuizPage';
import UniInfoPage from './views/UniInfoPage';
import NoMatchPage from './views/NoMatchPage';
import GlobalState from './services/GlobalState';

const User = () => {
  return (
    <AppBarDrawer appName="FindMyStudy">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/quiz" component={QuizPage} />
        <Route exact path="/uni" component={UniSearchPage} />
        <Route path="/uni/:id" component={UniInfoPage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </AppBarDrawer>
  );
};
class App extends Component {
  render() {
    return (
      <Router>
        <GlobalState>
          <Switch>
            <Route path="/" component={User} />
          </Switch>
        </GlobalState>
      </Router>
    );
  }
}

export default App;
