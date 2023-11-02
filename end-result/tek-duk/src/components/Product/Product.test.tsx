import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

test("should render a product item", () => {
  render(<Product />);
  expect(screen.getByTestId("product_title")).toBeInTheDocument();
  expect(screen.getByTestId("product_thumbnail")).toBeInTheDocument();
  expect(screen.getByTestId("product_price")).toBeInTheDocument();
});
