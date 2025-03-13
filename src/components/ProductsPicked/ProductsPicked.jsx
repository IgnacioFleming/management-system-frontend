import { DataView } from "primereact/dataview";
import Counter from "../Counter/Counter";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { useContext } from "react";
import { SalesContext } from "../../contexts/orders";

function ProductsPicked({ filteredItems, removeFilteredItem }) {
  const { sale } = useContext(SalesContext);
  console.log(sale);
  const itemTemplate = (product, index) => {
    return (
      <div className="col-12" key={product.id}>
        <div className={classNames("flex flex-column xl:flex-row xl:align-items-start p-4 gap-4", { "border-top-1 surface-border": index !== 0 })}>
          <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.thumbnail} alt={product.name} />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>

              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category}</span>
                </span>
              </div>
              <div>
                <Counter product={product} />
                <Button className="m-2" onClick={() => removeFilteredItem(product)}>
                  <i className="pi pi-trash"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const productsTemplate = (items) => {
    if (!items || items.length === 0) return null;
    return items.map((item, index) => itemTemplate(item, index));
  };
  return (
    <>
      <DataView value={filteredItems} listTemplate={productsTemplate} />
    </>
  );
}

export default ProductsPicked;
