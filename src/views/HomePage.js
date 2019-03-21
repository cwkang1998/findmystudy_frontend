import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CaptionImageButton from '../components/CaptionImageButton';
import SurveyBtnImage from '../resources/images/survey.jpeg';
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
          title={'Take A Survey to find your interests.'}
          imageURL={SurveyBtnImage}
          onClick={() => this.navigateTo('/survey')}
        />
        <CaptionImageButton
          grow
          title={'Search for Universities'}
          imageURL={UniBtnImage}
          onClick={() => this.navigateTo('/search')}
        />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
