import { Card } from "primereact/card";
import CostumerDropdown from "../../components/CostumerDropdown/CostumerDropDown";
import { useGetData } from "../../hooks/useGetData";
import { costumersService, paymentsService } from "../../services";
import { Formik } from "formik";
import TextField from "../../components/TextField/TextField";
import { paymentSchema } from "../../schemas/payment";
import { Button } from "primereact/button";
import { useState } from "react";

const initialValues = { payment_amount: "" };

function AddPayment() {
  const [costumers] = useGetData(costumersService);
  const [selectedCostumer, setSelectedCostumer] = useState();
  const submitPayment = async ({ payment_amount }) => {
    await paymentsService.create({ payment_amount, costumer_id: selectedCostumer.id });
  };

  const handleSelectCostumer = (costumer) => setSelectedCostumer(costumer);
  return (
    <div className="flex justify-content-center align-items-center" style={{ height: "calc(100vh - 100px)" }}>
      <Card className="w-5">
        <Formik initialValues={initialValues} validationSchema={paymentSchema} onSubmit={submitPayment} validateOnChange={false}>
          {({ handleChange, handleSubmit, values, errors }) => (
            <form onSubmit={handleSubmit} className="flex flex-column gap-5 justify-content-center align-items-center">
              <CostumerDropdown data={costumers} selectedCostumer={selectedCostumer} handleSelectCostumer={handleSelectCostumer} />
              <TextField input="payment_amount" onChange={handleChange} label="Monto" value={values.amount} invalid={errors.payment_amount && true} helperText={errors.payment_amount} />
              <Button type="submit" label="Agregar" severity="info" />
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default AddPayment;
