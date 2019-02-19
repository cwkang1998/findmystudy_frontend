import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import FilterSearchBar from '../components/FilterSearchBar';

export default class SearchPage extends Component {
  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ paddingTop: 16 }}
      >
        <Grid item md={6}>
          <FilterSearchBar />
        </Grid>
        <Grid item>
          <GridList />
        </Grid>
      </Grid>
    );
  }
}
