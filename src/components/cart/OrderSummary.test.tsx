import { render, screen } from "@testing-library/react";
import OrderSummary from "./OrderSummary";
import {
  ORDER_SUMMARY,
  ORDER_TOTAL,
  CHECKOUT,
  CART_ITEMS,
} from "@/constants/resources";
import "@testing-library/jest-dom";

describe("OrderSummary", () => {
  const items = [
    {
      id: "1",
      name: "Game 1",
      price: 10,
      description: "",
      image: "",
      genre: "",
      isNew: false,
    },
    {
      id: "2",
      name: "Game 2",
      price: 20,
      description: "",
      image: "",
      genre: "",
      isNew: false,
    },
  ];
  const total = 30;

  it("renders order summary with items and total", () => {
    render(<OrderSummary items={items} total={total} />);
    expect(screen.getByText(ORDER_SUMMARY)).toBeInTheDocument();
    expect(
      screen.getByText(`${items.length} ${CART_ITEMS}`)
    ).toBeInTheDocument();
    expect(screen.getByText(items[0].name)).toBeInTheDocument();
    expect(screen.getByText(items[1].name)).toBeInTheDocument();
    expect(
      screen.getByText(`$${items[0].price.toFixed(2)}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`$${items[1].price.toFixed(2)}`)
    ).toBeInTheDocument();
    expect(screen.getByText(ORDER_TOTAL)).toBeInTheDocument();
    expect(screen.getByText(`$${total.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: CHECKOUT })).toBeInTheDocument();
  });
});
