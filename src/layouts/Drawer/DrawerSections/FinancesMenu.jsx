import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function FinancesMenu() {
  const listItems = [
    { label: "Cuentas Corrientes", path: "/balances" },
    { label: "Registrar Pago", path: "/addPayments" },
  ];

  return (
    <>
      <ul className="list-none p-3 m-0">
        <AccordionMenu header="FINANZAS" listItems={listItems} />
      </ul>
    </>
  );
}

export default FinancesMenu;
