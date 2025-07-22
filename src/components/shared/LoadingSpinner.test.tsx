import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";
import "@testing-library/jest-dom";

describe("LoadingSpinner", () => {
  it("renderiza el spinner SVG", () => {
    render(<LoadingSpinner />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
