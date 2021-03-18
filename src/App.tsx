import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";
import useDebounce from "./custom-hook/useDebounce";


const API_KEY = "c05820ad";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    setLoader(true);
    setInterval(() => {
      setLoader(false);
    }, 1000);
  }, []);


  useEffect(() => {
    if (debouncedQuery) {
      setLoader(true)
      fetch(`http://www.omdbapi.com/?s=${debouncedQuery}&apikey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
          setError(false);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    } else {
      setMovies([])
    }
  }, [debouncedQuery]);

  return (
    <div className="App">
      {!error ? (
        <div>
          <Search  search={query} handleSearch={setQuery} />
          <Loader loading={loading} />
          <MovieList debounce={debouncedQuery} movies={movies} />
        </div>
      ) : (
        <p>Unable to receive data</p>
      )}
    </div>
  );
};

export default App;
