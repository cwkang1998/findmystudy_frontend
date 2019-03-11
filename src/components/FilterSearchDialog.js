import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Radio, RadioGroup } from '@material-ui/core';
import { FormControl, FormControlLabel } from '@material-ui/core';

export default class FilterDialog extends Component {
  render() {
    const { open, onClose, handleChange, value } = this.props;
    return (
      <Dialog
        fullWidth
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Filter Search</DialogTitle>
        <DialogContent>
          <FormControl component="fieldset">
            <RadioGroup
              name="searchType"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="uni"
                control={<Radio />}
                label={'University'}
              />
              <FormControlLabel
                value="course"
                control={<Radio />}
                label={'Courses'}
              />
            </RadioGroup>
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
  onClose: PropTypes.func.isRequired
};
