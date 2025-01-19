import { Card } from "primereact/card";
import { Button } from "primereact/button";
import styles from "./AddSales.module.css";
import ProductPicker from "../../components/ProductPicker/ProductPicker";
import ProductsPicked from "../../components/ProductsPicked/ProductsPicked";
import CostumerDropdown from "../../components/CostumerDropdown/CostumerDropDown";
import { useContext } from "react";
import { OrderContext } from "../../contexts/orders";

function AddSales({ handleSelectCostumer, handleSubmit, selectedCostumer }) {
  const { data, filteredItems, removeFilteredItem, restItems, filterItem } = useContext(OrderContext);
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <Card pt={{ title: { className: "m-4" } }} title="Nueva Venta" className="flex justify-content-center">
            <form className="flex flex-column row-gap-5" onSubmit={handleSubmit}>
              <CostumerDropdown handleSelectCostumer={handleSelectCostumer} selectedCostumer={selectedCostumer} data={data} />
              <div className="flex justify-content-center">
                <Button label="Crear" type="submit" />
              </div>
            </form>

            <ProductsPicked filteredItems={filteredItems} removeFilteredItem={removeFilteredItem} />
          </Card>
        </div>
      </div>
      {selectedCostumer && <ProductPicker restItems={restItems} filterItem={filterItem} />}
    </>
  );
}

export default AddSales;
