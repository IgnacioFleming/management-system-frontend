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
      const res = await Alerts.warnAlert({ title: "Atención!", text: "Estás seguro que quieres registrar este pago?", hasCancellation: true, confirmCallback: async () => await submitPayment(payment_amount) });
      if (res?.status === API_Status_List.ERROR) return await Alerts.errorToast({ text: "Ocurrió un error al registrar el pago." });
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
        <form onSubmit={handleSubmit} className="flex flex-column gap-5 justify-content-center align-items-center">
          <CostumerDropdown data={costumers} selectedCostumer={selectedCostumer} handleSelectCostumer={handleSelectCostumer} />
          <TextField input="payment_amount" onChange={handleChange} label="Monto" value={values.amount} invalid={errors.payment_amount && true} helperText={errors.payment_amount} />
          <Button type="submit" label="Agregar" severity="info" />
        </form>
      </Card>
    </div>
  );
}

export default AddPayment;
