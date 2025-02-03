import { Card } from "primereact/card";
import { Button } from "primereact/button";

import { Formik } from "formik";
import styles from "./AddCostumer.module.css";
import CostumersApiCall from "../../services/costumers";
import { costumerSchema } from "../../schemas/costumer";
import TextField from "../../components/TextField/TextField";
import { FileUpload } from "primereact/fileupload";
import { useRef, useState } from "react";

const initialValues = {
  name: "",
  account_number: "",
};

function AddCostumer() {
  const [file, setFile] = useState("");
  const fileRef = useRef(null);
  const handleSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append("file", fileRef.current.getFiles()[0]);
    await CostumersApiCall.create(formData);
  };
  const handleSelect = (filename) => {
    setFile(filename);
  };
  const handleRemove = () => {
    setFile("");
  };
  const emptyTemplate = () => <div>No se ha seleccionado un archivo.</div>;

  const uploadOptions = { style: { display: "none" } };

  const cancelOptions = { style: { display: !file && "none" } };

  const pt = { badge: { root: { style: { display: "none" } } } };

  return (
    <div className={styles.cardContainer}>
      <div className={`card ${styles.card}`}>
        <Card pt={{ title: { className: "m-4" } }} title="Alta de Clientes" className="flex justify-content-center">
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={costumerSchema} validateOnChange={false}>
            {(props) => (
              <form className="flex flex-column row-gap-5" onSubmit={props.handleSubmit}>
                <TextField label={"Nombre"} input={"name"} onChange={props.handleChange} value={props.values.name} invalid={props.errors.name && true} helperText={props.errors.name} />

                <TextField label={"Número de Cuenta"} input={"account_number"} onChange={props.handleChange} value={props.values.account_number} invalid={props.errors.account_number && true} helperText={props.errors.account_number} />
                <FileUpload chooseLabel="Logo" ref={fileRef} name="thumbnail" accept="image/*" multiple={false} maxFileSize={1000000} uploadOptions={uploadOptions} cancelOptions={cancelOptions} onSelect={handleSelect} onRemove={handleRemove} emptyTemplate={emptyTemplate} pt={pt} />
                <div className="flex justify-content-center">
                  <Button label="Crear" type="submit" />
                </div>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </div>
  );
}

export default AddCostumer;
