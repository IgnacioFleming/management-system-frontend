import { Ripple } from "primereact/ripple";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DrawerContext } from "../../../contexts/drawer";

function MenuBody({ listItems }) {
  const { narrowDrawer } = useContext(DrawerContext);
  return (
    <ul className="list-none p-0 m-0 overflow-hidden menu-body">
      {listItems?.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path} className="p-ripple flex align-items-center cursor-pointer px-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline">
              <i className={`pi ${item.icon} mr-2`}></i>
              {!narrowDrawer && <span className="font-medium">{item.label}</span>}
              <Ripple />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuBody;
