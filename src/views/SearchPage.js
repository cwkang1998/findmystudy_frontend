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
          'http://www.onbicdt.ox.ac.uk/sites/www.onbicdt.ox.ac.uk/files/styles/basic_page_case_study_main_image/public/contentimages/2017-07/UoN-UK-C-M.BlueRGB0150.png?itok=nOfSDAKm'
      },
      {
        title: 'Post title',
        uni: 'UniName2',
        img:
          'http://www.onbicdt.ox.ac.uk/sites/www.onbicdt.ox.ac.uk/files/styles/basic_page_case_study_main_image/public/contentimages/2017-07/UoN-UK-C-M.BlueRGB0150.png?itok=nOfSDAKm'
      },
      {
        title: 'Post title3',
        uni: 'UniName2',
        img:
          'http://www.onbicdt.ox.ac.uk/sites/www.onbicdt.ox.ac.uk/files/styles/basic_page_case_study_main_image/public/contentimages/2017-07/UoN-UK-C-M.BlueRGB0150.png?itok=nOfSDAKm'
      },
      {
        title: 'Post title2',
        uni: 'UniName2',
        img:
          'http://www.onbicdt.ox.ac.uk/sites/www.onbicdt.ox.ac.uk/files/styles/basic_page_case_study_main_image/public/contentimages/2017-07/UoN-UK-C-M.BlueRGB0150.png?itok=nOfSDAKm'
      },
      {
        title: 'Post title4',
        uni: 'UniName2',
        img:
          'http://www.onbicdt.ox.ac.uk/sites/www.onbicdt.ox.ac.uk/files/styles/basic_page_case_study_main_image/public/contentimages/2017-07/UoN-UK-C-M.BlueRGB0150.png?itok=nOfSDAKm'
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
