import React, { Component } from 'react';
import './App.css';
import HomePage from './views/HomePage';
import Contact from './Contact';
import Login from './login';
import UniInfo from './UniInfo';
//import CourseInfo from './CourseInfo';

class App extends Component {
  render() {
    // return <HomePage />;
   // return <Contact />;
    //return <Login />;
    return <UniInfo/>;
   // return <CourseInfo/>;
  }
}

export default App;
