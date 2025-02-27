import { useContext } from "react";
import Drawer from "../Drawer/Drawer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { DrawerContext } from "../../contexts/drawer";
import styles from "./Layout.module.css";

function Layout() {
  const { narrowDrawer } = useContext(DrawerContext);
  const margin = narrowDrawer ? styles.narrowDrawer : styles.wideDrawer;
  return (
    <>
      <div className={margin}>
        <Navbar />
      </div>
      <div>
        <Drawer />
      </div>
      <div className={margin}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
