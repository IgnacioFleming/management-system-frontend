import { Card } from "primereact/card";
import { Button } from "primereact/button";
import styles from "./AddSales.module.css";
import ProductPicker from "../../components/ProductPicker/ProductPicker";
import ProductsPicked from "../../components/ProductsPicked/ProductsPicked";
import CostumerDropdown from "../../components/CostumerDropdown/CostumerDropDown";

function AddSales({ costumers, filteredItems, removeFilteredItem, restItems, filterItem, handleSelectCostumer, handleSubmit, selectedCostumer }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <Card pt={{ title: { className: "m-4" } }} title="Nueva Venta" className="flex justify-content-center">
            <form className="flex flex-column row-gap-5" onSubmit={handleSubmit}>
              <CostumerDropdown handleSelectCostumer={handleSelectCostumer} selectedCostumer={selectedCostumer} data={costumers} />
              <div className="flex justify-content-center">
                <Button label="Crear Nueva Venta" type="submit" disabled={filteredItems.length > 0 ? false : true} />
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
