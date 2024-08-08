import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMoviesByGenres = createAsyncThunk(
  "movies/fetchByGenres",
  async (selectedGenres, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie`,
        {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            with_genres: selectedGenres.join("|"),
          },
        }
      );

      return response.data.results;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
