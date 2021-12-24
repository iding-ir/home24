import React, { useContext } from "react";

import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticleList.css";
import { ArticlesContext } from "../../hooks/useArticles";

const ArticleList = () => {
  const { categories } = useContext(ArticlesContext);

  const articles = categories.map((category) => {
    return category.categoryArticles.articles.map((article) => {
      return <ArticleCard article={article} />;
    });
  });

  return (
    <>
      {categories.length ? (
        <h1>
          {categories[0].name}
          <small> ({categories[0].articleCount})</small>
        </h1>
      ) : (
        "Loading..."
      )}

      <div className={"articles"}>{articles}</div>
    </>
  );
};

export default ArticleList;
