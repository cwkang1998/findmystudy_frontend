import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import GlobalContext from '../services/GlobalContext';

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
  nothingText: {
    fontSize: 18,
    margin: 16,
    textAlign: 'center'
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
  },
  close: {
    padding: theme.spacing.unit / 2
  },
  form: {
    padding: 16
  },
  formItems: {
    marginTop: 16,
    marginBottom: 4
  }
});

class QuizQuestions extends Component {
  static contextType = GlobalContext;

  state = {
    name: '',
    dob: '',
    gender: '',
    nameError: false,
    dobErrorMsg: '',
    dobError: false,
    genderErrorMsg: '',
    genderError: false,
    startIndex: 0,
    endIndex: 10,
    isBasicInfoGiven: false,
    questions: [],
    isSnackBarOpen: false,
    snackBarMsg: '',
    showBackBtn: false,
    nextBtnTitle: 'Next',
    ans: new Array(100).fill(1)
  };

  async componentDidMount() {
    let data = [];
    try {
      let res = await this.context.api.getAllQuiz();
      if (res.ok) {
        data = await res.json();
      }
    } catch (e) {
      console.log(e);
    }
    let studentData = this.context.storage.getStudentData();
    if (studentData) {
      this.setState({
        name: studentData['name'],
        dob: studentData['dob'],
        gender: studentData['gender']
      });
    }
    this.setState({ questions: data });
  }

  componentDidUpdate() {
    // Fix scrolling issue.
    window.scrollTo(0, 0);
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

  proceedNext = async () => {
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
      let filledIn = this.state.ans.every(function(element) {
        return typeof element === 'number';
      });
      if (!filledIn) {
        this.showSnackBar('The quiz is not completed yet!');
        return;
      }
      // Submit and analyse answer here
      let analysedColorData = this.context.analyseQuiz(
        this.state.questions,
        this.state.ans
      );
      let studentData = {
        name: this.state.name,
        dob: this.state.dob,
        gender: this.state.gender,
        color: analysedColorData.points
      };
      console.log(analysedColorData);
      console.log(studentData);

      const existingStudentData = this.context.storage.getStudentData();
      if (
        existingStudentData['name'] == this.state.name &&
        existingStudentData['id']
      ) {
        try {
          let data = await this.context.api.updateStudent(
            existingStudentData['id'],
            studentData
          );
          studentData['id'] = existingStudentData['id'];
          // console.log(await data.json());
          this.context.storage.saveStudentData(studentData);
          this.props.history.push({
            pathname: '/result',
            state: analysedColorData
          });
        } catch (e) {
          console.log(e);
          this.context.storage.saveStudentData(studentData);
          this.showSnackBar(`Failed to submit data. Please try again. ${e}.`);
        }
      } else {
        try {
          let res = await this.context.api.createStudent(studentData);
          if (res.ok) {
            let data = await res.json();
            studentData['id'] = data['_id'];
          }
          this.context.storage.saveStudentData(studentData);
          this.props.history.push({
            pathname: '/result',
            state: analysedColorData
          });
        } catch (e) {
          this.context.storage.saveStudentData(studentData);
          this.showSnackBar(`Failed to submit data. Please try again. ${e}.`);
        }
      }
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

  showSnackBar = msg => {
    this.setState({
      isSnackBarOpen: true,
      snackBarMsg: msg
    });
  };

  hideSnackBar = () => {
    this.setState({
      isSnackBarOpen: false,
      snackBarMsg: ''
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  validateAndProceed = () => {
    let valid = true;
    const { name, dob, gender } = this.state;
    const required = { name, dob, gender };

    Object.keys(required).forEach(key => {
      if (!required[key]) {
        valid = false;
        this.setState({
          [`${key}Error`]: true,
          [`${key}ErrorMsg`]: 'This field is required.'
        });
      }
    });
    this.setState({ isBasicInfoGiven: valid });
  };

  formOnEnterKey = event => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      this.validateAndProceed();
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* Main Container */}
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

          {/* Display Form or Question depending on basic info */}
          {this.state.isBasicInfoGiven ? (
            // Display Questions
            !(this.state.questions.length === 0) ? (
              <React.Fragment>
                <Grid item xs={12}>
                  {this.state.questions
                    .slice(this.state.startIndex, this.state.endIndex)
                    .map(({ _id, no, content, color }) => (
                      <div key={_id} className={classes.questionContainer}>
                        <div className={classes.innerQuestionContainer}>
                          <div
                            className={classes.questionNumber}
                          >{`${no})`}</div>
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

                {/* Display next button */}
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
              </React.Fragment>
            ) : (
              // Display nothing message for questions
              <Grid item xs={12}>
                <Typography className={classes.nothingText}>
                  There are no questions now. Please refresh the page.
                </Typography>
              </Grid>
            )
          ) : (
            // Display forms
            <Grid item xs={12}>
              <form
                className={classes.form}
                onKeyPress={this.formOnEnterKey.bind(this)}
              >
                <TextField
                  id="name"
                  label="Name"
                  fullWidth
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                  placeholder="MyName"
                  required
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.formItems}
                  helperText={this.state.nameErrorMsg}
                  error={this.state.nameError}
                />
                <TextField
                  id="dob"
                  label="Date of Birth"
                  fullWidth
                  value={this.state.dob}
                  type="date"
                  onChange={this.handleChange('dob')}
                  margin="normal"
                  required
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.formItems}
                  helperText={this.state.dobErrorMsg}
                  error={this.state.dobError}
                />
                <FormControl
                  fullWidth
                  required
                  className={classes.formItems}
                  error={this.state.genderError}
                >
                  <InputLabel shrink htmlFor="gender">
                    Gender
                  </InputLabel>
                  <Select
                    value={this.state.gender}
                    onChange={this.handleChange('gender')}
                    input={<Input name="gender" id="gender" />}
                    name="gender"
                  >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                  </Select>
                  <FormHelperText error={this.state.genderError}>
                    {this.state.genderErrorMsg}
                  </FormHelperText>
                </FormControl>

                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  className={classes.formItems}
                  onClick={this.validateAndProceed}
                >
                  Proceed to the Quiz
                </Button>
              </form>
            </Grid>
          )}
        </Grid>

        {/* Snackbar */}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          onClick={this.hideSnackBar}
          open={this.state.isSnackBarOpen}
          autoHideDuration={6000}
          onClose={this.hideSnackBar}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{this.state.snackBarMsg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.hideSnackBar}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(QuizQuestions);
