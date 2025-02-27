import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function SalesMenu() {
  const listItems = [
    { label: "Lista de Ventas", path: "/sales", icon: "pi-clipboard" },
    { label: "Alta de Venta", path: "/addSale", icon: "pi-plus-circle" },
  ];
  return (
    <>
      <ul className="list-none px-3 m-0">
        <AccordionMenu header="VENTAS" listItems={listItems} />
      </ul>
    </>
  );
}

export default SalesMenu;
