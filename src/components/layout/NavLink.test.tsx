import { render, screen } from "@testing-library/react";
import NavLink from "./NavLink";
import "@testing-library/jest-dom";

describe("NavLink", () => {
  it("renderiza un enlace con el texto y href correcto", () => {
    render(<NavLink href="/test">Ir a test</NavLink>);
    const link = screen.getByRole("link", { name: /ir a test/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });
});
