import { render } from "@testing-library/react";

import ArticleCard from "./ArticleCard";
import { Article } from "../../types";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const article = {
  name: "Freischwinger Holm (2er-Set)",
  variantName: "Buche",
  prices: {
    currency: "EUR",
    regular: {
      value: 24999,
    },
  },
  images: [
    {
      path: "https://cdn1.home24.net/images/media/catalog/product/200x200/jpg/-/1/-1000059372-10-IMAGE-P000000001000059372.webp",
    },
  ],
} as Article;

test("renders the ArticleCard", () => {
  const { getByTestId } = render(<ArticleCard article={article} />);

  const articleCardElement = getByTestId("CARD");

  expect(articleCardElement).toBeInTheDocument();
  expect(articleCardElement).toHaveTextContent("Freischwinger Holm (2er-Set)");
  expect(articleCardElement).toHaveTextContent("249,99 €");
});
