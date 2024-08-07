import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { movieReducer, genreReducer } from "./reducers";
import localStorageMiddleware from "./middleware/localStorage";

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  movies: movieReducer,
  genres: genreReducer,
});

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

// Load initial state from local storage
const loadStateFromLocalStorage = () => {
  try {
    const storedMovies = localStorage.getItem("movies");
    const storedGenres = localStorage.getItem("genres");

    const movies = storedMovies ? JSON.parse(storedMovies) : initialState;
    const genres = storedGenres ? JSON.parse(storedGenres) : [];

    return { movies, genres };
  } catch (error) {
    console.error("Failed to load state from local storage:", error);
    return { movies: initialState, genres: [] };
  }
};

const preloadedState = loadStateFromLocalStorage();

// Create store with root reducer, preloaded state, and middleware
const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
