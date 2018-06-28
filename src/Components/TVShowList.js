import React, { Component } from 'react';
import Adapter from '../Adapter';

class TVShowList extends Component {
  state = {
    shows: [],
  }


  componentDidMount = () => {
    Adapter.getShows().then(resp => {
      this.setState({
        shows: resp
      })
    })
  }


  render() {
    return (
      <div className="tvShowList">
        Add Code here
      </div>
    );
  }

}

export default TVShowList;
