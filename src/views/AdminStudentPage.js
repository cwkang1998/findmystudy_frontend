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
    const token = await this.context.adminToken;
    try {
      const res = await this.context.api.getAllStudents(token);
      if (res.ok) {
        const data = await res.json();
        this.setState({tableData: data});
      } else {
        // Depends on error type should either redirect to login(token expire) or show error
      }
    } catch (err) {
      // Shoud display err message
    }
  };

  navigateToAdminForm = id => {
    // this.props.history.push({
    //   pathname: `/admin/student/${id}`,
    //   state: {}
    // });
  };

  render() {
    const { classes } = this.props;
    const { tableData } = this.state;
    return (
      <div className={classes.root}>
        <AdminTable
          dataName={'Student'}
          tableData={tableData}
          dataIdKey={'_id'}
          onDataRowClick={this.navigateToAdminForm.bind(this)}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AdminStudentPage);
