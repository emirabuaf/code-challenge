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
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoader(true);
    setInterval(() => {
      setLoader(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (query !== "") {
      fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
          setLoader(false);
          setError(false);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    }
  }, [query]);

  return (
    <div className="App">
      {!error ? (
        <div>
          <Search search={query} handleSearch={setQuery} />
          <Loader loading={loading} />
          <MovieList query={query} movies={movies} />
        </div>
      ) : (
        <p>Unable to receive data</p>
      )}
    </div>
  );
};

export default App;
