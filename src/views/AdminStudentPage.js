import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AdminTable from '../components/AdminTable';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(3),
    padding: 16
  }
});

let id = 0;
function createData(name, dob, gender, color, created_time) {
  id += 1;
  return { id, name, dob, gender, color, created_time };
}

const rows = [
  createData(
    'Chen Wen Kang',
    '24/03/1998',
    'Male',
    JSON.stringify({ gold: 0, green: 0, blue: 0, orange: 0 }),
    Date(Date.now()).toString()
  ),
  createData(
    'Jonathan',
    '10/10/1998',
    'Male',
    JSON.stringify({ gold: 0, green: 0, blue: 0, orange: 0 }),
    Date(Date.now()).toString()
  ),
  createData(
    'Lee Xin',
    '21/06/1997',
    'Female',
    JSON.stringify({ gold: 0, green: 0, blue: 0, orange: 0 }),
    Date(Date.now()).toString()
  ),
  createData(
    'Wei Xian',
    '03/04/1998',
    'Male',
    JSON.stringify({ gold: 0, green: 0, blue: 0, orange: 0 }),
    Date(Date.now()).toString()
  ),
  createData(
    'Adhi',
    '17/07/1997',
    'Male',
    JSON.stringify({ gold: 0, green: 0, blue: 0, orange: 0 }),
    Date(Date.now()).toString()
  )
];

class AdminStudentPage extends Component {
  navigateToAdminForm = id => {
    console.log(id);
    // this.props.history.push({
    //   pathname: `/admin/student/${id}`,
    //   state: {}
    // });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AdminTable
          dataName={'Student'}
          tableData={rows}
          dataIdKey={'id'}
          onDataRowClick={this.navigateToAdminForm.bind(this)}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AdminStudentPage);
