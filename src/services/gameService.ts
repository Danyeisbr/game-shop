import { allGames, availableFilters, delay } from "../utils/endpoint";
import type { GamesResponse } from "../types/game";

class GameService {
  private itemsPerPage = 9;

  async getGames(genre = "All", page = 1): Promise<GamesResponse> {
    try {
      console.log("Loading games from mock data:", { genre, page });

      await delay(500);

      let filteredGames = allGames;
      if (genre !== "All") {
        filteredGames = allGames.filter(
          (game) => game.genre.toLowerCase() === genre.toLowerCase()
        );
      }

      const startIndex = (page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      const paginatedGames = filteredGames.slice(startIndex, endIndex);

      const response = {
        games: paginatedGames,
        hasMore: endIndex < filteredGames.length,
        total: filteredGames.length,
      };

      console.log("Mock API Response:", {
        gamesCount: response.games.length,
        hasMore: response.hasMore,
        total: response.total,
      });

      return response;
    } catch (error) {
      console.error("Error loading games from mock:", error);

      return {
        games: [],
        hasMore: false,
        total: 0,
      };
    }
  }

  getAvailableGenres(): string[] {
    return ["All", ...availableFilters];
  }
}

export const gameService = new GameService();
