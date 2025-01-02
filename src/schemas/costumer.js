import * as Yup from "yup";

export const costumerSchema = Yup.object().shape({
  name: Yup.string().max(50).required(),
  description: Yup.string().required(),
  logo: Yup.string().url(),
  account_number: Yup.number().integer().positive().required(),
});
