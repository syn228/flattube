import React, { Component } from 'react';
import Adapter from '../Adapter';
import TVShow from './tvShow';
import Search from './Search';

class TVShowList extends Component {

  mapAllShows = () => {
    if (!!this.props.searchTerm){
      return this.props.shows.map((s) => {
        if (s.name.toLowerCase().includes(this.props.searchTerm)){
          return (<TVShow show={s} key={s.id}/>)
        }
      })
    }

    return this.props.shows.map( (s)=> {
      return (<TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
    })
  }

  render() {
    return (
      <div className="tvShowList">
        {this.mapAllShows()}
      </div>
    );
  }

}

export default TVShowList;
