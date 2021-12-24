import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

import Layout from "../Layout/Layout";
import ArticleList from "../ArticleList/ArticleList";
import NotFound from "../NotFound/NotFound";
import { styles } from "./styles";

const Pages = () => {
  return (
    <Layout>
      <CssBaseline />

      <Box sx={styles.Page}>
        <Routes>
          <Route path="/" element={<ArticleList />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Layout>
  );
};

export default Pages;
