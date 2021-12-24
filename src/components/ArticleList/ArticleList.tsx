import { useContext } from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { useTranslation } from "react-i18next";

import ArticleCard from "../ArticleCard/ArticleCard";
import { useArticles } from "../../hooks/useArticles";
import { styles } from "./styles";
import { Category } from "../../types";
import { AppStateContext } from "../../hooks/useAppState";
import Head from "../Head/Head";

const ArticleList = () => {
  const { t } = useTranslation();

  const { categories, isLoading } = useArticles();

  const { appState } = useContext(AppStateContext);

  const articles = isLoading
    ? Array(8)
        .fill(null)
        .map((item, index) => (
          <Skeleton variant="rectangular" height={160} key={index} />
        ))
    : categories?.map((category: Category) => {
        return category.categoryArticles.articles
          .filter((article) => {
            return article.name
              .toLowerCase()
              .includes(appState.searchKeyword.toLowerCase());
          })
          .map((article) => {
            return (
              <ArticleCard
                article={article}
                key={`${article.name} ${article.variantName}`}
              />
            );
          });
      });

  return (
    <>
      <Head title={t("Titles.articleList")} />

      <Box sx={styles.Articles}>{articles}</Box>
    </>
  );
};

export default ArticleList;
