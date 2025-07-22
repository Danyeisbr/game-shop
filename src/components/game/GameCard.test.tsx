import { render, screen, fireEvent } from "@testing-library/react";
import GameCard from "./GameCard";
import type { Game } from "@/types";
import "@testing-library/jest-dom";

describe("GameCard", () => {
  const game: Game = {
    id: "1",
    name: "Test Game",
    price: 15.5,
    description: "desc",
    image: "/game-images/test.webp",
    genre: "Action",
    isNew: true,
  };

  it("renders game info and add to cart button", () => {
    render(<GameCard game={game} />);
    expect(screen.getByText(game.name)).toBeInTheDocument();
    expect(screen.getByText(game.genre)).toBeInTheDocument();
    expect(screen.getByText("ADD TO CART")).toBeInTheDocument();
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("toggles add/remove to cart on button click", () => {
    render(<GameCard game={game} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toHaveTextContent(/remove/i);
    fireEvent.click(button);
    expect(button).toHaveTextContent(/add to cart/i);
  });
});
