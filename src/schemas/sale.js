import * as Yup from "yup";

export const saleSchema = Yup.object().shape({
  sale_id: Yup.number().integer().positive().required(),
  customer_id: Yup.number().integer().positive().required(),
  items_quantity: Yup.number().integer().positive().required(),
  total_amount: Yup.number().positive().required(),
  is_payed: Yup.boolean(),
  is_delivered: Yup.boolean(),
});
