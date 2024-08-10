import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action to fetch movies by genres with pagination
export const fetchMoviesByGenres = createAsyncThunk(
  "movies/fetchByGenres",
  async ({ selectedGenres, page }, { rejectWithValue }) => {
    if (selectedGenres.length === 0) {
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
        results: response?.data?.results,
        totalPages: response?.data?.total_pages,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue({
          status_message: error.response?.data?.status_message || "An error occurred",
          status_code: error.response?.data?.status_code,
          success: error.response?.data?.success
        });
      } else {
        return rejectWithValue({
          status_message: error.message || "An error occurred"
        });
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
        return rejectWithValue({
          status_message: error.response?.data?.status_message || "An error occurred",
          status_code: error.response?.data?.status_code,
          success: error.response?.data?.success
        });
      } else {
        return rejectWithValue({
          status_message: error.message || "An error occurred"
        });
      }
    }
  }
);

