import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBarDrawer from './components/AppBarDrawer';
import HomePage from './views/HomePage';
import QuizQuestions from './QuizQuestions';

class App extends Component {
  render() {
    // return <HomePage />;
    return (
      <React.Fragment>
        <AppBarDrawer appName="FindMyStudy">
          <QuizQuestions />
        </AppBarDrawer>
      </React.Fragment>
    );
  }
}

export default App;
