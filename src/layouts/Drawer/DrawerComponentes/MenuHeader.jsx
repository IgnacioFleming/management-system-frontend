import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { useContext } from "react";
import { DrawerContext } from "../../../contexts/drawer";

function MenuHeader({ label, btnRef }) {
  const { narrowDrawer } = useContext(DrawerContext);
  return (
    <StyleClass nodeRef={btnRef} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
      <div ref={btnRef} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
        {!narrowDrawer && <span className="font-medium">{label}</span>}
        <i className="pi pi-chevron-down"></i>
        <Ripple />
      </div>
    </StyleClass>
  );
}

export default MenuHeader;
