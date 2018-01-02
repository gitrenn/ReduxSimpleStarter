import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';
// Create a new search bar component 
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};// initialize a new state object and assign it to this.state
    }

    render() {
        return (
            <div>
                <Input  
                value={this.state.term} // controlled components
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
     
}

export default SearchBar;