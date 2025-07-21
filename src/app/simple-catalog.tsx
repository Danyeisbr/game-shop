"use client";

import { useSearchParams, useRouter } from "next/navigation";
import LoadingSpinner from "../components/LoadingSpinner";
import { useState, useEffect, useCallback } from "react";
import { gameService } from "../services/gameService";
import GenreFilter from "../components/GenreFilter";
import GameCard from "../components/GameCard";
import type { Game } from "../types/game";

export default function SimpleCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialGenre = searchParams.get("genre") || "All";
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  const updateUrl = useCallback(
    (genre: string, page: number) => {
      const params = new URLSearchParams();
      if (genre && genre !== "All") params.set("genre", genre);
      params.set("page", page.toString());
      router.replace(`?${params.toString()}`);
    },
    [router]
  );

  const loadGames = async (genre: string, page: number, reset = false) => {
    try {
      setLoading(true);
      setError(null);
      if (reset) setGames([]);
      const response = await gameService.getGames(genre, page);
      setGames(response.games);
      setHasMore(response.hasMore);
    } catch (error) {
      console.error("Error loading games:", error);
      setError("Failed to load games. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSelectedGenre(initialGenre);
    setCurrentPage(initialPage);
    loadGames(initialGenre, initialPage, true);
  }, [initialGenre, initialPage]);

  const handleGenreChange = async (genre: string) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
    updateUrl(genre, 1);
    await loadGames(genre, 1, true);
  };

  const handleSeeMore = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    updateUrl(selectedGenre, nextPage);
    await loadGames(selectedGenre, nextPage, true);
  };

  const handleRetry = () => {
    loadGames(selectedGenre, 1, true);
  };

  if (loading) {
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
            <div className="relative">
              <button
                onClick={handleSeeMore}
                disabled={loading}
                className="w-full md:w-auto bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "" : "SEE MORE"}
              </button>
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
                  <LoadingSpinner />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
