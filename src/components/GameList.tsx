"use client";

import { CATALOG_TITLE, NO_GAMES_FOUND } from "@/constants/resources";
import { useGameCatalog } from "@/hooks/useGameCatalog";
import CatalogPagination from "./CatalogPagination";
import LoadingSpinner from "./LoadingSpinner";
import CatalogHeader from "./CatalogHeader";
import CatalogError from "./CatalogError";
import EmptyCatalog from "./EmptyCatalog";
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
