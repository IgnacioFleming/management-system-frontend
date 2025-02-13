import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function SalesMenu() {
  const listItems = [
    { label: "Lista de Ventas", path: "/sales" },
    { label: "Alta de Venta", path: "/addSale" },
  ];
  return (
    <>
      <ul className="list-none p-3 m-0">
        <AccordionMenu header="VENTAS" listItems={listItems} />
      </ul>
    </>
  );
}

export default SalesMenu;
