import React, { Component } from 'react';
import App from '../App'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.handleSearch} type="text" placeholder="Search TV Shows"/>
            </div>
        );
    }
}

export default SearchBar;