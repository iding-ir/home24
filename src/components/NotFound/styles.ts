import { Styles } from "../../types";

export const styles: Styles = {
  NotFound: {
    display: "flex",
    flexDirection: "row",
    fontSize: "2rem",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    color: (theme) => theme.palette.grey[600],

    a: {
      color: (theme) => theme.palette.grey[800],
      textDecoration: "none",
      fontSize: "1.2rem",
    },
  },
  text: {
    mr: 3,
    pr: 3,
    borderRight: (theme) => `1px solid ${theme.palette.grey[600]}`,
  },
  back: {},
};
