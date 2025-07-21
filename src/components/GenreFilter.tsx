"use client";

import { gameService } from "../services/gameService";
import { useMemo } from "react";

interface GenreFilterProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

export default function GenreFilter({
  selectedGenre,
  onGenreChange,
}: GenreFilterProps) {
  const genres = useMemo(() => gameService.getAvailableGenres(), []);

  return (
    <div className="flex items-center space-x-2">
      <label
        htmlFor="genre-select"
        className="text-sm font-medium text-gray-700"
      >
        Genre:
      </label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}
