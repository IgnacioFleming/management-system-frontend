import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  name: Yup.string().max(50).required(),
  price: Yup.number().positive().required(),
  stock: Yup.number().integer().positive().required(),
  category: Yup.string().max(50).required(),
  description: Yup.string().required(),
  thumbnail: Yup.string().url().required(),
});
