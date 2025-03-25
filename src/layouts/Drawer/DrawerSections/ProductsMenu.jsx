import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function ProductsMenu() {
  const listItems = [
    { label: "Inventory", path: "/products", icon: "pi-warehouse" },
    { label: "Add Product", path: "/addProducts", icon: "pi-plus-circle" },
  ];

  return (
    <>
      <ul className="list-none px-3 py-0 m-0">
        <AccordionMenu header="PRODUCTS" listItems={listItems} />
      </ul>
    </>
  );
}

export default ProductsMenu;
