import { Card } from "primereact/card";
import { useGetData } from "../../hooks/useGetData";
import { costumersService, paymentsService } from "../../services";
import { useFormik } from "formik";
import TextField from "../../components/TextField/TextField";
import { paymentSchema } from "../../schemas/payment";
import { Button } from "primereact/button";
import { useState } from "react";
import CostumerDropdown from "../../components/CostumerDropdown/CostumerDropdown";
import Alerts from "../../helpers/alerts/alerts";
import { API_Status_List } from "../../helpers/utils";

const initialValues = { payment_amount: "" };

function AddPayment() {
  const [costumers] = useGetData(costumersService);
  const [selectedCostumer, setSelectedCostumer] = useState();

  const submitPayment = async (amount) => {
    await paymentsService.create({ payment_amount: amount, costumer_id: selectedCostumer.id });
    resetForm();
  };
  const submitWithAlert = async ({ payment_amount }) => {
    try {
      const res = await Alerts.warnAlert({ title: "Warning!", text: "Are you sure you want to register this payment?", hasCancellation: true, confirmCallback: async () => await submitPayment(payment_amount) });
      if (res?.status === API_Status_List.ERROR) return await Alerts.errorToast({ text: "An error has ocurred while registering the payment" });
      return await Alerts.successToast();
    } catch (error) {
      return Alerts.errorToast({ text: error });
    }
  };

  const { handleChange, handleSubmit, resetForm, values, errors } = useFormik({ initialValues, validateOnChange: false, validationSchema: paymentSchema, onSubmit: submitWithAlert });

  const handleSelectCostumer = (costumer) => setSelectedCostumer(costumer);
  return (
    <div className="flex justify-content-center align-items-center" style={{ height: "calc(100vh - 100px)" }}>
      <Card className="w-5">
        <form onSubmit={handleSubmit} className="flex justify-content-center">
          <div className="flex flex-column gap-5 justify-content-center align-items-center w-14rem">
            <CostumerDropdown data={costumers} selectedCostumer={selectedCostumer} handleSelectCostumer={handleSelectCostumer} />
            <TextField className="w-full" input="payment_amount" onChange={handleChange} label="Monto" value={values.amount} invalid={errors.payment_amount && true} helperText={errors.payment_amount} />
            <Button type="submit" label="Add Payment" severity="info" />
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddPayment;
