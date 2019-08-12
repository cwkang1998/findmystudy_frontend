import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    overflowX: 'auto',
    padding: 8,
  },
  hoverPointer: {
    cursor: 'pointer'
  },
  noContentBox: {
    textAlign: 'center',
    margin: 'auto',
    fontSize: 16
  }
});

class ClickableTable extends Component {
  render() {
    const { classes, tableData, dataIdKey, onDataRowClick } = this.props;
    return (
      <Paper className={classes.root}>
        {tableData.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                {Object.keys(tableData[0]).map(key => (
                  <TableCell key={key}>{key}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map(row => (
                <TableRow
                  key={row[dataIdKey]}
                  onClick={() => onDataRowClick(row[dataIdKey])}
                  hover={true}
                  className={classes.hoverPointer}
                >
                  {Object.keys(row).map(key => (
                    <TableCell key={row[key]}>{row[key]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className={classes.noContentBox}>
            <Typography>There is currently no data in this table.</Typography>
          </div>
        )}
      </Paper>
    );
  }
}

ClickableTable.propTypes = {
  tableData: PropTypes.array.isRequired,
  dataIdKey: PropTypes.string.isRequired,
  onDataRowClick: PropTypes.func.isRequired
};

export default withStyles(styles)(ClickableTable);
