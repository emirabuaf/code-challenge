import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";

const API_KEY = "c05820ad";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoader] = useState(false);
  

  useEffect(() => {
    setLoader(true);
  },[])

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoader(false)
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <div className="App">
      <Search search={query} handleSearch={setQuery} />
      <Loader loading={loading}/>
      <MovieList query={query} movies={movies} />
    </div>
  );
};

export default App;
