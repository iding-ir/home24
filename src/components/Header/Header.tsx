import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import { styles } from "./styles";
import { LayoutContext } from "../../hooks/useLayout";
import { ArticlesContext } from "../../hooks/useArticles";

const Header = () => {
  const { t } = useTranslation();

  const { setDrawerOpen } = useContext(LayoutContext);
  const { categories } = useContext(ArticlesContext);

  const handleToggle = () => {
    setDrawerOpen(true);
  };

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label={t("Layout.toggleDrawer")}
          edge="start"
          onClick={handleToggle}
          sx={styles.drawerToggle}
        >
          <MenuIcon />
        </IconButton>

        {categories.length ? (
          <>
            {categories[0].name}
            <small> ({categories[0].articleCount})</small>
          </>
        ) : (
          "Loading..."
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
