import React, { useCallback } from "react";
import "./styles.css";

interface MovieList {
  movies: any;
  query: string;
}

const MovieList: React.FC<MovieList> = ({ movies, query }) => {
  const moviesRef = useCallback(
    (node) => {
      if (node !== null) {
        let searchedPara = node;
        let regex = RegExp(query, "gi"); // case insensitive
        let replacement = "<p style=background:yellow;margin:0;text-transform:capitalize;margin-right:5px;margin-left:5px>" + query + " " + "</p>";
        let newHTML = searchedPara.textContent.replace(regex, replacement);
        searchedPara.innerHTML = newHTML; // node = elRef.current
      }
    },
    [query]
  );

  return (
    <div className="movielist">
      {movies.Search
        ? movies.Search.map((movie: any, index: any) => (
            <div className="movie-container">
              <img src={movie.Poster} />
              <p ref={moviesRef} className="movie-title">
                {movie.Title}
              </p>
            </div>
          ))
        : null}
    </div>
  );
};

export default MovieList;
