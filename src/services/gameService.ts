import { GamesResponse } from "@/types";
import { API_URL } from "../config/api";
import {
  DEFAULT_GENRE,
  ERROR_FETCH_GAMES,
  ERROR_FETCH_GENRES,
  GENRE_PARAM,
  PAGE_PARAM,
  ERROR_CONTEXT_LOADING_GAMES,
  ERROR_CONTEXT_LOADING_GENRES,
  PRODUCTION_ENV,
} from "@/constants/resources";

class GameService {
  async getGames(
    genre: string = DEFAULT_GENRE,
    page: number = 1
  ): Promise<GamesResponse> {
    try {
      const params: URLSearchParams = new URLSearchParams();
      if (genre && genre !== DEFAULT_GENRE) params.append(GENRE_PARAM, genre);
      params.append(PAGE_PARAM, page.toString());
      const url: string = `${API_URL}/games?${params.toString()}`;
      const res: Response = await fetch(url);
      if (!res.ok) throw new Error(ERROR_FETCH_GAMES);
      const data = await res.json();
      return {
        games: data.games,
        hasMore:
          data.currentPage &&
          data.totalPages &&
          data.currentPage < data.totalPages,
        total: data.games.length,
        totalPages: data.totalPages,
        currentPage: data.currentPage || 1,
      };
    } catch (error) {
      this.logError(ERROR_CONTEXT_LOADING_GAMES, error);
      return {
        games: [],
        hasMore: false,
        total: 0,
      };
    }
  }

  async getAvailableGenres(): Promise<string[]> {
    try {
      const url: string = `${API_URL}/games`;
      const res: Response = await fetch(url);
      if (!res.ok) throw new Error(ERROR_FETCH_GENRES);
      const data: { availableFilters: string[] } = await res.json();
      return [DEFAULT_GENRE, ...data.availableFilters];
    } catch (error) {
      this.logError(ERROR_CONTEXT_LOADING_GENRES, error);
      return [DEFAULT_GENRE];
    }
  }

  private logError(context: string, error: unknown) {
    if (process.env.NODE_ENV !== PRODUCTION_ENV) {
      console.error(`Error ${context}:`, error);
    }
  }
}

export const gameService = new GameService();
