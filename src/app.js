import React, { Component } from 'react';
import _ from 'lodash';

import Header from './components/header';
import SearchBar from './components/search_bar';
import Detail from './components/detail';
import List from './components/list';

import OMDbAPI from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: 'batman',
      videos: [],
      selectedVideo: null,
      currentPage: 1
    };
    this.videoSearch(this.state.term, this.state.currentPage);
  }

  videoSearch(term, page) {
    OMDbAPI.search({
      term: term,
      page: page
    }, data => {
      // console.log(data);
      this.setState({
        term: term,
        titles: data,
        selectedVideo: this.idSearch(data[0].imdbID),
        currentPage: page
      })
    });
  }

  idSearch(id) {
    OMDbAPI.idSearch(id, data => {
      this.setState({
        selectedVideo: data
      })
    });
  }

  nextPage() {
    this.videoSearch(this.state.term, this.state.currentPage+1);
  }

  prevPage() {
    if (this.state.currentPage > 1) {
      this.videoSearch(this.state.term, this.state.currentPage-1);
    }
  }

  onTitleSelect(selectedTitle) {
    this.idSearch(selectedTitle.imdbID);
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term, 1)
    }, 150);
    return (
      <div>
        <Header />
        <SearchBar onSearchTermChange={videoSearch} />
        <div>
          <button onClick={() => this.prevPage()}>Prev page</button>
          <button onClick={() => this.nextPage()}>Next page</button>
          <Detail video={this.state.selectedVideo} />
          <List
            titles={this.state.titles}
            onTitleSelect={selectedTitle => this.onTitleSelect(selectedTitle)}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
        </div>
      </div>
    );
  }
}

export default App;
