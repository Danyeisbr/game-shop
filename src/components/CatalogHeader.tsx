import { CATALOG_TITLE } from "@/constants/texts";
import type { CatalogHeaderProps } from "@/types";
import GenreFilter from "./GenreFilter";

export default function CatalogHeader({
  title = CATALOG_TITLE,
  selectedGenre,
  onGenreChange,
}: CatalogHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <GenreFilter
        selectedGenre={selectedGenre}
        onGenreChange={onGenreChange}
      />
    </div>
  );
}
