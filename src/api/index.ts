import axios from "axios";
import { Category } from "../types";

export const getCategories = async () => {
  const response = await axios("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
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
    }),
  });

  return response.data.data.categories as Category[];
};
