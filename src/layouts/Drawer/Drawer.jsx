import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import ProductsDrawer from "./DrawerSections/ProductsDrawer";
import CostumersDrawer from "./DrawerSections/CosutmersDrawer";
import SalesDrawer from "./DrawerSections/SalesDrawer";
import FinancesDrawer from "./DrawerSections/FinancesDrawer";
export default function Drawer({ drawerConfig, handleDrawerVisibility }) {
  return (
    <div className="card flex justify-content-center">
      <Sidebar
        modal={false}
        visible={drawerConfig.drawerVisible}
        // onHide={handleDrawerVisibility}
        dismissable={false}
        content={({ closeIconRef }) => (
          <div className="min-h-screen flex relative lg:static surface-ground">
            <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: "280px" }}>
              <div className="flex flex-column h-full">
                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                  <span className="inline-flex align-items-center gap-2">
                    <span className="font-semibold text-2xl text-primary">Mi negocio</span>
                  </span>
                  <span>
                    <Button type="button" ref={closeIconRef} onClick={handleDrawerVisibility} icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
                  </span>
                </div>
                <div className="overflow-y-auto">
                  <ProductsDrawer />
                  <CostumersDrawer />
                  <SalesDrawer />
                  <FinancesDrawer />
                </div>
                <div className="mt-auto">
                  <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                  <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                    <span className="font-bold">Amy Elsner</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
    </div>
  );
}
