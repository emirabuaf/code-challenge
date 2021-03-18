import React, { useCallback } from "react";
import "./styles.css";

interface MovieList {
  movies: any;
  debounce: string;
}

const MovieList: React.FC<MovieList> = ({ movies, debounce }) => {
  const moviesRef = useCallback(
    (node) => {
      if (node !== null) {
        let searched = node;
        let regex = RegExp(debounce, "gi");
        let replacement =
          "<p style=background:yellow;margin:0;text-transform:capitalize;margin-right:5px;margin-left:5px;height:20px;>" +
          debounce +
          " " +
          "</p>";
        let newHTML = searched.textContent.replace(regex, replacement);
        searched.innerHTML = newHTML;
      }
    },
    [debounce]
  );

  return (
    <div className="movielist">
      {movies.Search
        ? movies.Search.map((movie: any, key: any) => (
            <div
              data-testid="movie-container"
              className="movie-container"
              key={movie.imdbID}
            >
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
