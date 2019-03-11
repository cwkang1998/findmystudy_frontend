import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CaptionImageButton from '../components/CaptionImageButton';

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '1 1 auto',
    flexWrap: 'wrap'
  }
});

const images = [
  {
    url: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg',
    title: 'Take A Survey to find your interests.'
  },
  {
    url: '/static/images/grid-list/morethings.jpg',
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
