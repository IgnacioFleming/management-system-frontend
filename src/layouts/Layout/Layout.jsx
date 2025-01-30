import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [drawerConfig, setDrawerVisible] = useState({ drawerVisible: true, navbarWidth: "narrow" });
  const handleDrawerVisibility = () => {
    if (drawerConfig.drawerVisible) return setDrawerVisible({ drawerVisible: false, navbarWidth: "wide" });
    return setDrawerVisible({ drawerVisible: true, navbarWidth: "narrow" });
  };
  const margin = { marginLeft: drawerConfig.navbarWidth === "narrow" ? "280px" : "0" };
  return (
    <>
      <div style={margin}>
        <Navbar drawerConfig={drawerConfig} />
      </div>
      <div>
        <Drawer drawerConfig={drawerConfig} setDrawerVisible={setDrawerVisible} handleDrawerVisibility={handleDrawerVisibility} />
      </div>
      <div style={margin}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
