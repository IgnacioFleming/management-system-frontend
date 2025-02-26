import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function FinancesMenu() {
  const listItems = [
    { label: "Cuentas Corrientes", path: "/balances", icon: "pi-wallet" },
    { label: "Registrar Pago", path: "/addPayments", icon: "pi-plus" },
  ];

  return (
    <>
      <ul className="list-none px-3  m-0">
        <AccordionMenu header="FINANZAS" listItems={listItems} />
      </ul>
    </>
  );
}

export default FinancesMenu;
