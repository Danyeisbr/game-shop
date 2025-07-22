import { GamesResponse } from "@/types";
import { API_URL } from "../config/api";

class GameService {
  private itemsPerPage = 12;

  async getGames(genre = "All", page = 1): Promise<GamesResponse> {
    try {
      const params = new URLSearchParams();
      if (genre && genre !== "All") params.append("genre", genre);
      params.append("page", page.toString());
      const url = `${API_URL}/games?${params.toString()}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch games");
      const data = await res.json();
      return {
        games: data.games,
        hasMore: data.currentPage < data.totalPages,
        total: data.games.length,
        totalPages: data.totalPages,
        currentPage: data.currentPage,
      };
    } catch (error) {
      console.error("Error loading games from API:", error);
      return {
        games: [],
        hasMore: false,
        total: 0,
      };
    }
  }

  async getAvailableGenres(): Promise<string[]> {
    try {
      const url = `${API_URL}/games`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch genres");
      const data = await res.json();
      return ["All", ...data.availableFilters];
    } catch (error) {
      console.error("Error loading genres from API:", error);
      return ["All"];
    }
  }
}

export const gameService = new GameService();
