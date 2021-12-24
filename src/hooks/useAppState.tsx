import { useState, createContext } from "react";

export interface AppState {
  drawerOpen: boolean;
}

const iAppState = {
  drawerOpen: false,
};

interface IAppStateContext {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
}

export const AppStateContext = createContext<IAppStateContext>({
  appState: iAppState,
  setAppState: () => {},
});

export const useAppState = () => {
  const [appState, setAppState] = useState(iAppState);

  return { appState, setAppState };
};
