import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import { styles } from "./styles";

interface IProps {
  children: ReactNode;
}

const Layout = (props: IProps) => {
  const { children } = props;

  return (
    <Box sx={styles.drawer}>
      <Header />

      <Sidebar />

      <Content>
        {children}

        <Footer />
      </Content>
    </Box>
  );
};

export default Layout;
