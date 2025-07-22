import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer", () => {
  it("renderiza el logo de la empresa", () => {
    render(<Footer />);
    expect(screen.getByLabelText(/logo/i)).toBeInTheDocument();
  });
});
