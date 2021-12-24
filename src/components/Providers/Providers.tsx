import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";

import { useTheme, ThemeContext } from "../Theme/useTheme";
import { useLanguage, LanguageContext } from "../Language/useLanguage";
import { useAppState, AppStateContext } from "../../hooks/useAppState";

const queryClient = new QueryClient();

interface IProps {
  children: ReactNode;
}

const Providers = ({ children }: IProps) => {
  const themeValues = useTheme("light");
  const languageValues = useLanguage("de");
  const appStateValues = useAppState();

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AppStateContext.Provider value={appStateValues}>
        <LanguageContext.Provider value={languageValues}>
          <ThemeContext.Provider value={themeValues}>
            <ThemeProvider theme={themeValues.theme}>{children}</ThemeProvider>
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </AppStateContext.Provider>
    </QueryClientProvider>
  );
};

export default Providers;
