import { render, screen } from "@testing-library/react";
import LoadingOverlay from "./LoadingOverlay";
import "@testing-library/jest-dom";

describe("LoadingOverlay", () => {
  it("renderiza el overlay y el spinner", () => {
    render(<LoadingOverlay />);
    expect(screen.getByTestId("loading-overlay")).toBeInTheDocument();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
