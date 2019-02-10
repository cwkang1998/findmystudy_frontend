import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl, FormControlLabel } from '@material-ui/core';
import CheckBox from '@material-ui/core/Checkbox';

export default class FilterDialog extends Component {
  render() {
    const {
      open,
      onClose,
      checkedUni,
      checkedCourse,
      onUniChecked,
      onCourseChecked
    } = this.props;
    return (
      <Dialog
        fullWidth
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Filter Search</DialogTitle>
        <DialogContent>
          <FormControl>
            <FormControlLabel
              control={
                <CheckBox
                  checked={checkedUni}
                  value={'checkedUni'}
                  onChange={onUniChecked}
                />
              }
              label={'University'}
            />
            <FormControlLabel
              control={
                <CheckBox
                  checked={checkedCourse}
                  value={'checkedCourse'}
                  onChange={onCourseChecked}
                />
              }
              label={'Courses'}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

FilterDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  checkedUni: PropTypes.bool.isRequired,
  checkedCourse: PropTypes.bool.isRequired,
  onUniChecked: PropTypes.func.isRequired,
  onCourseChecked: PropTypes.func.isRequired
};
