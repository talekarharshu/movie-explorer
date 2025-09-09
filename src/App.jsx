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
      <h1>Movie Search</h1>
      <SearchInput search={search} setSearch={setSearch} />
      <MovieList Movies={filteredMovies} />
    </div>
  )
}

export default App
