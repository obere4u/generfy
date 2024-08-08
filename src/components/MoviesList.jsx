import React from "react";
import MoviesCard from "./MoviesCard"; // Adjust the import path as necessary

const MoviesList = ({ list }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {list.map((movie) => (
        <MoviesCard
          key={movie.id}
          image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          title={movie.title}
          description={movie.overview}
          date={movie.release_date}
        />
      ))}
    </div>
  );
};

export default MoviesList;
