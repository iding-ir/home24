import React, { useContext } from "react";
import Box from "@mui/material/Box";

import ArticleCard from "../ArticleCard/ArticleCard";
import { ArticlesContext } from "../../hooks/useArticles";
import { styles } from "./styles";

const ArticleList = () => {
  const { categories } = useContext(ArticlesContext);

  const articles = categories.map((category) => {
    return category.categoryArticles.articles.map((article) => {
      return <ArticleCard article={article} />;
    });
  });

  return <Box sx={styles.Articles}>{articles}</Box>;
};

export default ArticleList;
