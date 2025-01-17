import { Card } from "primereact/card";
import { Button } from "primereact/button";

import { Formik } from "formik";
import { productSchema } from "../../schemas/product";
import ProductsApiCall from "../../services/products";
import styles from "./AddSales.module.css";
import { Dropdown } from "primereact/dropdown";
import { useGetData } from "../../hooks/useGetData";
import CostumersApiCall from "../../services/costumers";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { formatCurrency } from "../../utils/utils";
import { DataView } from "primereact/dataview";
import { classNames } from "primereact/utils";
import Counter from "../../components/Counter/Counter";

const initialValues = {
  name: "",
  price: "",
  stock: "",
  category: "",
  description: "",
  thumbnail: "",
};

function AddSales() {
  const { data } = useGetData(CostumersApiCall);
  const { data: products, setData } = useGetData(ProductsApiCall);
  const [selectedCostumer, setSelectedCostumer] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const costumerOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img alt={option.name} src={option.logo} className="mr-2" style={{ width: "18px", objectFit: "contain", height: "18px" }} />
        <div>{option.name}</div>
      </div>
    );
  };

  const selectedCostumerTemplate = (option, props) => {
    if (option)
      return (
        <div className="flex align-items-center">
          <img alt={option.name} src={option.logo} className="mr-2" style={{ width: "18px", objectFit: "contain", height: "18px" }} />
          <div>{option.name}</div>
        </div>
      );
    return <span>{props.placeholder}</span>;
  };
  const handleSubmit = async (data) => await ProductsApiCall.create(data);

  const imageBodyTemplate = (product) => {
    return <img alt={product.name} src={product.thumbnail} style={{ width: 100, height: 100, objectFit: "contain" }} />;
  };

  const removeProduct = (product) => {
    console.log(product.id);
    const newSelectedProducts = selectedProducts.filter((e) => e.id !== product.id);
    setSelectedProducts(newSelectedProducts);
  };

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
                <Counter />
                <Button className="m-2" onClick={() => removeProduct(product)}>
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
    console.log(items);
    if (!items || items.length === 0) return null;
    return items.map((item, index) => itemTemplate(item, index));
  };

  const selectProduct = (product) => {
    const newSelectedProducts = [...selectedProducts, product];
    setSelectedProducts(newSelectedProducts);
    const newProducts = products.filter((e) => e.id !== product.id);
    setData(newProducts);
  };
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <Card pt={{ title: { className: "m-4" } }} title="Nueva Venta" className="flex justify-content-center">
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={productSchema} validateOnChange={false}>
              {(props) => (
                <form className="flex flex-column row-gap-5" onSubmit={props.handleSubmit}>
                  <div className="flex flex-column row-gap-2">
                    <label htmlFor="costumer" className="text-lg">
                      Cliente
                    </label>
                    <Dropdown name="costumer" value={selectedCostumer} onChange={(e) => setSelectedCostumer(e.target.value)} showClear options={data} optionLabel="name" valueTemplate={selectedCostumerTemplate} filter itemTemplate={costumerOptionTemplate} placeholder="Selecciona un Cliente" />
                  </div>
                  <div className="flex justify-content-center">
                    <Button label="Crear" type="submit" />
                  </div>
                </form>
              )}
            </Formik>
            <DataView value={selectedProducts} listTemplate={productsTemplate} />
          </Card>
        </div>
      </div>
      {selectedCostumer && (
        <div className="flex flex-column align-items-center m-5 row-gap-5">
          <h2>Seleccione los productos para agregar a la orden</h2>
          <DataTable value={products} style={{ width: "80%" }}>
            <Column field="name" header="Producto"></Column>
            <Column body={imageBodyTemplate}></Column>
            <Column field="price" header="Precio" body={(product) => formatCurrency(product.price)}></Column>
            <Column field="stock" header="Stock"></Column>
            <Column field="category" header="Categoría"></Column>
            <Column body={(e) => <Button label="Agregar" onClick={() => selectProduct(e)} />}></Column>
          </DataTable>
        </div>
      )}
    </>
  );
}

export default AddSales;
