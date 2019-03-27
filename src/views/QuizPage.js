import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  titleContainer: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'center'
    }
  },
  titleText: {
    fontSize: 36,
    fontWeight: 600,
    margin: 16,
    color: '#e67e00'
  },
  subtitleText: {
    fontSize: 24,
    margin: 16
  },
  questionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 16,
    marginRight: 16,
    [theme.breakpoints.up('md')]: {
      alignItems: 'center'
    }
  },
  innerQuestionContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  questionNumber: {
    marginRight: 8
  },
  questionAnswer: {
    margin: 'auto'
  },
  radioBtn: {
    margin: 8
  }
});

class QuizQuestions extends Component {
  state = {
    startIndex: 0,
    endIndex: 10,
    questions: [],
    showBackBtn: false,
    nextBtnTitle: 'Next',
    ans: new Array(100).fill('')
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
    let currentStartIndex = this.state.startIndex;
    if (currentStartIndex > 0) {
      this.setState({
        showBackBtn: currentStartIndex <= 10 ? false : true,
        startIndex: currentStartIndex - 10,
        endIndex: currentStartIndex,
        nextBtnTitle: 'Next'
      });
    }
  };

  proceedNext = () => {
    let currentEndIndex = this.state.endIndex;
    let questions = this.state.questions;
    if (questions.length < currentEndIndex) {
      this.setState({
        endIndex: questions.length
      });
    } else if (currentEndIndex < questions.length) {
      this.setState({
        showBackBtn: currentEndIndex + 10 > 10 ? true : false,
        startIndex: currentEndIndex,
        endIndex: currentEndIndex + 10,
        nextBtnTitle:
          currentEndIndex + 10 === questions.length ? 'Submit' : 'Next'
      });
    }
    if (
      currentEndIndex === questions.length &&
      this.state.nextBtnTitle == 'Submit'
    ) {
      // Submit and analyse answer here
      console.log(this.state.ans);
    }
  };

  onRadioClicked = no => {
    return event => {
      let copyAns = this.state.ans.slice();
      copyAns[no] = parseInt(event.target.value);
      this.setState({
        ans: copyAns
      });
    };
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container direction="column" alignItems="center">
          {/* Title */}
          <Grid item xs={12} className={classes.titleContainer}>
            <h1>
              <Typography className={classes.titleText}>
                Personality Quiz
              </Typography>
            </h1>
            <h4>
              <Typography className={classes.subtitleText}>
                Find out your personalities and interests.
              </Typography>
            </h4>
          </Grid>
          <Grid item xs={12}>
            {this.state.questions
              .slice(this.state.startIndex, this.state.endIndex)
              .map(({ _id, no, content, color }) => (
                <div key={_id} className={classes.questionContainer}>
                  <div className={classes.innerQuestionContainer}>
                    <div className={classes.questionNumber}>{`${no})`}</div>
                    <div>{content}</div>
                  </div>
                  <div className={classes.questionAnswer}>
                    <RadioGroup
                      row
                      radioGroup={no}
                      value={this.state.ans[no - 1].toString()}
                      onChange={this.onRadioClicked(no - 1)}
                    >
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Yes"
                        className={classes.radioBtn}
                      />
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="No"
                        className={classes.radioBtn}
                      />
                    </RadioGroup>
                  </div>
                </div>
              ))}
          </Grid>
          <Grid item xs={12}>
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
              {this.state.nextBtnTitle}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(QuizQuestions);
