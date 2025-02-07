import { Card } from "primereact/card";
import ProductsApiCall from "../../services/products";
import styles from "./AddProducts.module.css";
import { useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import { addModes } from "../../utils/utils";
import ImportButton from "../../components/ImportButton/ImportButton";
import AddProductManualFrom from "../../components/AddProductManualFrom/AddProductManualFrom";

function AddProducts() {
  const addModeOptions = [addModes.manual, addModes.import];
  const [selection, setSelection] = useState(addModeOptions[0]);
  const handleSelectChange = (e) => {
    setSelection(e.value);
  };
  return (
    <div className={styles.cardContainer}>
      <div className={`card ${styles.card}`}>
        <div className="flex justify-content-end mb-5">
          <SelectButton value={selection} onChange={handleSelectChange} options={addModeOptions} />;
        </div>
        <Card pt={{ title: { className: "m-4" } }} title="Alta de Productos" className="flex justify-content-center">
          {selection === addModes.manual ? <AddProductManualFrom /> : <ImportButton service={ProductsApiCall} />}
        </Card>
      </div>
    </div>
  );
}

export default AddProducts;
