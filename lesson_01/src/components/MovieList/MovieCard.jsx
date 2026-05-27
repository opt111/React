import React from 'react';
import './MovieCard.scss'
const MovieCard = ({ movie, handleSelectMovie }) => {
  return (
    <>
      <div className='List'>
        <span><b>{movie.title}</b></span>
        <span>({movie.year})</span>
        <span>—</span>
        <span>{movie.genre},</span>
        <span>⭐{movie.rating}</span>
        <button onClick={() => handleSelectMovie(movie)}>Select</button>
      </div>

    </>
  )

};

export default MovieCard;