import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { ArticlesContext } from "../../hooks/useArticles";
import { LayoutContext } from "../../hooks/useLayout";
import { ReactComponent as Logo } from "../../assets/images/icon-logo.svg";
import { styles } from "./styles";
import { useTheme } from "../Theme/useTheme";

const Sidebar = () => {
  const { categories } = useContext(ArticlesContext);
  const { drawerOpen, setDrawerOpen } = useContext(LayoutContext);

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
        Kategorien
      </Toolbar>

      <Divider />

      {categories.length
        ? categories[0].childrenCategories.map(({ name, urlPath }) => {
            return (
              <Box sx={styles.link}>
                <ListItem button key={urlPath}>
                  <ListItemText>{name}</ListItemText>
                </ListItem>
              </Box>
            );
          })
        : "Loading..."}
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
