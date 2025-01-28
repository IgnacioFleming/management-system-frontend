import { Menu } from "primereact/menu";

export default function SubMenu({ items, ptId, ref }) {
  return <Menu model={items} id={ptId} ref={ref} popup />;
}
/* <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
      <Button label="Show Left" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup /> */
