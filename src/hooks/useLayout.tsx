import { useState, createContext } from "react";

interface ILayoutContext {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LayoutContext = createContext<ILayoutContext>({
  drawerOpen: false,
  setDrawerOpen: () => {},
});

export const useLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return { drawerOpen, setDrawerOpen };
};
