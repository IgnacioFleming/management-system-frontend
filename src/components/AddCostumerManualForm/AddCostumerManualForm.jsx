import { Formik } from "formik";
import TextField from "../TextField/TextField";
import { Button } from "primereact/button";
import { useRef } from "react";
import { costumerSchema } from "../../schemas/costumer";
import { costumersService } from "../../services";
import Uploader from "../Uploader/Uploader";
import { createFormData } from "../../helpers/createFormData";

const initialValues = {
  name: "",
  account_number: "",
};

function AddCostumerManualForm() {
  const fileRef = useRef(null);
  const handleSubmit = async (data) => {
    const formData = createFormData(data, fileRef);
    await costumersService.create(formData);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={costumerSchema} validateOnChange={false}>
      {(props) => (
        <form className="flex flex-column row-gap-5" onSubmit={props.handleSubmit}>
          <TextField label={"Nombre"} input={"name"} onChange={props.handleChange} value={props.values.name} invalid={props.errors.name && true} helperText={props.errors.name} />

          <TextField label={"Número de Cuenta"} input={"account_number"} onChange={props.handleChange} value={props.values.account_number} invalid={props.errors.account_number && true} helperText={props.errors.account_number} />
          <Uploader label="Logo" name="thumbnail" accept="image/*" ptRef={fileRef} />
          <div className="flex justify-content-center">
            <Button label="Crear" type="submit" />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default AddCostumerManualForm;
