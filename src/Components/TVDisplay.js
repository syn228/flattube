import React, { Component } from 'react';
import App from '../App'
const seasonArray = [];

class TVDisplay extends Component {
    pushArray = () => {
    this.props.episodes.map(episode => !seasonArray.includes(episode.season) ? seasonArray.push(episode.season) : null)
    }
    
    render() {
        this.pushArray()   
        console.log(this.props.episodeMatch) 
        return (
            <div>
                <img src={this.props.show.image.medium}/> 
                <h4>Name: {this.props.show.name}</h4> 
                <p>Summary: {this.props.show.summary}</p>
                <p>Average Rating: {this.props.show.rating.average}</p>
                <select onChange={this.props.handleChange} style={{display: "block"}}>
                <option value="select" selected>Select Season</option>
                {seasonArray !== [] ? seasonArray.map(season => <option value={season}>Season {season}</option>) : null }
                </select>
                {this.props.episodeMatch !== null ? this.props.episodeMatch.map(episode => <li>Episode {episode.number}: {episode.name}</li>)  : null} 
            </div>
        );
    }
}

export default TVDisplay;