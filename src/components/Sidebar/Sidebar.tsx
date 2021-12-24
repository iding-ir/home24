import { useContext } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";
import Skeleton from "@mui/material/Skeleton";
import { NavLink } from "react-router-dom";

import { useArticles } from "../../hooks/useArticles";
import { AppStateContext } from "../../hooks/useAppState";
import { ReactComponent as Logo } from "../../assets/images/icon-logo.svg";
import { styles } from "./styles";

const Sidebar = () => {
  const { t } = useTranslation();

  const { categories } = useArticles();

  const { appState, setAppState } = useContext(AppStateContext);

  const handleToggle = () => {
    setAppState({ ...appState, drawerOpen: !appState.drawerOpen });
  };

  const drawer = (
    <>
      <Toolbar sx={styles.title}>
        <Box sx={styles.logo}>
          <Logo />
        </Box>

        {t("Sidebar.title")}
      </Toolbar>

      <Divider />

      {categories?.length
        ? categories[0].childrenCategories.map(({ name, urlPath }) => {
            return (
              <Box sx={styles.link} key={urlPath}>
                <NavLink
                  className={({ isActive }) => (isActive ? "is-selected" : "")}
                  end
                  to={urlPath}
                  onClick={() => {
                    setAppState({ ...appState, drawerOpen: false });
                  }}
                >
                  <ListItem button>
                    <ListItemText>{name}</ListItemText>
                  </ListItem>
                </NavLink>
              </Box>
            );
          })
        : Array(8)
            .fill(null)
            .map((item, index) => (
              <Skeleton
                variant="rectangular"
                height={25}
                sx={{ margin: "1rem", marginBottom: "0" }}
                key={index}
              />
            ))}
    </>
  );

  return (
    <Box component="nav" sx={styles.nav}>
      <Drawer
        variant="temporary"
        open={appState.drawerOpen}
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
