import { render, screen } from "@testing-library/react";
import { CATALOG_TITLE } from "@/constants/resources";
import CatalogHeader from "./CatalogHeader";
import "@testing-library/jest-dom";
import { gameService } from "@/services/gameService";

describe("CatalogHeader", () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ["All", "Action"],
    }) as never;

    jest.spyOn(gameService, "getGames").mockResolvedValue({
      games: [
        {
          id: "1",
          name: "Game 1",
          price: 10,
          description: "",
          image: "",
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
    // Limpia el mock de fetch
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    delete global.fetch;
  });

  it("renders the catalog title and genre filter", async () => {
    render(
      <CatalogHeader
        title={CATALOG_TITLE}
        selectedGenre="All"
        onGenreChange={jest.fn()}
      />
    );
    expect(screen.getByText(CATALOG_TITLE)).toBeInTheDocument();
    expect(await screen.findByRole("combobox")).toBeInTheDocument();
  });
});
