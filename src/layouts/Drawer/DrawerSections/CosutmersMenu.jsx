import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function CostumersMenu() {
  const listItems = [
    { label: "Clientes Registrados", path: "/costumers" },
    { label: "Alta de Clientes", path: "/addCostumer" },
  ];
  return (
    <>
      <ul className="list-none p-3 m-0">
        <AccordionMenu header="CLIENTES" listItems={listItems} />
      </ul>
    </>
  );
}

export default CostumersMenu;
