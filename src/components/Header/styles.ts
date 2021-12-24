import { Styles } from "../../types";
import { DRAWER_WIDTH } from "../../constants";

export const styles: Styles = {
  appBar: {
    width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
    marginLeft: { sm: `${DRAWER_WIDTH}px` },
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
  },
  drawerToggle: {
    mr: 2,
    display: { sm: "none" },
  },
  pusher: {
    flexGrow: "10",
  },
  name: {
    display: { xs: "none", md: "block" },
  },
  count: {
    margin: "0 0.5rem",
  },
};
