import { createContext, useState } from "react";

export const DrawerContext = createContext();

function DrawerContextProvider({ children }) {
  const [narrowDrawer, setNarrowDrawer] = useState(false);

  const handleDrawerWidth = () => setNarrowDrawer(!narrowDrawer);

  const value = { narrowDrawer, handleDrawerWidth };

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
}

export default DrawerContextProvider;
