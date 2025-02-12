import { Menu } from "primereact/menu";

export default function SubMenu({ items, ptId, ref }) {
  return <Menu model={items} id={ptId} ref={ref} popup />;
}
