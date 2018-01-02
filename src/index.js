import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBlsDKSEnADH6MFN6rhFZQNfJuN-ceK99k';

// create a new component 
const App = () => {
    return <div>
        <SearchBar />
    </div>
}

// render the component on the page we want
ReactDOM.render(<App />, document.querySelector('.container'));