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
    backgroundColor: (theme) => theme.palette.background.paper,
  },
};
