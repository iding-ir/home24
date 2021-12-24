import { useState, useEffect, createContext } from "react";

import { Category } from "../types";

interface IArticlesContext {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<never[]>>;
}

export const ArticlesContext = createContext<IArticlesContext>({
  categories: [],
  setCategories: () => {},
});

export const useArticles = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(
      JSON.stringify({
        query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
      })
    );

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);

        setCategories(response.data.categories);
      }
    };
  }, []);

  return { categories, setCategories };
};
