import { useRef } from "react";
import MenuHeader from "./MenuHeader";
import MenuBody from "./MenuBody";

function AccordionMenu({ header, listItems }) {
  const btnRef = useRef(null);
  return (
    <li>
      <MenuHeader label={header} btnRef={btnRef} />
      <MenuBody listItems={listItems} />
    </li>
  );
}

export default AccordionMenu;
