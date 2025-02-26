import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [narrowDrawer, setNarrowDrawer] = useState(false);
  const handleDrawerWidth = () => setNarrowDrawer(!narrowDrawer);
  const margin = { marginLeft: narrowDrawer ? "80px" : "280px" };
  return (
    <>
      <div style={margin}>
        <Navbar />
      </div>
      <div>
        <Drawer narrowDrawer={narrowDrawer} handleDrawerWidth={handleDrawerWidth} />
      </div>
      <div style={margin}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
