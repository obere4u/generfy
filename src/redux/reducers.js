import { createSlice } from "@reduxjs/toolkit";
import { fetchMoviesByGenres } from "./actions";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesByGenres.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMoviesByGenres.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchMoviesByGenres.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

const genresSlice = createSlice({
  name: "genres",
  initialState: [],
  reducers: {
    setGenres: (state, action) => action.payload,
  },
});

export const { setMovies } = moviesSlice.actions;
export const { setGenres } = genresSlice.actions;

export const movieReducer = moviesSlice.reducer;
export const genreReducer = genresSlice.reducer;
