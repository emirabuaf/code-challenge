import React from "react";
import "./styles.css";

interface MovieList {
  movies: any;
}

const MovieList: React.FC<MovieList> = ({ movies }) => {
  return (
    <div className="movielist">
      {movies.Search
        ? movies.Search.map((movie: any) => <h1>{movie.Title}</h1>)
        : null}
    </div>
  );
};

export default MovieList;
