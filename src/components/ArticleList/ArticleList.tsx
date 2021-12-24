import React from "react";
import Box from "@mui/material/Box";

import ArticleCard from "../ArticleCard/ArticleCard";
import { useArticles } from "../../hooks/useArticles";
import { styles } from "./styles";
import { Category } from "../../types";

const ArticleList = () => {
  const { categories } = useArticles();

  const articles = categories?.map((category: Category) => {
    return category.categoryArticles.articles.map((article) => {
      return (
        <ArticleCard
          article={article}
          key={`${article.name} ${article.variantName}`}
        />
      );
    });
  });

  return <Box sx={styles.Articles}>{articles}</Box>;
};

export default ArticleList;
