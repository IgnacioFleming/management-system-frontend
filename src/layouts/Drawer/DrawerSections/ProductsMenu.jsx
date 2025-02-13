import AccordionMenu from "../DrawerComponentes/AccordionMenu";

function ProductsMenu() {
  const listItems = [
    { label: "Inventario", path: "/products" },
    { label: "Alta de Productos", path: "/addProducts" },
  ];

  return (
    <>
      <ul className="list-none p-3 m-0">
        <AccordionMenu header="PRODUCTOS" listItems={listItems} />
      </ul>
    </>
  );
}

export default ProductsMenu;
