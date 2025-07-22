import { render, screen, fireEvent } from "@testing-library/react";
import type { Game } from "../../types";
import CartItem from "./CartItem";
import "@testing-library/jest-dom";

describe("CartItem", () => {
  const game: Game = {
    id: "1",
    name: "Test Game",
    price: 15.5,
    description: "desc",
    image: "/game-images/test.webp",
    genre: "Action",
    isNew: false,
  };

  it("renders game info and remove button", () => {
    render(<CartItem game={game} onRemove={jest.fn()} />);
    expect(screen.getByText(game.name)).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        return (
          element?.tagName.toLowerCase() === "p" &&
          element.className.includes("font-bold") &&
          element.textContent?.replace(/\s/g, "") === `$${game.price}`
        );
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onRemove when remove button is clicked", () => {
    const onRemove = jest.fn();
    render(<CartItem game={game} onRemove={onRemove} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onRemove).toHaveBeenCalledWith(game.id);
  });
});
