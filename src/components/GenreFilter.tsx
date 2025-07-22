"use client";

import { GENRE_LABEL } from "@/constants/texts";
import type { GenreFilterProps } from "@/types";
import { useGenres } from "@/hooks/useGenres";
import GenreSelect from "./GenreSelect";

export default function GenreFilter({
  selectedGenre,
  onGenreChange,
}: GenreFilterProps) {
  const genres = useGenres();

  return (
    <div className="flex items-center space-x-2">
      <label
        htmlFor="genre-select"
        className="text-sm font-medium text-gray-700"
      >
        {GENRE_LABEL}
      </label>
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onChange={onGenreChange}
      />
    </div>
  );
}
