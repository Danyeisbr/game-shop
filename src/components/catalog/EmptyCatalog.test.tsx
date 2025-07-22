import { render, screen } from "@testing-library/react";
import EmptyCatalog from "./EmptyCatalog";
import "@testing-library/jest-dom";

describe("EmptyCatalog", () => {
  it("renders the empty catalog message", () => {
    render(<EmptyCatalog message="No games found" />);
    expect(screen.getByText("No games found")).toBeInTheDocument();
  });
});
