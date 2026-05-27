import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul>
      {
        movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} handleSelectMovie={onSelectMovie} />
          </li>
        ))
      }
    </ul>
  );
};

export default MovieList;