import React, { Component } from 'react';
import TVShow from './TVShow'
import App from '../App'

class TVShowList extends Component {

  render() {
    return (
      <div onClick={() => this.props.handleClick(this.props.show)}>
        <h4>{this.props.show.name}</h4>
        <img src={this.props.show.image.medium} /> 
      </div>
    )
  }

}

export default TVShowList;
