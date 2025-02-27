import { Card } from "primereact/card";
import styles from "./AddProducts.module.css";
import { useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import { addModes } from "../../helpers/utils";
import ImportButton from "../../components/ImportButton/ImportButton";
import AddProductManualForm from "../../components/AddProductManualForm/AddProductManualForm";
import { productsService } from "../../services";

function AddProducts() {
  const addModeOptions = [addModes.manual, addModes.import];
  const [selection, setSelection] = useState(addModeOptions[0]);
  const handleSelectChange = (e) => {
    setSelection(e.value);
  };
  return (
    <div className={styles.cardContainer}>
      <div className={`card ${styles.card}`}>
        <div className="flex justify-content-end mb-1">
          <SelectButton value={selection} onChange={handleSelectChange} options={addModeOptions} />
        </div>
        <Card pt={{ title: { className: "m-1" } }} title="Alta de Productos" className="flex justify-content-center">
          {selection === addModes.manual ? <AddProductManualForm /> : <ImportButton service={productsService} />}
        </Card>
      </div>
    </div>
  );
}

export default AddProducts;
