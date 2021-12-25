import { render } from "@testing-library/react";

import ArticleList from "./ArticleList";
import Providers from "../Providers/Providers";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

test("renders the ArticleList", () => {
  const { getByTestId } = render(
    <Providers>
      <ArticleList />
    </Providers>
  );

  const articlesElement = getByTestId("ARTICLES");

  expect(articlesElement).toBeInTheDocument();
});
