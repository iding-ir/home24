import { Styles } from "../../types";

export const styles: Styles = {
  NotFound: {
    display: "flex",
    flexDirection: "row",
    fontSize: "2rem",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    color: (theme) =>
      theme.palette.mode === "dark"
        ? theme.palette.grey[400]
        : theme.palette.grey[800],

    a: {
      color: (theme) =>
        theme.palette.mode === "dark"
          ? theme.palette.primary.light
          : theme.palette.primary.dark,
      textDecoration: "none",
      fontSize: "1.2rem",
    },
  },
  text: {
    mr: 3,
    pr: 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "right",
    borderRight: (theme) => `1px solid ${theme.palette.grey[600]}`,
  },
  back: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
};
