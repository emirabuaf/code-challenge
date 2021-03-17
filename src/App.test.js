import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Search from "./components/Search";
import MovieList from "./components/MovieList";

test("render only input field ", () => {
  render(<App />);
  const inputNode = screen.getByPlaceholderText("Search for a movie");
  expect(inputNode).toBeInTheDocument();
  const movieContainer = document.querySelector(".movie-container");
  expect(movieContainer).not.toBeInTheDocument();
});

test("input change", () => {
  const handleSearch = jest.fn((value) => {});

  const { queryByPlaceholderText } = render(
    <Search handleSearch={handleSearch} />
  );
  const searchInput = queryByPlaceholderText("Search for a movie");

  fireEvent.change(searchInput, { target: { value: "test" } });

  expect(searchInput.value).toBe("test");
});

test("if the movies render", () => {
  const movies = [{ name: "batman" }, { name: "batman" }];

  render(<MovieList movies={movies} />);
  const movieContainer = document.querySelector(".movie-container");
});
