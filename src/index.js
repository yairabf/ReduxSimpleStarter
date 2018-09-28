import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAdt-DVsq6C_q2crb9pz4Mw58LLncnJo_c';

// Create a new component. This component should produce some HTML
YTSearch({key: API_KEY, term: 'MKBHD'}, function(data) {
  console.log(data);
});

class App extends Component {
    render () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Take this  component's genereated HTML and put it on the page. (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));