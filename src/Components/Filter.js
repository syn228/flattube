import React, { Component } from 'react';

class Filter extends Component {

  render = () => {
    return (
      <div className="filter">
        <input type="checkbox" >

        </input>
      </div>
    );
  }
}

export default Filter;



Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
      if(!arr.includes(this[i])) {
          arr.push(this[i]);
      }
  }
  return arr;
}
