import React, { useState } from 'react'
import { movies } from './Movies';
import SearchInput from './Components/SearchInput';
import MovieList from './Components/MovieList';

const App = () => {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((m) =>
  m.title.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>
      <h1>Search Movie Here</h1>
      <p>Here You an Search Your Favourite Movies</p>
      <SearchInput search={search} setSearch={setSearch} />
      <MovieList Movies={filteredMovies} />
    </div>
  )
}

export default App
