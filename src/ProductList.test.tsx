import React from "react";
import { render } from "@testing-library/react";
import ArticleList from "./components/ArticleList/ArticleList";

test("renders the ArticleList", () => {
  const { getByText } = render(<ArticleList />);
  const linkElement = getByText(/home24/i);
  expect(linkElement).toBeInTheDocument();
});
