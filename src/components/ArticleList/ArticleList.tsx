import React, { useState, useEffect } from "react";

import ArticleCard from "../ArticleCard/ArticleCard";
import { Category } from "../../types";
import "./ArticleList.css";

const ArticleList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

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

  const articles = categories.map((category) => {
    return category.categoryArticles.articles.map((article) => {
      return <ArticleCard article={article} />;
    });
  });

  return (
    <div className={"page"}>
      <div className={"header"}>
        <strong>home24</strong>
        <input placeholder={"Search"} />
      </div>

      <div className={"sidebar"}>
        <h3>Kategorien</h3>
        {categories.length ? (
          <ul>
            {categories[0].childrenCategories.map(({ name, urlPath }) => {
              return (
                <li>
                  <a href={`/${urlPath}`}>{name}</a>
                </li>
              );
            })}
          </ul>
        ) : (
          "Loading..."
        )}
      </div>

      <div className={"content"}>
        {categories.length ? (
          <h1>
            {categories[0].name}
            <small> ({categories[0].articleCount})</small>
          </h1>
        ) : (
          "Loading..."
        )}
        <div className={"articles"}>{articles}</div>
      </div>

      <div className={"footer"}>
        Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
        Versandkosten.
      </div>
    </div>
  );
};

export default ArticleList;
