import React, { useState,useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import MovieList from './components/MovieList'

const API_KEY = "c05820ad"

const App = () => {
  const [movies,setMovies] = useState([])
  const [query, setQuery] = useState('');


  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
  }, [query]);

  return (
    <div className="App">
      <Search search={query} handleSearch={setQuery} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
