import { render, screen } from "@testing-library/react";
import GameInfo from "./GameInfo";
import type { Game } from "@/types";
import "@testing-library/jest-dom";

describe("GameInfo", () => {
  const game: Game = {
    id: "1",
    name: "Test Game",
    price: 15.5,
    description: "desc",
    image: "/game-images/test.webp",
    genre: "Action",
    isNew: false,
  };

  it("renders game name, genre, and price", () => {
    render(<GameInfo game={game} />);
    expect(screen.getByText(game.name)).toBeInTheDocument();
    expect(screen.getByText(game.genre)).toBeInTheDocument();
    expect(screen.getByText(`$${game.price.toFixed(2)}`)).toBeInTheDocument();
  });
});
