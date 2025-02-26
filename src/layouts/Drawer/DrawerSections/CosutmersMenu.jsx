import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function CostumersMenu({ narrowDrawer }) {
  const listItems = [
    { label: "Clientes Registrados", path: "/costumers", icon: "pi-address-book" },
    { label: "Alta de Clientes", path: "/addCostumer", icon: "pi-user-plus" },
  ];
  return (
    <>
      <ul className="list-none px-3  m-0">
        <AccordionMenu header="CLIENTES" listItems={listItems} narrowDrawer={narrowDrawer} />
      </ul>
    </>
  );
}

export default CostumersMenu;
