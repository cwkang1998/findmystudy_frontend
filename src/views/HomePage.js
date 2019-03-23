import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CaptionImageButton from '../components/CaptionImageButton';
import QuizBtnImage from '../resources/images/quiz.jpeg';
import UniBtnImage from '../resources/images/uni.jpeg';

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '1 1 auto',
    flexWrap: 'wrap'
  }
});
class HomePage extends Component {
  navigateTo = destinationURL => {
    this.props.history.push(destinationURL);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CaptionImageButton
          grow
          title={'Take A Quiz to find your interests.'}
          imageURL={QuizBtnImage}
          onClick={() => this.navigateTo('/quiz')}
        />
        <CaptionImageButton
          grow
          title={'Search for Universities'}
          imageURL={UniBtnImage}
          onClick={() => this.navigateTo('/uni')}
        />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
