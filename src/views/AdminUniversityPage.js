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
function createData(name, description, address, courses, icon) {
  id += 1;
  return { id, name, description, address, courses, icon };
}

const rows = [
  createData(
    'University of Nottingham Malaysia',
    'Universities are powerful institutions; they play a key role in our driving economic and social development through both the provision of education and through the process of research, innovation and knowledge transfer. At the University of Nottingham we are committed to the provision of an excellent educational experience in a campus environment led by academic staff who are themselves leading research that will address some of the major challenges confronting our global society.Consistently ranked in the top 100 Universities worldwide, we offer a range of study opportunities for students from foundation level courses through to doctoral degrees. A broad range of undergraduate and postgraduate programmes are available from different specialist schools and departments across the Faculties of Arts and Social Sciences, Engineering and Science. We host a community of around 5000 students from over 85 different countries worldwide who work with and receive a world-class higher education experience from leading academics in their field. The campus provides excellent teaching, learning and research facilities including a well equipped library, dedicated study areas and computer, language, and science and engineering laboratories.',
    'Jalan Broga, 43500 Semenyih Selangor Darul Ehsan, Malaysia',
    JSON.stringify(['MsC Engineering', 'Bsc (Hons.) Computer Science']),
    'uploads/images/university1'
  ),
  createData(
    'National University of Singapore',
    'The National University of Singapore aspires to be a vital community of academics, researchers, staff, students and alumni working together in a spirit of innovation and enterprise for a better world. Our singular focus on talent will be the cornerstone of a truly great university that is dedicated to quality education, influential research and visionary enterprise, in service of country and society.',
    '21 Lower Kent Ridge Rd, Singapore 119077',
    JSON.stringify(['MsC Engineering', 'Msc (Hons.) Pharmacy']),
    'uploads/images/university2'
  )
];

class AdminStudentPage extends Component {
  navigateToAdminForm = id => {
    // this.props.history.push(`/admin/student/${id}`);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AdminTable
          dataName={'University'}
          tableData={rows}
          dataIdKey={'id'}
          onDataRowClick={this.navigateToAdminForm.bind(this)}
          haveButton={true}
        />
      </div>
    );
  }
}

export default withStyles(styles)(AdminStudentPage);
