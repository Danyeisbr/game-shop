"use client";

import CatalogPagination from "@/components/catalog/CatalogPagination";
import { CATALOG_TITLE, NO_GAMES_FOUND } from "@/constants/resources";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import CatalogHeader from "@/components/catalog/CatalogHeader";
import CatalogError from "@/components/catalog/CatalogError";
import EmptyCatalog from "@/components/catalog/EmptyCatalog";
import { useGameCatalog } from "@/hooks/useGameCatalog";
import GameGrid from "./GameGrid";

export default function GameList() {
  const {
    games,
    loading,
    error,
    selectedGenre,
    hasMore,
    handleGenreChange,
    handleSeeMore,
    handleRetry,
  } = useGameCatalog();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error && games.length === 0) {
    return <CatalogError message={error} onRetry={handleRetry} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CatalogHeader
        title={CATALOG_TITLE}
        selectedGenre={selectedGenre}
        onGenreChange={handleGenreChange}
      />

      {games.length === 0 && !loading ? (
        <EmptyCatalog message={NO_GAMES_FOUND} />
      ) : (
        <>
          <GameGrid games={games} />
          <CatalogPagination
            loading={loading}
            hasMore={hasMore}
            onSeeMore={handleSeeMore}
          />
        </>
      )}
    </div>
  );
}
