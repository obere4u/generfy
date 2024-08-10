import React from "react";

const Genre = ({ id, genre, genreIds, handleGenreChange }) => {
  return (
    <div className="mb-4 text-lg flex items-center w-full">
      <label
        htmlFor={`genre-${genre.id}`}
        className="md:mr-1 cursor-pointer md:w-fit w-full"
      >
        {genre.name}
      </label>
      <input
        id={`genre-${genre.id}`}
        type="checkbox"
        value={genre.id}
        onChange={() => handleGenreChange(genre.id)}
        checked={genreIds.includes(genre.id)}
        aria-checked={genreIds.includes(genre.id)}
        aria-labelledby={`genre-${genre.id}`}
        className="cursor-pointer h-6 w-6 ml-1"
      />
    </div>
  );
};

export default Genre;
