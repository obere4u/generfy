import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByGenres } from "../redux/actions";
import { AVAILABLEGENRES } from "../constants";
import { getDataFromStorage, setDataToStorage } from "../utils/localStorage";
import PaginatedItems from "../components/PaginatedItem";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import Genre from "../components/Genre";
import { clearMovies } from "../redux/reducers";

const Movie = () => {
  const [genreIds, setGenreIds] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const {
    data: movies,
    status,
    error,
    totalPages,
  } = useSelector((state) => state.allMovies);  

  useEffect(() => {
    const genreFromLS = getDataFromStorage("genres");
    if (genreFromLS && genreFromLS.length > 0) {
      setGenreIds(genreFromLS);
    }
  }, []);

  useEffect(() => {
    if (genreIds.length > 0) {
      setDataToStorage("genres", genreIds);
      dispatch(fetchMoviesByGenres({ selectedGenres: genreIds, page }));
    } else {
      dispatch(clearMovies());
    }
  }, [genreIds, page, dispatch]);

  const handleGenreChange = (genreId) => {
    const newGenres = genreIds.includes(genreId)
      ? genreIds.filter((id) => id !== genreId)
      : [...genreIds, genreId];

    setGenreIds(newGenres);
    setDataToStorage("genres", newGenres);

    if (newGenres.length === 0) {
      dispatch(clearMovies());
    } else {
      setPage(1);
    }
  };

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div>
      <div className="w-fit text-stone-200 font-serif">
        <h2 className="font-semibold text-2xl font-serif mb-6">
          Select Genres
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-10 gap-2">
          {AVAILABLEGENRES.map((genre) => (
            <Genre
              key={genre.id}
              id={genre.id}
              genre={genre}
              genreIds={genreIds}
              handleGenreChange={handleGenreChange}
            />
          ))}
        </div>
      </div>
      <div className="mt-8 text-stone-300">
        <h2 className="mb-6 text-center text-lg font-semibold">
          Recommended Movies
        </h2>
        {status === "loading" && <MovieCardSkeleton count={4} />}
        {status === "failed" && <p>Error: {error}</p>}
        {movies && (
          <PaginatedItems
            page={page}
            items={movies}
            itemsPerPage={20}
            currentPage={page}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default Movie;
