import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import "../../localization";
import Layout from "../Layout/Layout";
import ArticleList from "../ArticleList/ArticleList";
import Providers from "../Providers/Providers";

const App = () => {
  return (
    <Providers>
      <CssBaseline />

      <Layout>
        <ArticleList />
      </Layout>
    </Providers>
  );
};

export default App;
