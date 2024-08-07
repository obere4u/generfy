// Movie.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByGenres } from "../redux/actions";
import { setGenres } from "../redux/reducers";

const Movie = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const genres = useSelector((state) => state.genres);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  const availableGenres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
  ];

  const handleGenreChange = (genreId) => {
    const newGenres = genres.includes(genreId)
      ? genres.filter((id) => id !== genreId)
      : [...genres, genreId];
    dispatch(setGenres(newGenres));
  };

  useEffect(() => {
    if (genres.length > 0) {
      dispatch(fetchMoviesByGenres(genres));
    }
  }, [genres, dispatch]);

  return (
    <div>
      <h1>Movie Recommendations</h1>
      <div>
        <h2>Select Genres</h2>
        {availableGenres.map((genre) => (
          <label key={genre.id}>
            <input
              type="checkbox"
              value={genre.id}
              onChange={() => handleGenreChange(genre.id)}
              checked={genres.includes(genre.id)}
            />
            {genre.name}
          </label>
        ))}
      </div>
      <div>
        <h2>Recommended Movies</h2>
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Movie;
