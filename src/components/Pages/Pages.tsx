import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import ArticleList from "../ArticleList/ArticleList";
import NotFound from "../NotFound/NotFound";

const Pages = () => {
  return (
    <Layout>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<ArticleList />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Pages;
