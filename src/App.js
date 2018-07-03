import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import TVShow from './Components/TVShow'
import TVDisplay from './Components/TVDisplay'
import SearchBar from './Components/SearchBar'
import './App.css';

class App extends Component {

  state = {
    shows: [],
    displayObj: null,
    episodeArray: null,
    episodeMatch: null,
    searchTerm: "",
  }

  handleClick = (show) => {
    Adapter.getShowEpisodes(show.id).then(data => this.setState({
      episodeArray: data,
      displayObj: show,
      episodeMatch: null,
    }))
  }

  handleChange = (event) => {
    const match = this.state.episodeArray.filter(episode => episode.season == event.target.value)
    this.setState({
      episodeMatch: match
    });
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  componentDidMount() {
    Adapter.getShows().then(data => this.setState({
      shows: data
    })
    )
  }
  
  filtered = () => {
  let filtered = this.state.shows
    if(this.state.searchTerm){
      filtered = this.state.shows.filter(show => show.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    return filtered
  }
  

  render = () => {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch}/>
        {this.state.displayObj ? <TVDisplay episodeMatch={this.state.episodeMatch} handleChange={this.handleChange} show={this.state.displayObj} episodes={this.state.episodeArray}/> : console.log("nah")}
        <TVShow  handleClick={this.handleClick} data={this.filtered()}/>
      </div>
    );
  }

}

export default App;
