import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieById, fetchMoviesByGenres } from "./actions";

const allMoviesSlice = createSlice({
  name: "allMovies",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    totalPages: 0, 
  },
  reducers: {
    clearMovies(state) {
      state.data = [];
      state.totalPages = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoviesByGenres.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.results; 
        state.totalPages = action.payload.totalPages;
        
      })
      .addCase(fetchMoviesByGenres.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { clearMovies } = allMoviesSlice.actions;
export const allMoviesReducer = allMoviesSlice.reducer;

//movie ID slice
const movieByIdSlice = createSlice({
  name: "movieById",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieById.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchMovieById.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { setMovieByIdSlice } = movieByIdSlice.actions;
export const movieByIdReducer = movieByIdSlice.reducer;

// Genres Slice
const genresSlice = createSlice({
  name: "genres",
  initialState: {
    data: null, 
    status: "idle",
    error: null,
  },
  reducers: {
    setGenres: (state, action) => {
      state.data = action.payload.slice();
    },
  },
});

export const { setGenres } = genresSlice.actions;
export const genresReducer = genresSlice.reducer;
