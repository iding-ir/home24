import { Styles } from "../../types";
import { DRAWER_WIDTH } from "../../constants";

export const styles: Styles = {
  link: {
    a: {
      color: (theme) => theme.palette.grey[600],
      textDecoration: "none",
      fontSize: "1rem",
      "&.is-selected": {
        color: (theme) => theme.palette.secondary.main,
      },
    },
  },
  title: {
    fontSize: "1.2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    "& svg": {
      width: "2.4rem",
      height: "2.4rem",
      margin: "0 1rem",
    },
  },
  nav: {
    width: { sm: DRAWER_WIDTH },
    flexShrink: { sm: 0 },
  },
  temporaryDrawer: {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: DRAWER_WIDTH,
    },
  },
  permanentDrawer: {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: DRAWER_WIDTH,
    },
  },
};
