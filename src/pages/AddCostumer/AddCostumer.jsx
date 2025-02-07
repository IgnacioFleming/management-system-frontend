import { Card } from "primereact/card";
import styles from "./AddCostumer.module.css";
import AddCostumerManualForm from "../../components/AddCostumerManualForm/AddCostumerManualForm";
import { SelectButton } from "primereact/selectbutton";
import { addModes } from "../../utils/utils";
import { useState } from "react";
import ImportButton from "../../components/ImportButton/ImportButton";
import CostumersApiCall from "../../services/costumers";

function AddCostumer() {
  const addModeOptions = [addModes.manual, addModes.import];
  const [selection, setSelection] = useState(addModeOptions[0]);
  const handleSelectChange = (e) => {
    setSelection(e.value);
  };
  return (
    <div className={styles.cardContainer}>
      <div className={`card ${styles.card}`}>
        <div className="flex justify-content-end mb-5">
          <SelectButton value={selection} onChange={handleSelectChange} options={addModeOptions} />
        </div>
        <Card pt={{ title: { className: "m-4" } }} title="Alta de Clientes" className="flex justify-content-center">
          {selection === addModes.manual ? <AddCostumerManualForm /> : <ImportButton service={CostumersApiCall} />}
        </Card>
      </div>
    </div>
  );
}

export default AddCostumer;
