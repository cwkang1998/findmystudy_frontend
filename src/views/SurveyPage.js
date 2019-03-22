import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import { FormControlLabel } from '@material-ui/core';

const styles = {
  container: {
    textAlign: 'center',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 'calc(10px + 2vmin)'
    // backgroundColor: '#e3e3e3'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    padding: 8
  },
  radioBtn: {
    margin: 8
  },
  btnContainer: {
    display: 'flex'
  }
};

class QuizQuestions extends Component {
  state = {
    startIndex: 0,
    endIndex: 10,
    questions: [],
    showBackBtn: false,
    ans: []
  };

  async componentDidMount() {
    let data = [];
    try {
      let res = await fetch('http://localhost:5000/survey');
      data = await res.json();
    } catch (e) {
      console.log(e);
    }
    this.setState({ questions: data });
  }

  proceedBack = () => {
    let currentEndIndex = this.state.startIndex;
    if (currentEndIndex > 0) {
      this.setState({
        showBackBtn: currentEndIndex <= 10 ? false : true,
        startIndex: currentEndIndex - 10,
        endIndex: currentEndIndex
      });
    }
  };

  proceedNext = () => {
    let currentEndIndex = this.state.endIndex;
    if (this.state.questions.length <= this.state.endIndex) {
      this.setState({ endIndex: this.state.questions.length });
    } else if (currentEndIndex < this.state.questions.length) {
      this.setState({
        showBackBtn: currentEndIndex + 10 > 10 ? true : false,
        startIndex: currentEndIndex,
        endIndex: currentEndIndex + 10
      });
    }
  };

  render() {
    return (
      <div style={styles.container}>
        <h2> WHAT'S YOUR PERSONALITY COLOUR? </h2>
        <h4> Find out your personalities and interests. </h4>

        <div>
          {this.state.questions
            .slice(this.state.startIndex, this.state.endIndex)
            .map(({ no, content, color }) => (
              <div style={styles.innerContainer}>
                <div>{`${no}) ${content}`}</div>
                <div>
                  <RadioGroup row radioGroup={no}>
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                      style={styles.radioBtn}
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                      style={styles.radioBtn}
                    />
                  </RadioGroup>
                </div>
              </div>
            ))}
        </div>
        <div style={styles.btnContainer}>
          {this.state.showBackBtn ? (
            <Button
              name="Back"
              variant="contained"
              color="inherit"
              onClick={this.proceedBack}
              style={{ margin: 8 }}
            >
              Back
            </Button>
          ) : (
            ''
          )}
          <Button
            name="Next"
            variant="contained"
            color="primary"
            onClick={this.proceedNext}
            style={{ margin: 8 }}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default QuizQuestions;
