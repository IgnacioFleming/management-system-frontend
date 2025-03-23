import { Card } from "primereact/card";
import styles from "./AddCostumer.module.css";
import AddCostumerManualForm from "../../components/AddCostumerManualForm/AddCostumerManualForm";
import { SelectButton } from "primereact/selectbutton";
import { addModes } from "../../helpers/utils";
import { useState } from "react";
import ImportButton from "../../components/ImportButton/ImportButton";
import { costumersService } from "../../services";

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
        <Card pt={{ title: { className: "m-1" } }} title="Add Costumer" className="flex justify-content-center">
          {selection === addModes.manual ? <AddCostumerManualForm /> : <ImportButton service={costumersService} />}
        </Card>
      </div>
    </div>
  );
}

export default AddCostumer;
