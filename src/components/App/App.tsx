import React from "react";

import Layout from "../Layout/Layout";
import ArticleList from "../ArticleList/ArticleList";
import { useArticles, ArticlesContext } from "../../hooks/useArticles";

const App = () => {
  const articlesValues = useArticles();

  return (
    <ArticlesContext.Provider value={articlesValues}>
      <Layout>
        <ArticleList />
      </Layout>
    </ArticlesContext.Provider>
  );
};

export default App;
