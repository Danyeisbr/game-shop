import { render, screen, fireEvent } from "@testing-library/react";
import { TRY_AGAIN } from "@/constants/resources";
import CatalogError from "./CatalogError";
import "@testing-library/jest-dom";

describe("CatalogError", () => {
  it("renders error message and try again button", () => {
    render(<CatalogError message="Error occurred" onRetry={jest.fn()} />);
    expect(screen.getByText("Error occurred")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: TRY_AGAIN })).toBeInTheDocument();
  });

  it("calls onRetry when button is clicked", () => {
    const onRetry = jest.fn();
    render(<CatalogError message="Error occurred" onRetry={onRetry} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onRetry).toHaveBeenCalled();
  });
});
