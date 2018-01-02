import React, {Component} from 'react';

// Create a new search bar component 
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};// initialize a new state object and assign it to this.state
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.term} // controlled components
                onChange={event => this.setState({ term: event.target.value})} />
            </div>
        );
    }


     
}

export default SearchBar;