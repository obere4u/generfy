import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
      <h2 className="font-semibold text-2xl my-6">{movie.title}</h2>
      <div className="md:flex md:space-x-8 items-start h-fit">
        {movie.poster_path && (
          <div className="h-full">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt={movie.title}
              className="h-[400px] md:w-[400px] w-full mb-4 md:mb-0"
            />
          </div>
        )}

        <div className="flex flex-col space-y-4">
          {/* write up */}
          <div className="mt-4 mb-6 md:mt-0 w-[500px]">
            <p className=" text-stone-100">
              <span className="text-lg text-neutral-400 capitalize">
                status:
              </span>{" "}
              {movie.status}
            </p>
            <p className=" text-stone-100">
              <span className="text-lg text-neutral-400 capitalize">
                original title:
              </span>{" "}
              {movie.original_title}
            </p>
            <p className=" text-stone-100">
              <span className="text-lg text-neutral-400 capitalize">
                runtime:
              </span>{" "}
              {movie.runtime}
            </p>
            <p className=" text-stone-100">
              <span className="text-lg text-neutral-400 capitalize">
                Rating:
              </span>{" "}
              {movie.vote_average}
            </p>
            <p className=" text-stone-100">
              <span className="text-lg text-neutral-400 capitalize">
                language:
              </span>{" "}
              {movie.spoken_languages
                .map((language) => language.name)
                .join(", ")}
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
              <span className="text-lg text-neutral-400 capitalize">
                Popularity:
              </span>{" "}
              {movie.popularity}
            </p>
            <p className="mt-2 text-stone-100">
              <span className="text-lg text-neutral-400 capitalize">
                Genre:
              </span>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
              <p className="mt-4 text-stone-100">
                <span className="text-lg text-neutral-400 capitalize">
                  Desc:
                </span>{" "}
                {movie.overview}
              </p>
            </p>
          </div>

            <Link
              to={"/"}
              className="p-4 px-6 mx-auto md:mx-0 bg-blue-700 text-neutral-200 w-fit rounded-lg shadow shadow-neutral-50 hover:bg-opacity-75 transition-colors duration-150 ease-in-out"
            >
          <p className="cursor-pointer w-full h-full">
              back to home
          </p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
