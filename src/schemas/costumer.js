import * as Yup from "yup";

export const costumerSchema = Yup.object().shape({
  name: Yup.string().max(50).required(),
  account_number: Yup.number().integer().positive().required(),
});
