import React, { Component } from 'react';
import Api from './Api';
import Storage from './Storage';
import GlobalContext from './GlobalContext';

export default class GlobalState extends Component {
  state = {
    adminToken: ''
  };

  setAdminToken = token => {
    this.setState({ adminToken: token });
  };

  analyseQuiz = (questions, answers) => {
    let points = { gold: 0, green: 0, blue: 0, orange: 0 };
    let colorArr = new Array(questions.length).fill(0);
    console.log(questions);
    console.log(answers);
    // Extract no and color from questions to prevent erronous evaluation
    for (let i = 0; i < questions.length; i++) {
      colorArr[questions[i]['no'] - 1] = questions[i]['color'];
    }

    // Analyse the data and catogorize
    for (let i = 0; i < colorArr.length; i++) {
      if (answers[i] === 1) {
        points[colorArr[i]] = points[colorArr[i]] + 1;
      }
    }

    let maxColor = 'gold';
    let maxVal = 0;
    let keys = Object.keys(points);
    for (let i = 0; i < 4; i++) {
      if (points[keys[i]] > maxVal) {
        maxVal = points[keys[i]];
        maxColor = keys[i];
      }
    }

    return {
      color: maxColor,
      points: points
    };
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          api: new Api(),
          storage: new Storage(),
          admin: this.state.adminToken,
          setAdminToken: this.setAdminToken,
          analyseQuiz: this.analyseQuiz
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}
