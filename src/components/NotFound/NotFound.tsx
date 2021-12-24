import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import { styles } from "./styles";
import * as URLS from "../../constants/urls";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.NotFound}>
      <Box>{t("NotFound.text")}</Box>

      <Box>
        <Link to={URLS.HOME}> {t("NotFound.back")}</Link>
      </Box>
    </Box>
  );
};

export default NotFound;
