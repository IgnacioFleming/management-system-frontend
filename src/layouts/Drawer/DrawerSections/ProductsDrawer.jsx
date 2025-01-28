import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { useRef } from "react";
import { Link } from "react-router-dom";

function ProductsDrawer() {
  const btnRef1 = useRef(null);
  return (
    <>
      <ul className="list-none p-3 m-0">
        <li>
          <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
            <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
              <span className="font-medium">PRODUCTOS</span>
              <i className="pi pi-chevron-down"></i>
              <Ripple />
            </div>
          </StyleClass>
          <ul className="list-none p-0 m-0 overflow-hidden">
            <li>
              <Link to="/products" className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline">
                <i className="pi pi-home mr-2"></i>
                <span className="font-medium">Inventario</span>
                <Ripple />
              </Link>
            </li>
            <li>
              <Link to="/addProducts" className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline">
                <i className="pi pi-bookmark mr-2"></i>
                <span className="font-medium">Alta de Productos</span>
                <Ripple />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default ProductsDrawer;
