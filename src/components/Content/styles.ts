import { Styles } from "../../types";
import { DRAWER_WIDTH } from "../../constants";

export const styles: Styles = {
  main: {
    flexGrow: 1,
    p: 3,
    width: {
      xs: "100%",
      sm: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
  },
};
