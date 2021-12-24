import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import ArticleCard from "../ArticleCard/ArticleCard";
import { useArticles } from "../../hooks/useArticles";
import { styles } from "./styles";
import { Category } from "../../types";

const ArticleList = () => {
  const { categories, isLoading } = useArticles();

  const articles = isLoading
    ? Array(8)
        .fill(null)
        .map((item, index) => (
          <Skeleton variant="rectangular" height={160} key={index} />
        ))
    : categories?.map((category: Category) => {
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
