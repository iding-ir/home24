import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "../../localization";
import Layout from "../Layout/Layout";
import ArticleList from "../ArticleList/ArticleList";
import { useTheme, ThemeContext } from "../Theme/useTheme";
import { useArticles, ArticlesContext } from "../../hooks/useArticles";
import { useLayout, LayoutContext } from "../../hooks/useLayout";

const App = () => {
  const themeValues = useTheme();
  const articlesValues = useArticles();
  const layoutValues = useLayout();

  return (
    <ArticlesContext.Provider value={articlesValues}>
      <LayoutContext.Provider value={layoutValues}>
        <ThemeContext.Provider value={themeValues}>
          <ThemeProvider theme={themeValues.theme}>
            <CssBaseline />

            <Layout>
              <ArticleList />
            </Layout>
          </ThemeProvider>
        </ThemeContext.Provider>
      </LayoutContext.Provider>
    </ArticlesContext.Provider>
  );
};

export default App;
