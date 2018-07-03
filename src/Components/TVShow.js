import React, { Component } from 'react';
import TVShowList from './TVShowList'
import App from '../App'

class TVShow extends Component {


  render() {
    return (
      <div>
        {this.props.data.map(show => <TVShowList handleClick={this.props.handleClick} show={show}/>)}
     </div>
    )
  }

}

export default TVShow;
