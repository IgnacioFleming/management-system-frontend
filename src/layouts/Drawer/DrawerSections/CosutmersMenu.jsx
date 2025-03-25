import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function CostumersMenu() {
  const listItems = [
    { label: "Costumers", path: "/costumers", icon: "pi-address-book" },
    { label: "Add Costumer", path: "/addCostumer", icon: "pi-user-plus" },
  ];
  return (
    <>
      <ul className="list-none px-3  m-0">
        <AccordionMenu header="COSTUMERS" listItems={listItems} />
      </ul>
    </>
  );
}

export default CostumersMenu;
