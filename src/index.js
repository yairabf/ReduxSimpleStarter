import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAdt-DVsq6C_q2crb9pz4Mw58LLncnJo_c';

// Create a new component. This component should produce some HTML


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('MKBHD')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo:videos[0]
      }); 
    });
  }

  render () {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
      </div>
    );
  }
}

// Take this  component's genereated HTML and put it on the page. (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));