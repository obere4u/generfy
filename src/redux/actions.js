import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action to fetch movies by genres with pagination
export const fetchMoviesByGenres = createAsyncThunk(
  "movies/fetchByGenres",
  async ({ selectedGenres, page }, { rejectWithValue }) => {
    console.log("asy p: ", page)
    if (selectedGenres === 0) {
      return [];
    }
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie`,
        {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            with_genres: selectedGenres.join("|"),
            page: page, 
          },
        }
      );

      return {
        results: response.data.results,
        totalPages: response.data.total_pages,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(
          error.response ? error.response.data : error.message
        );
      }
    }
  }
);

// Action to fetch a single movie by its ID
export const fetchMovieById = createAsyncThunk(
  "movieDetails/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(
          error.response ? error.response.data : error.message
        );
      }
    }
  }
);
