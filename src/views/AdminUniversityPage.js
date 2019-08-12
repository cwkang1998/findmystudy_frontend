import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AdminTable from '../components/AdminTable';
import GlobalContext from '../services/GlobalContext';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(3),
    padding: 16
  }
});

class AdminStudentPage extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.state = {
      tableData: []
    };
  }

  componentWillMount = async () => {
    try {
      const res = await this.context.api.getAllUnis();
      if (res.ok) {
        const data = await res.json();
        this.setState({ tableData: data });
      } else {
        // Depends on error type should either redirect to login(token expire) or show error
      }
    } catch (err) {
      // Shoud display err message
    }
  };

  navigateToAdminForm = id => {
    // this.props.history.push(`/admin/student/${id}`);
  };

  createNewUni = () => {};

  render() {
    const { classes } = this.props;
    const { tableData } = this.state;
    
    return (
      <div className={classes.root}>
        <AdminTable
          dataName={'University'}
          tableData={tableData}
          dataIdKey={'_id'}
          onDataRowClick={this.navigateToAdminForm.bind(this)}
          haveCreateButton
          onCreateButtonClick={this.createNewUni}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AdminStudentPage);
