import { Sidebar } from "primereact/sidebar";
import ProductsMenu from "./DrawerSections/ProductsMenu";
import CostumersMenu from "./DrawerSections/CosutmersMenu";
import SalesMenu from "./DrawerSections/SalesMenu";
import FinancesMenu from "./DrawerSections/FinancesMenu";
import UsersMenu from "./DrawerSections/UsersMenu";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import Header from "./DrawerSections/Header";
export default function Drawer({ drawerConfig, handleDrawerVisibility }) {
  const { user } = useContext(UserContext);

  const drawerContent = ({ closeIconRef }) => {
    return (
      <div className="min-h-screen flex relative lg:static surface-ground">
        <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: "100%" }}>
          <div className="flex flex-column h-full mt-3">
            <Header handleDrawerVisibility={handleDrawerVisibility} closeIconRef={closeIconRef} />
            <div className="overflow-y-auto mt-4">
              <ProductsMenu />
              <CostumersMenu />
              <SalesMenu />
              <FinancesMenu />
              {user.role === "super_admin" && <UsersMenu />}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="card flex justify-content-center">
      <Sidebar modal={false} visible={drawerConfig.drawerVisible} dismissable={false} content={drawerContent} style={{ width: "280px" }}></Sidebar>
    </div>
  );
}
