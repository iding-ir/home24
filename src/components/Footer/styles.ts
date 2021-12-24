import { Styles } from "../../types";

export const styles: Styles = {
  footer: {
    position: "sticky",
    bottom: "0",
    left: "0",
    right: "0",
    height: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexShrink: "0",
    color: (theme) =>
      theme.palette.mode === "dark"
        ? theme.palette.grey[400]
        : theme.palette.grey[800],
    backgroundColor: (theme) => theme.palette.background.paper,
  },
};
