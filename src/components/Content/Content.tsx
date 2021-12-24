import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { styles } from "./styles";

interface IProps {
  children: ReactNode;
}

const Content = (props: IProps) => {
  const { children } = props;

  return (
    <Box component="main" sx={styles.main}>
      <Toolbar />

      {children}
    </Box>
  );
};

export default Content;
