import type { GenreSelectProps } from "@/types";

export default function GenreSelect({
  genres,
  selectedGenre,
  onChange,
  id = "genre-select",
  className = "",
}: GenreSelectProps) {
  return (
    <select
      id={id}
      value={selectedGenre}
      onChange={(e) => onChange(e.target.value)}
      className={`border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${className}`}
    >
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}
