import { useFormik } from "formik";
import TextField from "../TextField/TextField";
import { Button } from "primereact/button";
import { useRef } from "react";
import { costumerSchema } from "../../schemas/costumer";
import { costumersService } from "../../services";
import Uploader from "../Uploader/Uploader";
import { createFormData } from "../../helpers/createFormData";
import Alerts from "../../helpers/alerts/alerts";

const initialValues = {
  name: "",
  account_number: "",
};

function AddCostumerManualForm() {
  const fileRef = useRef(null);

  const addCostumer = async (data) => {
    try {
      const formData = createFormData(data, fileRef);
      await costumersService.create(formData);
      resetForm();
      if (fileRef.current) fileRef.current.clear();
      await Alerts.successToast({ title: "Cliente creado!" });
    } catch (error) {
      await Alerts.errorToast({ text: error });
    }
  };
  const addItemWithAlert = async (data) => {
    await Alerts.addItem({ title: "Agregar Cliente", hasCancellation: true, confirmCallback: () => addCostumer(data) });
  };

  const { handleChange, handleSubmit, resetForm, values, errors } = useFormik({ initialValues, validationSchema: costumerSchema, validateOnChange: false, onSubmit: addItemWithAlert });
  return (
    <form className="flex flex-column row-gap-5" onSubmit={handleSubmit}>
      <TextField label={"Name"} input={"name"} onChange={handleChange} value={values.name} invalid={errors.name && true} helperText={errors.name} />

      <TextField label={"Account Number"} input={"account_number"} onChange={handleChange} value={values.account_number} invalid={errors.account_number && true} helperText={errors.account_number} />
      <Uploader label="Logo" name="thumbnail" accept="image/*" ptRef={fileRef} />
      <div className="flex justify-content-center">
        <Button label="Add Costumer" type="submit" />
      </div>
    </form>
  );
}

export default AddCostumerManualForm;
