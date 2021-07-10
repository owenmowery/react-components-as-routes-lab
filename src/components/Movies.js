import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return(
            <div>
              Title: {movie.title}
              <br></br>
              Time: {movie.time}
              <br></br>
              {movie.genres.map(genre => {return(<ul>{genre}</ul>)})}
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
