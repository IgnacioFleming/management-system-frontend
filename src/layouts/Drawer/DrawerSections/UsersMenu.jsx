import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function UsersMenu() {
  const listItems = [{ label: "Users", path: "/users", icon: "pi-users" }];
  return (
    <>
      <ul className="list-none px-3  m-0">
        <AccordionMenu header="USERS" listItems={listItems} />
      </ul>
    </>
  );
}

export default UsersMenu;
