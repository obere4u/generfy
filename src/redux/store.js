import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { genresReducer, movieByIdReducer, allMoviesReducer } from "./reducers";
import { getDataFromStorage } from "../utils/localStorage";

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  allMovies: allMoviesReducer,
  movieById: movieByIdReducer,
  genres: genresReducer,
});

// Load initial state from local storage
const loadStateFromLocalStorage = () => {
  const storedGenres = getDataFromStorage("genres");
  return {
    genres: storedGenres || [],
  };
};

const preloadedState = loadStateFromLocalStorage();

// Create store with root reducer, preloaded state
const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default store;
