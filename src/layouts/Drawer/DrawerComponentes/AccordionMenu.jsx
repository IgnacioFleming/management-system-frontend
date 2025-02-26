import { useRef } from "react";
import MenuHeader from "./MenuHeader";
import MenuBody from "./MenuBody";
import { Divider } from "primereact/divider";

function AccordionMenu({ header, listItems, narrowDrawer }) {
  const btnRef = useRef(null);
  return (
    <li>
      {!narrowDrawer && <MenuHeader label={header} btnRef={btnRef} narrowDrawer={narrowDrawer} />}
      <MenuBody listItems={listItems} narrowDrawer={narrowDrawer} />
      <Divider />
    </li>
  );
}

export default AccordionMenu;
