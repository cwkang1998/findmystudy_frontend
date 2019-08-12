import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  image: {
    minHeight: 100,
    minWidth: 300,
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
});

class CaptionImageButton extends Component {
  render() {
    const { classes, title, imageURL, onClick, grow, height, width } = this.props;
    let actualHeight = height ? height : 100;
    let actualWidth = width ? width : 300;
    return (
      <ButtonBase
        focusRipple
        key={title}
        onClick={onClick}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={
          grow
            ? {
                flexGrow: 1
              }
            : {
                height: actualHeight,
                width: actualWidth
              }
        }
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${imageURL})`
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    );
  }
}

CaptionImageButton.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  grow: PropTypes.bool,
  height: PropTypes.any,
  width: PropTypes.any
};

export default withStyles(styles)(CaptionImageButton);
