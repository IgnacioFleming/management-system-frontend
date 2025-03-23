import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function SalesMenu() {
  const listItems = [
    { label: "Sales", path: "/sales", icon: "pi-clipboard" },
    { label: "Add Sale", path: "/addSale", icon: "pi-plus-circle" },
  ];
  return (
    <>
      <ul className="list-none px-3 py-0 m-0">
        <AccordionMenu header="SALES" listItems={listItems} />
      </ul>
    </>
  );
}

export default SalesMenu;
