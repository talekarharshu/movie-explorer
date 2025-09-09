import React from 'react'

const MovieList = ({Movies}) => {
  return (
   <ul>
    {Movies.map((Movie) => (
        <li key={Movie.id}>{Movie.title}</li>
      ))}
   </ul>
  );
}

export default MovieList
