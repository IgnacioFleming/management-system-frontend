import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function UsersMenu() {
  const listItems = [{ label: "Usuarios Registrados", path: "/users", icon: "pi-users" }];
  return (
    <>
      <ul className="list-none px-3  m-0">
        <AccordionMenu header="USUARIOS" listItems={listItems} />
      </ul>
    </>
  );
}

export default UsersMenu;
