import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ClickableTable from '../components/ClickableTable';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  tableTitleContainer: {
    textAlign: 'left',
    width: '100%',
    padding: 8
  },
  buttonTitleContainer: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 16
  },
  tableTitle: {
    fontSize: 36,
    fontWeight: 600
  },
  table: {
    width: '100%'
  }
});

class AdminTable extends Component {
  render() {
    const {
      classes,
      dataName,
      tableData,
      dataIdKey,
      onDataRowClick,
      haveCreateButton,
      onCreateButtonClick
    } = this.props;
    return (
      <div>
        <Grid container direction="column">
          <Grid item className={classes.tableTitleContainer}>
            <h1>
              <Typography className={classes.tableTitle}>
                {dataName}
              </Typography>
            </h1>
          </Grid>
          <Grid item xs={12} className={classes.buttonTitleContainer}>
            {haveCreateButton ? (
              <Button color="secondary" variant="contained" onClick={onCreateButtonClick}>
                Add {dataName} +
              </Button>
            ) : (
              <div />
            )}
          </Grid>
          <Grid item className={classes.table}>
            <ClickableTable
              tableData={tableData}
              dataIdKey={dataIdKey}
              onDataRowClick={onDataRowClick}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AdminTable);
