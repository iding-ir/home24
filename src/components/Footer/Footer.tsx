import React from "react";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

import { styles } from "./styles";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={styles.footer}>
      {t("Footer.text")}
    </Box>
  );
};

export default Footer;
