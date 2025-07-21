export interface Game {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  genre: string;
  isNew: boolean;
}

export interface GamesResponse {
  games: Game[];
  hasMore: boolean;
  total: number;
}
