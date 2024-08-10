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
    console.log("Genre or page changed:", genreIds, page);
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
      console.log("Resetting page to 1");
      setPage(1);
    }
  };

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };


  const handleRetry = () => {
    if (genreIds.length > 0) {
      dispatch(fetchMoviesByGenres({ selectedGenres: genreIds, page }));
    }
  };

  return (
    <div>
      <div className="w-full text-stone-200 font-serif">
        <h2 className="font-semibold text-2xl font-serif mb-6">
          Select Genres
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2">
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
        {status === "failed" && (
          <div
            className="flex flex-col items-center justify-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <div className="flex flex-col items-center">
              <strong className="font-bold mr-8">Error!!!:</strong>
              <span className="block sm:inline">
                {error.status_message ||
                  "Something went wrong. Please try again later."}
              </span>
            </div>
            <button
              className="bg-neutral-800 text-neutral-200 rounded-md mt-8 font-semibold shadow-md hover:bg-opacity-90 transition-colors duration-150 ease-in-out px-4 py-3"
              onClick={handleRetry}
            >
              Retry
            </button>
          </div>
        )}

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
