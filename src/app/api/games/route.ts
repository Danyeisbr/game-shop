import { allGames, availableFilters, delay } from "@/utils/endpoint";
import { Game } from "@/types";

const ITEMS_PER_PAGE = 12;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genre: string | null = searchParams.get("genre");
  let page: number = parseInt(searchParams.get("page") ?? "1");

  let games: Game[] = allGames;

  if (genre) {
    games = games.filter(
      (game) => game.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  if (page < 1 || isNaN(page)) page = 1;

  await delay(1000);

  const fromIndex: number = (page - 1) * ITEMS_PER_PAGE;
  const toIndex: number = page * ITEMS_PER_PAGE;
  games = games.slice(fromIndex, toIndex);

  const totalPages: number = Math.ceil(allGames.length / ITEMS_PER_PAGE);
  const currentPage: number = page;

  return Response.json({ games, availableFilters, totalPages, currentPage });
}
