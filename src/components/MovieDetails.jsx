import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById } from "../redux/actions";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    data: movie,
    status,
    error,
  } = useSelector((state) => state.movieById);

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [id, dispatch]);

  if (status === "loading") {
    return (
      <p className="h-calc-100vh-96px text-2xl flex items-center justify-center text-neutral-400 animate-pulse">
        Loading...
      </p>
    );
  }

  if (status === "failed")
    return (
      <p className="h-calc-100vh-96px text-2xl flex items-center justify-center text-neutral-400 animate-pulse">
        Error: {error}
      </p>
    );
  if (!movie) return <p>No movie found</p>;

  return (
    <div className="text-stone-200 font-serif pb-8 max-w-[1000px] mx-auto">
      <h2 className="font-semibold text-2xl mb-3">{movie.title}</h2>
      <div className="md:flex md:space-x-8 items-start ">
        {movie.poster_path && (
          <div className=" ">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
              className="h-[400px] w-[400px]"
            />
          </div>
        )}
        {/* write up */}
        <div className="w-[500px]">
          <p className=" text-stone-100">
            <span className="text-lg text-neutral-400 capitalize">status:</span>{" "}
            {movie.status}
          </p>
          <p className="mt-4 text-stone-100">
            <span className="text-lg text-neutral-400 capitalize">
              language:
            </span>{" "}
            {movie.spoken_languages.map((language) => language.name).join(", ")}
          </p>

          <p className="mt-2 text-stone-100">
            <span className="text-lg text-neutral-400 capitalize">
              Release Date:
            </span>{" "}
            {movie.release_date}
          </p>
          <p className="mt-2 text-stone-100">
            <span className="text-lg text-neutral-400 capitalize">
              Tagline:
            </span>{" "}
            {movie.tagline}
          </p>
          <p className="mt-2 text-stone-100">
            <span className="text-lg text-neutral-400 capitalize">Genre:</span>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
            <p className="mt-4 text-stone-100">
              <span className="text-lg text-neutral-400 capitalize">Desc:</span>{" "}
              {movie.overview}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
