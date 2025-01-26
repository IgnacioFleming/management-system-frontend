import { Card } from "primereact/card";
import { Button } from "primereact/button";

import { Formik } from "formik";
import styles from "./AddCostumer.module.css";
import CostumersApiCall from "../../services/costumers";
import { costumerSchema } from "../../schemas/costumer";
import TextField from "../../components/TextField/TextField";

const initialValues = {
  name: "",
  logo: "",
  account_number: "",
};

function AddCostumer() {
  const handleSubmit = async (data) => {
    await CostumersApiCall.create(data);
  };
  return (
    <div className={styles.cardContainer}>
      <div className={`card ${styles.card}`}>
        <Card pt={{ title: { className: "m-4" } }} title="Alta de Clientes" className="flex justify-content-center">
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={costumerSchema} validateOnChange={false}>
            {(props) => (
              <form className="flex flex-column row-gap-5" onSubmit={props.handleSubmit}>
                <TextField label={"Nombre"} input={"name"} onChange={props.handleChange} value={props.values.name} invalid={props.errors.name && true} helperText={props.errors.name} />
                <TextField label={"Logo"} input={"logo"} onChange={props.handleChange} value={props.values.logo} invalid={props.errors.logo && true} helperText={props.errors.logo} />
                <TextField label={"Número de Cuenta"} input={"account_number"} onChange={props.handleChange} value={props.values.account_number} invalid={props.errors.account_number && true} helperText={props.errors.account_number} />
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
