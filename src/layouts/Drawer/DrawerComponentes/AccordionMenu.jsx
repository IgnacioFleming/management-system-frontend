import { useContext, useRef } from "react";
import MenuHeader from "./MenuHeader";
import MenuBody from "./MenuBody";
import { Divider } from "primereact/divider";
import { DrawerContext } from "../../../contexts/drawer";

function AccordionMenu({ header, listItems }) {
  const btnRef = useRef(null);
  const { narrowDrawer } = useContext(DrawerContext);

  return (
    <li>
      {!narrowDrawer && <MenuHeader label={header} btnRef={btnRef} />}
      <MenuBody listItems={listItems} />
      <Divider />
    </li>
  );
}

export default AccordionMenu;
