import { Ripple } from "primereact/ripple";
import { Link } from "react-router-dom";

function MenuBody({ listItems }) {
  return (
    <ul className="list-none p-0 m-0 overflow-hidden">
      {listItems.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline">
              <i className="pi pi-folder mr-2"></i>
              <span className="font-medium">{item.label}</span>
              <Ripple />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuBody;
