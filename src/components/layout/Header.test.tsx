import { render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renderiza el nombre de la app", () => {
    render(<Header />);
    expect(screen.getByText(/gamer|shop/i)).toBeInTheDocument();
  });

  it("tiene enlaces de navegación", () => {
    render(<Header />);
    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
  });
});
