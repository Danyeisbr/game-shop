import { render, screen, fireEvent } from "@testing-library/react";
import GameGrid from "./GameGrid";
import type { Game } from "@/types";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
  }),
  useSearchParams: () => ({
    get: (key: string) => {
      if (key === "genre") return "All";
      if (key === "page") return "1";
      return null;
    },
  }),
}));

describe("GameGrid", () => {
  const games: Game[] = [
    {
      id: "1",
      name: "Game 1",
      price: 10,
      description: "",
      image: "/game-images/test.webp",
      genre: "Action",
      isNew: false,
    },
    {
      id: "2",
      name: "Game 2",
      price: 20,
      description: "",
      image: "/game-images/test.webp",
      genre: "RPG",
      isNew: true,
    },
  ];

  it("renders a grid of game cards", () => {
    render(<GameGrid games={games} />);
    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
  });
});
