import React from 'react';

const Episode = (props) => {
  let { episode } = props
  console.log(episode);
  return (
    <div>

      Episode {episode.number} - {episode.name}
    </div>
  )
}

export default Episode;
