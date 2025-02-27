import { useContext } from "react";
import Drawer from "../Drawer/Drawer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { DrawerContext } from "../../contexts/drawer";

function Layout() {
  const { narrowDrawer } = useContext(DrawerContext);
  const margin = { marginLeft: narrowDrawer ? "80px" : "280px" };
  return (
    <>
      <div style={margin}>
        <Navbar />
      </div>
      <div>
        <Drawer />
      </div>
      <div style={margin}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
