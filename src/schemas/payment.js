import * as Yup from "yup";

export const paymentSchema = Yup.object().shape({
  payment_amount: Yup.number().positive().required(),
});
