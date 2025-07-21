"use client";

import LoadingSpinner from "../components/LoadingSpinner";
import { gameService } from "../services/gameService";
import GenreFilter from "../components/GenreFilter";
import GameCard from "../components/GameCard";
import { useState, useEffect } from "react";
import type { Game } from "../types/game";

export default function SimpleCatalog() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadGames = async (genre: string, page: number, reset = false) => {
    try {
      setLoading(true);
      setError(null);

      const response = await gameService.getGames(genre, page);

      if (reset || page === 1) {
        setGames(response.games);
      } else {
        setGames((prev) => [...prev, ...response.games]);
      }

      setHasMore(response.hasMore);
    } catch (error) {
      console.error("Error loading games:", error);
      setError("Failed to load games. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGames("All", 1, true);
  }, []);

  const handleGenreChange = async (genre: string) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
    await loadGames(genre, 1, true);
  };

  const handleSeeMore = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    await loadGames(selectedGenre, nextPage, false);
  };

  const handleRetry = () => {
    loadGames(selectedGenre, 1, true);
  };

  if (loading && games.length === 0) {
    return <LoadingSpinner />;
  }

  if (error && games.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={handleRetry}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Top Sellers</h1>
        <GenreFilter
          selectedGenre={selectedGenre}
          onGenreChange={handleGenreChange}
        />
      </div>

      {games.length === 0 && !loading ? (
        <div className="text-center py-8">
          <p className="text-gray-500">
            No games found for the selected genre.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {hasMore && (
            <div>
              <button
                onClick={handleSeeMore}
                disabled={loading}
                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Loading..." : "SEE MORE"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
