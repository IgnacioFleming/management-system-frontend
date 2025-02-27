import { Button } from "primereact/button";
import { useContext } from "react";
import { DrawerContext } from "../../../contexts/drawer";

function Header() {
  const { narrowDrawer, handleDrawerWidth } = useContext(DrawerContext);
  return (
    <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
      {!narrowDrawer && (
        <span className="inline-flex align-items-center gap-2">
          <span className="font-semibold text-xl text-info">Business Manager</span>
        </span>
      )}
      <span>
        <Button type="button" onClick={handleDrawerWidth} severity="contrast" icon="pi pi-bars" pt={{ icon: { style: { fontSize: "1.5rem", paddingTop: 2 } } }} text className="h-2rem w-2rem border-none"></Button>
      </span>
    </div>
  );
}

export default Header;
