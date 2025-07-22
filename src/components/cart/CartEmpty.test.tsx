import { CONTINUE_SHOPPING, CART_EMPTY } from "@/constants/resources";
import { render, screen } from "@testing-library/react";
import CartEmpty from "./CartEmpty";
import "@testing-library/jest-dom";

describe("CartEmpty", () => {
  it("renders empty cart message and continue shopping link", () => {
    render(<CartEmpty />);
    expect(screen.getByText(CART_EMPTY)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: CONTINUE_SHOPPING })
    ).toBeInTheDocument();
  });
});
