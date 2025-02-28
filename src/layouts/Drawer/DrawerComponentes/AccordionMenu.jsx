import { useContext, useRef } from "react";
import MenuHeader from "./MenuHeader";
import MenuBody from "./MenuBody";
import { Divider } from "primereact/divider";
import { DrawerContext } from "../../../contexts/drawer";

function AccordionMenu({ header, listItems }) {
  const btnRef = useRef(null);
  const { narrowDrawer } = useContext(DrawerContext);

  return (
    <li className="py-0">
      {!narrowDrawer && <MenuHeader label={header} btnRef={btnRef} />}
      <MenuBody listItems={listItems} />
      <Divider className="my-3" />
    </li>
  );
}

export default AccordionMenu;
