import { render, screen, fireEvent } from "@testing-library/react";
import PaginationButton from "./PaginationButton";
import "@testing-library/jest-dom";

describe("PaginationButton", () => {
  it("renderiza el texto y llama a onClick", () => {
    const onClick = jest.fn();
    render(
      <PaginationButton loading={false} onClick={onClick}>
        Ver más
      </PaginationButton>
    );
    const button = screen.getByRole("button", { name: /ver más/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
