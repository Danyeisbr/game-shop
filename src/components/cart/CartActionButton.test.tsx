import { ADD_TO_CART, REMOVE_FROM_CART } from "@/constants/resources";
import { render, screen, fireEvent } from "@testing-library/react";
import CartActionButton from "./CartActionButton";
import "@testing-library/jest-dom";

describe("CartActionButton", () => {
  it("renders 'ADD TO CART' when isInCart is false", () => {
    render(<CartActionButton isInCart={false} onClick={jest.fn()} />);
    expect(screen.getByText(ADD_TO_CART)).toBeInTheDocument();
  });

  it("renders 'REMOVE' when isInCart is true", () => {
    render(<CartActionButton isInCart={true} onClick={jest.fn()} />);
    expect(screen.getByText(REMOVE_FROM_CART)).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    render(<CartActionButton isInCart={false} onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
