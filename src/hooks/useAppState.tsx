import { useState, createContext } from "react";

interface IAppStateContext {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppStateContext = createContext<IAppStateContext>({
  drawerOpen: false,
  setDrawerOpen: () => {},
});

export const useAppState = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return { drawerOpen, setDrawerOpen };
};
