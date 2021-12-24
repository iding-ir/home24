import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

import Layout from "../Layout/Layout";
import { routes } from "../../routes";
import { styles } from "./styles";

const Pages = () => {
  const renderRoutes = () => {
    return Object.values(routes).map((route) => {
      return (
        <Route path={route.path} key={route.path} element={route.element} />
      );
    });
  };

  return (
    <Layout>
      <CssBaseline />

      <Box sx={styles.Page}>
        <Routes>{renderRoutes()}</Routes>
      </Box>
    </Layout>
  );
};

export default Pages;
