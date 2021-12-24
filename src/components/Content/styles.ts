import { Styles } from "../../types";
import { DRAWER_WIDTH } from "../../constants";

export const styles: Styles = {
  main: {
    position: "relative",
    flexGrow: 1,
    m: "0 1rem",
    width: {
      xs: "100%",
      sm: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
};
