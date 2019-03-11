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

const images = [
  {
    key: 1,
    url: SurveyBtnImage,
    title: 'Take A Survey to find your interests.'
  },
  {
    key: 2,
    url: UniBtnImage,
    title: 'Search for University/Courses'
  }
];

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {images.map(image => (
          <CaptionImageButton grow title={image.title} imageURL={image.url} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
