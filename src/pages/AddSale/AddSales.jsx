import { Card } from "primereact/card";
import { Button } from "primereact/button";
import styles from "./AddSales.module.css";
import ProductPicker from "../../components/ProductPicker/ProductPicker";
import ProductsPicked from "../../components/ProductsPicked/ProductsPicked";
import CostumerDropdown from "../../components/CostumerDropdown/CostumerDropdown";

function AddSales({ state, removeFilteredItem, filterItem, handleSelectCostumer, handleSubmit }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={`card ${styles.card}`}>
          <Card pt={{ title: { className: "m-4" } }} title="New Sale" className="flex justify-content-center">
            <form className="flex flex-column row-gap-5" onSubmit={handleSubmit}>
              <CostumerDropdown handleSelectCostumer={handleSelectCostumer} selectedCostumer={state.selectedCostumer} data={state.costumers} />
              <div className="flex justify-content-center">
                <Button label="Add new sale" type="submit" disabled={state.filteredItems.length > 0 ? false : true} />
              </div>
            </form>
            {state.selectedCostumer && <ProductsPicked filteredItems={state.filteredItems} removeFilteredItem={removeFilteredItem} />}
          </Card>
        </div>
      </div>
      {state.selectedCostumer && <ProductPicker restItems={state.restItems} filterItem={filterItem} />}
    </>
  );
}

export default AddSales;
