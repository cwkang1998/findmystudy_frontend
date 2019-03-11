import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FilterSearchBar from '../components/FilterSearchBar';
import UniList from '../components/UniList';
import CourseList from '../components/CourseList';

const styles = {
  container: {
    paddingTop: 16,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  searchBar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 8
  }
};

export default class SearchPage extends Component {
  state = {
    dataList: [
      {
        title: 'Featured post',
        uni: 'UniName',
        img:
          'https://dof4zo1o53v4w.cloudfront.net/s3fs-public/styles/logo/public/logos/UoN_Primary_Logo_RGB.png?itok=DrEaz-QZ'
      },
      {
        title: 'Post title',
        uni: 'UniName2',
        img:
          'https://dof4zo1o53v4w.cloudfront.net/s3fs-public/styles/logo/public/logos/UoN_Primary_Logo_RGB.png?itok=DrEaz-QZ'
      },
      {
        title: 'Post title3',
        uni: 'UniName2',
        img:
          'https://dof4zo1o53v4w.cloudfront.net/s3fs-public/styles/logo/public/logos/UoN_Primary_Logo_RGB.png?itok=DrEaz-QZ'
      },
      {
        title: 'Post title2',
        uni: 'UniName2',
        img:
          'https://dof4zo1o53v4w.cloudfront.net/s3fs-public/styles/logo/public/logos/UoN_Primary_Logo_RGB.png?itok=DrEaz-QZ'
      },
      {
        title: 'Post title4',
        uni: 'UniName2',
        img:
          'https://dof4zo1o53v4w.cloudfront.net/s3fs-public/styles/logo/public/logos/UoN_Primary_Logo_RGB.png?itok=DrEaz-QZ'
      }
    ],
    topic: 'uni'
  };

  onFilterChange = event => {
    this.setState({ topic: event.target.value });
  };

  render() {
    const { dataList } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.searchBar}>
          <FilterSearchBar
            topic={this.state.topic}
            onFilterChange={this.onFilterChange}
          />
        </div>
        {this.state.topic == 'uni' ? (
          <UniList dataList={dataList} />
        ) : this.state.topic == 'course' ? (
          <CourseList dataList={dataList} />
        ) : (
          ''
        )}
      </div>
    );
  }
}
