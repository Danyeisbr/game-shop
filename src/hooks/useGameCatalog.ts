import { useSearchParams, useRouter } from "next/navigation";
import type { Game, UseGameCatalogResult } from "@/types";
import { useState, useEffect, useCallback } from "react";
import { gameService } from "@/services/gameService";
import {
  ERROR_LOADING,
  DEFAULT_GENRE,
  PAGE_PARAM,
  GENRE_PARAM,
  INITIAL_PAGE,
  PRODUCTION_ENV,
} from "@/constants/resources";

export function useGameCatalog(): UseGameCatalogResult {
  const searchParams: URLSearchParams = useSearchParams();
  const router = useRouter();

  const initialGenre: string = searchParams.get(GENRE_PARAM) || DEFAULT_GENRE;
  const initialPage: number = parseInt(
    searchParams.get(PAGE_PARAM) || `${INITIAL_PAGE}`,
    10
  );

  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  const updateUrl = useCallback(
    (genre: string, page: number) => {
      const params: URLSearchParams = new URLSearchParams();
      if (genre && genre !== DEFAULT_GENRE) params.set(GENRE_PARAM, genre);
      params.set(PAGE_PARAM, page.toString());
      router.replace(`?${params.toString()}`);
    },
    [router]
  );

  const loadGames = async (genre: string, page: number, reset: boolean = false) => {
    try {
      setLoading(true);
      setError(null);
      if (reset) setGames([]);
      const response = await gameService.getGames(genre, page);
      setGames(response.games);
      setHasMore(response.hasMore);
    } catch (error) {
      if (process.env.NODE_ENV !== PRODUCTION_ENV) {
        console.error(error);
      }
      setError(ERROR_LOADING);
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
    setCurrentPage(INITIAL_PAGE);
    updateUrl(genre, INITIAL_PAGE);
    await loadGames(genre, INITIAL_PAGE, true);
  };

  const handleSeeMore = async () => {
    const nextPage: number = currentPage + 1;
    setCurrentPage(nextPage);
    updateUrl(selectedGenre, nextPage);
    await loadGames(selectedGenre, nextPage, true);
  };

  const handleRetry = () => {
    loadGames(selectedGenre, INITIAL_PAGE, true);
  };

  return {
    games,
    loading,
    error,
    selectedGenre,
    hasMore,
    handleGenreChange,
    handleSeeMore,
    handleRetry,
  };
}
