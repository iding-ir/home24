import { Styles } from "../../types";
import { DRAWER_WIDTH } from "../../constants";

export const styles: Styles = {
  appBar: {
    width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
    marginLeft: { sm: `${DRAWER_WIDTH}px` },
  },
  drawerToggle: {
    mr: 2,
    display: { sm: "none" },
  },
};
