import React from 'react';
import ReactDOM from 'react-dom';


// create a new component 
const App = () => {
    return <div>Hi!</div>
}

// render the component on the page we want
ReactDOM.render(<App />, document.querySelector('.container'));