import { render, screen } from "@testing-library/react";
import GameImage from "./GameImage";
import "@testing-library/jest-dom";

describe("GameImage", () => {
  it("renders the image with correct alt text", () => {
    render(<GameImage src="/game-images/test.webp" alt="Test Game" />);
    const img = screen.getByAltText("Test Game");
    expect(img).toBeInTheDocument();
  });
});
