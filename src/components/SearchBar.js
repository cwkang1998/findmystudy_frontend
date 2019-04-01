import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    minWidth: 300
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
    this.onSearch = this.props.onSearch;
    this.onChange = this.props.onChange;
  }

  formOnEnterKey = event => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      this.onSearch();
    }
  };

  render() {
    return (
      <Paper className={this.classes.root} elevation={1}>
        <InputBase
          className={this.classes.input}
          placeholder="Search..."
          onChange={this.onChange}
          onKeyPress={this.formOnEnterKey.bind(this)}
        />
        <IconButton
          className={this.classes.iconButton}
          aria-label="Search"
          onClick={this.onSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchBar);
