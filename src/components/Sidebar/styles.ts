import { Styles } from "../../types";
import { DRAWER_WIDTH } from "../../constants";

export const styles: Styles = {
  link: {
    a: {
      color: (theme) =>
        theme.palette.mode === "dark"
          ? theme.palette.grey[400]
          : theme.palette.grey[800],
      textDecoration: "none",
      fontSize: "1rem",
      "&.is-selected": {
        display: "block",
        color: (theme) => theme.palette.primary.dark,
        borderLeft: (theme) => `3px solid ${theme.palette.primary.main}`,
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
      stroke: (theme) =>
        theme.palette.mode === "dark"
          ? theme.palette.primary.light
          : theme.palette.primary.contrastText,
      fill: (theme) =>
        theme.palette.mode === "dark"
          ? theme.palette.secondary.dark
          : theme.palette.primary.light,
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
