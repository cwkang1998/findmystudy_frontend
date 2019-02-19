import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FilterList from '@material-ui/icons/FilterList';
import FilterSearchDialog from './FilterSearchDialog';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    minWidth: 350,
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
    this.onSearch = this.props.onSearch;
    this.state = {
      open: false,
      checkedUni: true,
      checkedCourse: true
    };
  }

  onFilterButtonClick = () => {
    this.setState({ open: true });
  };

  handleFilterDialogClose = () => {
    this.setState({ open: false });
  };

  onFilter = () => {};

  render() {
    return (
      <Paper className={this.classes.root} elevation={1}>
        <InputBase className={this.classes.input} placeholder="Search..." />
        <IconButton
          className={this.classes.iconButton}
          aria-label="Search"
          onClick={this.onSearch}
        >
          <SearchIcon />
        </IconButton>
        <Divider className={this.classes.divider} />
        <IconButton
          className={this.classes.iconButton}
          aria-label="Filter"
          onClick={this.onFilterButtonClick}
        >
          <FilterList />
        </IconButton>
        <FilterSearchDialog
          open={this.state.open}
          onClose={this.handleFilterDialogClose}
          checkedUni={this.state.checkedUni}
          checkedCourse={this.state.checkedCourse}
          onUniChecked={(event, checked) =>
            this.setState({ checkedUni: event.target.checked })
          }
          onCourseChecked={(event, checked) =>
            this.setState({ checkedCourse: event.target.checked })
          }
        />
      </Paper>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
