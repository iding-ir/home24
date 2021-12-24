import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";

import "../../localization";
import Layout from "../Layout/Layout";
import ArticleList from "../ArticleList/ArticleList";
import { useTheme, ThemeContext } from "../Theme/useTheme";
import { useAppState, AppStateContext } from "../../hooks/useAppState";

const queryClient = new QueryClient();

const App = () => {
  const themeValues = useTheme("light");
  const layoutValues = useAppState();

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AppStateContext.Provider value={layoutValues}>
        <ThemeContext.Provider value={themeValues}>
          <ThemeProvider theme={themeValues.theme}>
            <CssBaseline />

            <Layout>
              <ArticleList />
            </Layout>
          </ThemeProvider>
        </ThemeContext.Provider>
      </AppStateContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
