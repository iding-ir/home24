import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { styles } from "./styles";
import { AppStateContext } from "../../hooks/useAppState";
import { useArticles } from "../../hooks/useArticles";

const Header = () => {
  const { t } = useTranslation();

  const { appState, setAppState } = useContext(AppStateContext);

  const { categories } = useArticles();

  const handleToggle = () => {
    setAppState({ ...appState, drawerOpen: true });
  };

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <IconButton
          color="inherit"
          aria-label={t("Layout.toggleDrawer")}
          edge="start"
          onClick={handleToggle}
          sx={styles.drawerToggle}
        >
          <MenuIcon />
        </IconButton>

        {categories?.length ? (
          <Box>
            {categories[0].name}

            <small> ({categories[0].articleCount})</small>
          </Box>
        ) : (
          <Skeleton variant="text" height={25} sx={{ width: "100px" }} />
        )}

        <Box sx={styles.pusher}></Box>

        <TextField label={t("Header.search")} variant="standard" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
