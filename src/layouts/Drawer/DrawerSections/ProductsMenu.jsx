import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function ProductsMenu({ narrowDrawer }) {
  const listItems = [
    { label: "Inventario", path: "/products", icon: "pi-warehouse" },
    { label: "Alta de Productos", path: "/addProducts", icon: "pi-plus-circle" },
  ];

  return (
    <>
      <ul className="list-none px-3  m-0">
        <AccordionMenu header="PRODUCTOS" listItems={listItems} narrowDrawer={narrowDrawer} />
      </ul>
    </>
  );
}

export default ProductsMenu;
