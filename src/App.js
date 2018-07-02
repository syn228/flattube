import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import Filter from './Components/Filter';
import './App.css';

class App extends Component {

  state = {
    shows: []
  }

  render = () => {
    return (
      <div>
        <TVShowList />
      </div>
    );
  }
  
}

export default App;
