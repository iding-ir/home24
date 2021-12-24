import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";
import Skeleton from "@mui/material/Skeleton";

import { useArticles } from "../../hooks/useArticles";
import { AppStateContext } from "../../hooks/useAppState";
import { ReactComponent as Logo } from "../../assets/images/icon-logo.svg";
import { styles } from "./styles";
import { useTheme } from "../Theme/useTheme";

const Sidebar = () => {
  const { t } = useTranslation();

  const { categories } = useArticles();
  const { drawerOpen, setDrawerOpen } = useContext(AppStateContext);

  const { theme } = useTheme();

  const handleToggle = () => {
    setDrawerOpen(true);
  };

  const drawer = (
    <>
      <Toolbar sx={styles.title}>
        <Box sx={styles.logo}>
          <Logo
            stroke={theme.palette.primary.contrastText}
            fill={theme.palette.primary.light}
          />
        </Box>

        {t("Sidebar.title")}
      </Toolbar>

      <Divider />

      {categories?.length
        ? categories[0].childrenCategories.map(({ name, urlPath }) => {
            return (
              <Box sx={styles.link} key={urlPath}>
                <ListItem button>
                  <ListItemText>{name}</ListItemText>
                </ListItem>
              </Box>
            );
          })
        : Array(8).fill(
            <Skeleton
              variant="rectangular"
              height={25}
              sx={{ margin: "1rem", marginBottom: "0" }}
            />
          )}
    </>
  );

  return (
    <Box component="nav" sx={styles.nav}>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={styles.temporaryDrawer}
      >
        {drawer}
      </Drawer>

      <Drawer variant="permanent" sx={styles.permanentDrawer} open>
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
