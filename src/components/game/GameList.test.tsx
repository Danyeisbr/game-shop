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

import { render, screen } from "@testing-library/react";
import { gameService } from "@/services/gameService";
import GameList from "./GameList";
import "@testing-library/jest-dom";

describe("GameList", () => {
  beforeAll(() => {
    jest.spyOn(gameService, "getGames").mockResolvedValue({
      games: [
        {
          id: "1",
          name: "Game 1",
          price: 10,
          description: "",
          image: "/game-images/test.webp",
          genre: "Action",
          isNew: false,
        },
      ],
      hasMore: false,
      total: 1,
    });
    jest
      .spyOn(gameService, "getAvailableGenres")
      .mockResolvedValue(["All", "Action"]);
  });

  afterAll(() => {
    jest.restoreAllMocks();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    delete global.fetch;
  });

  it("renders the game list and game card", async () => {
    render(<GameList />);
    expect(await screen.findByText("Game 1")).toBeInTheDocument();
  });
});
