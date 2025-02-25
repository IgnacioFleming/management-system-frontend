import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function SalesMenu({ narrowDrawer }) {
  const listItems = [
    { label: "Lista de Ventas", path: "/sales", icon: "pi-clipboard" },
    { label: "Alta de Venta", path: "/addSale", icon: "pi-plus-circle" },
  ];
  return (
    <>
      <ul className="list-none px-3 m-0">
        <AccordionMenu header="VENTAS" listItems={listItems} narrowDrawer={narrowDrawer} />
      </ul>
    </>
  );
}

export default SalesMenu;
