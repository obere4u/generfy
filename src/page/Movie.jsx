import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByGenres } from "../redux/actions";
import { setGenres } from "../redux/reducers";
import { AVAILABLEGENRES } from "../constants";
import { getDataFromStorage, setDataToStorage } from "../utils/localStorage";
import PaginatedItems from "../components/PaginatedItem";
import Layout from "./Layout";

const Movie = () => {
  const [genreIds, setGenreIds] = useState([]);
  const dispatch = useDispatch();

  const { data: movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    const genreFromLS = getDataFromStorage("genres");
    if (genreFromLS) {
      setGenreIds(genreFromLS);
    }
  }, []);

  useEffect(() => {
    setDataToStorage("genres", genreIds);
  }, [genreIds]);

  const handleGenreChange = (genreId) => {
    const newGenres = genreIds.includes(genreId)
      ? genreIds.filter((id) => id !== genreId)
      : [...genreIds, genreId];
    dispatch(setGenres(newGenres));
    setGenreIds(newGenres);
  };

  useEffect(() => {
    if (genreIds.length > 0) {
      dispatch(fetchMoviesByGenres(genreIds));
    }
  }, [genreIds, dispatch]);

  return (
    <Layout>
      <div className="">
        <div className="text-stone-200 font-serif mt-8">
          <h2 className="font-semibold text-2xl font-serif mb-3">
            Select Genres
          </h2>

          {AVAILABLEGENRES.map((genre) => (
            <div
              key={genre.id}
              className="mb-4 text-lg flex items-center"
            >
              <label
                htmlFor={`genre-${genre.id}`}
                className="ml-2 cursor-pointer"
              >
                {genre.name}
              </label>
              <input
                id={`genre-${genre.id}`}
                type="checkbox"
                value={genre.id}
                onChange={() => handleGenreChange(genre.id)}
                checked={genreIds.includes(genre.id)}
                
                className="cursor-pointer h-6 w-6 ml-2"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-stone-300">
          <h2 className="mb-6 text-center text-lg font-semibold">
            Recommended Movies
          </h2>
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Error: {error}</p>}
          {status === "succeeded" && (
            <PaginatedItems
              items={movies}
              itemsPerPage={4}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Movie;
