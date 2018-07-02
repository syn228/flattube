import React from 'react';

const Search = (props) => {
  return (
    <div>
      <input type="text" onChange={props.handleSearch} value={props.search} />
    </div>
  )
}

export default Search;
