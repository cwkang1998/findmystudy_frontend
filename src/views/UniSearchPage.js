import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../components/SearchBar';
import UniList from '../components/UniList';
import GlobalContext from '../services/GlobalContext';

const styles = {
  container: {
    paddingTop: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  searchBar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 8
  },
  nothingText: {
    fontSize: 16,
    margin: 16,
    textAlign: 'center'
  }
};

export default class SearchPage extends Component {
  static contextType = GlobalContext;
  state = {
    searchValue: '',
    dataList: []
  };

  async componentDidMount() {
    const { api } = this.context;
    let data = [];
    try {
      let res = await api.getAllUnis();
      data = await res.json();
    } catch (err) {
      console.log(err);
    }
    this.setState({ dataList: data });
  }

  onSearch = async () => {
    const { api } = this.context;
    let data = [];
    try {
      let res = await api.getAllUnis(this.state.searchValue);
      data = await res.json();
    } catch (err) {
      console.log(err);
    }
    this.setState({ dataList: data });
  };

  onChange = async event => {
    await this.setState({ searchValue: event.target.value });
    this.onSearch();
  };

  navigateTo = destinationURL => {
    const history = this.props.history;
    return () => history.push(destinationURL);
  };

  render() {
    const { dataList } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.searchBar}>
          <SearchBar
            searchValue={this.state.searchValue}
            onSearch={this.onSearch}
            onChange={this.onChange}
          />
        </div>
        {dataList.length === 0 ? (
          <Typography style={styles.nothingText}>
            Your search did not match any university.
          </Typography>
        ) : (
          <UniList dataList={dataList} onItemClick={this.navigateTo} />
        )}
      </div>
    );
  }
}
