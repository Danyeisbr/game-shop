import { render, screen } from "@testing-library/react";
import NewBadge from "./NewBadge";
import "@testing-library/jest-dom";

describe("NewBadge", () => {
  it("renders the 'New' badge", () => {
    render(<NewBadge />);
    expect(screen.getByText(/new/i)).toBeInTheDocument();
  });
});
