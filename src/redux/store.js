import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { movieReducer, genreReducer } from "./reducers";
import { getDataFromStorage } from "../utils/localStorage";

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  movies: movieReducer,
  genres: genreReducer,
});

// Load initial state from local storage
const loadStateFromLocalStorage = () => {
  try {
    const storedMovies = getDataFromStorage("movies");
    const storedGenres = getDataFromStorage("genres");

    return {
      movies: storedMovies
        ? { data: storedMovies, status: "idle", error: null }
        : undefined,
      genres: storedGenres || [],
    };
  } catch (error) {
    console.error("Failed to load state from local storage:", error);
    return {};
  }
};

const preloadedState = loadStateFromLocalStorage();

// Create store with root reducer, preloaded state
const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

export default store;
