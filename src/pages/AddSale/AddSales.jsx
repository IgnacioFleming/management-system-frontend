import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Formik } from "formik";
import { productSchema } from "../../schemas/product";
import ProductsApiCall from "../../services/products";
import styles from "./AddSales.module.css";
import { useGetData } from "../../hooks/useGetData";
import CostumersApiCall from "../../services/costumers";
import { useState } from "react";
import { useFilter } from "../../hooks/useFilter";
import ProductPicker from "../../components/ProductPicker/ProductPicker";
import ProductsPicked from "../../components/ProductsPicked/ProductsPicked";
import CostumerDropdown from "../../components/CostumerDropdown/CostumerDropDown";

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
  const { data: products } = useGetData(ProductsApiCall);
  const { filteredItems, restItems, filterItem, removeFilteredItem } = useFilter(products);
  const [selectedCostumer, setSelectedCostumer] = useState(null);

  const handleSubmit = async (data) => await ProductsApiCall.create(data);

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <Card pt={{ title: { className: "m-4" } }} title="Nueva Venta" className="flex justify-content-center">
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={productSchema} validateOnChange={false}>
              {(props) => (
                <form className="flex flex-column row-gap-5" onSubmit={props.handleSubmit}>
                  <CostumerDropdown setSelectedCostumer={setSelectedCostumer} selectedCostumer={selectedCostumer} data={data} />
                  <div className="flex justify-content-center">
                    <Button label="Crear" type="submit" />
                  </div>
                </form>
              )}
            </Formik>
            <ProductsPicked filteredItems={filteredItems} removeFilteredItem={removeFilteredItem} />
          </Card>
        </div>
      </div>
      {selectedCostumer && <ProductPicker restItems={restItems} filterItem={filterItem} />}
    </>
  );
}

export default AddSales;
