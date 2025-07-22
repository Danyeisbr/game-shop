import { render, screen, fireEvent } from "@testing-library/react";
import CatalogPagination from "./CatalogPagination";
import { SEE_MORE } from "@/constants/resources";
import "@testing-library/jest-dom";

describe("CatalogPagination", () => {
  it("renders the see more button when hasMore is true", () => {
    render(
      <CatalogPagination loading={false} hasMore={true} onSeeMore={jest.fn()} />
    );
    expect(screen.getByRole("button", { name: SEE_MORE })).toBeInTheDocument();
  });

  it("does not render when hasMore is false", () => {
    const { container } = render(
      <CatalogPagination
        loading={false}
        hasMore={false}
        onSeeMore={jest.fn()}
      />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("calls onSeeMore when button is clicked", () => {
    const onSeeMore = jest.fn();
    render(
      <CatalogPagination loading={false} hasMore={true} onSeeMore={onSeeMore} />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onSeeMore).toHaveBeenCalled();
  });
});
