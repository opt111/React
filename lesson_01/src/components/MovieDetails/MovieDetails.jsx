import React from 'react';

const MovieDetails = ({selectedMovie }) => {
  if (!selectedMovie) return null;
  return (
    <ul>
      {Object.entries(selectedMovie)
      .filter(([key]) => key !== 'id')
      .map(([key,item]) => (
        <li key={key}>{key}: {item}</li>
      ))}
    </ul>
  )
    

};

export default MovieDetails;