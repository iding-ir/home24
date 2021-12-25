import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider } from "react-helmet-async";

import { useTheme, ThemeContext } from "../Theme/useTheme";
import { useLanguage, LanguageContext } from "../Language/useLanguage";
import { useAppState, AppStateContext } from "../../hooks/useAppState";

interface IProps {
  children: ReactNode;
}

const Providers = ({ children }: IProps) => {
  const queryClient = new QueryClient();

  const themeValues = useTheme("light");
  const languageValues = useLanguage("de");
  const appStateValues = useAppState();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <AppStateContext.Provider value={appStateValues}>
          <LanguageContext.Provider value={languageValues}>
            <ThemeContext.Provider value={themeValues}>
              <ThemeProvider theme={themeValues.theme}>
                {children}
              </ThemeProvider>
            </ThemeContext.Provider>
          </LanguageContext.Provider>
        </AppStateContext.Provider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default Providers;
