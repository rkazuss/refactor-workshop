import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

test("should render a product item with data from props", () => {
  render(<Product name="some product" price="88.88" />);
  expect(screen.getByTestId("product_thumbnail")).toBeInTheDocument();
  expect(screen.getByTestId("product_name")).toBeInTheDocument();
  expect(screen.getByTestId("product_price")).toBeInTheDocument();
  expect(screen.getByText("some product")).toBeInTheDocument();
  expect(screen.getByText("88.88")).toBeInTheDocument();
});
