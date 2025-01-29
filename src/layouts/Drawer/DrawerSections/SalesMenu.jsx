import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { useRef } from "react";
import { Link } from "react-router-dom";

function SalesMenu() {
  const btnRef = useRef(null);
  return (
    <>
      <ul className="list-none p-3 m-0">
        <li>
          <StyleClass nodeRef={btnRef} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
            <div ref={btnRef} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
              <span className="font-medium">VENTAS</span>
              <i className="pi pi-chevron-down"></i>
              <Ripple />
            </div>
          </StyleClass>
          <ul className="list-none p-0 m-0 overflow-hidden">
            <li>
              <Link to="/sales" className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline">
                <i className="pi pi-folder mr-2"></i>
                <span className="font-medium">Lista de Ventas</span>
                <Ripple />
              </Link>
            </li>
            <li>
              <Link to={"/addSale"} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline">
                <i className="pi pi-chart-bar mr-2"></i>
                <span className="font-medium">Alta de Venta</span>
                <Ripple />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default SalesMenu;
