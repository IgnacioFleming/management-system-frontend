import { useRef } from "react";
import MenuHeader from "./MenuHeader";
import MenuBody from "./MenuBody";
import { Divider } from "primereact/divider";

function AccordionMenu({ header, listItems }) {
  const btnRef = useRef(null);
  return (
    <li>
      <MenuHeader label={header} btnRef={btnRef} />
      <MenuBody listItems={listItems} />
      <Divider />
    </li>
  );
}

export default AccordionMenu;
