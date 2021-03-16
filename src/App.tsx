import React, { useState,useEffect } from 'react';
import './App.css';
import Search from './components/Search';

const API_KEY = "c05820ad"

const App = () => {
  const [movies,setMovies] = useState(null)
  const [query, setQuery] = useState('harry potter');


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
      <Search />
    </div>
  );
}

export default App;
