import { render, screen, fireEvent } from "@testing-library/react";
import GenreFilter from "./GenreFilter";
import "@testing-library/jest-dom";

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ availableFilters: ["Action", "RPG"] }),
    })
  ) as jest.Mock;
});

afterAll(() => {
  jest.resetAllMocks();
});

describe("GenreFilter", () => {
  it("renders the genre label and select", () => {
    render(<GenreFilter selectedGenre="All" onGenreChange={jest.fn()} />);
    expect(screen.getByLabelText(/genre/i)).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("calls onGenreChange when a new genre is selected", async () => {
    const onGenreChange = jest.fn();
    render(<GenreFilter selectedGenre="All" onGenreChange={onGenreChange} />);
    const select = await screen.findByRole("combobox");
    fireEvent.change(select, { target: { value: "Action" } });
    expect(onGenreChange).toHaveBeenCalledWith("Action");
  });
});
