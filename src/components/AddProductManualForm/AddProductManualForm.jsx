import { useRef } from "react";
import { useFormik } from "formik";
import { productSchema } from "../../schemas/product";
import TextField from "../TextField/TextField";
import { Button } from "primereact/button";
import { productsService } from "../../services";
import Uploader from "../Uploader/Uploader";
import { createFormData } from "../../helpers/createFormData";
import Alerts from "../../helpers/alerts/alerts";

const initialValues = {
  name: "",
  price: "",
  cost: "",
  stock: "",
  category: "",
  description: "",
};

function AddProductManualForm() {
  const fileRef = useRef(null);
  const addProduct = async (data) => {
    try {
      const formData = createFormData(data, fileRef);
      await productsService.create(formData);
      resetForm();
      if (fileRef.current) fileRef.current.clear();
      await Alerts.successAlert({ title: "Producto creado!", toast: true, position: "top-end" });
    } catch (error) {
      await Alerts.errorAlert({ text: error, toast: true, position: "top-end" });
    }
  };
  const addItemWithAlert = async (data) => {
    await Alerts.addItem({ title: "Agregar Producto", hasCancellation: true, confirmCallback: () => addProduct(data) });
  };

  const { handleChange, handleSubmit, resetForm, values, errors } = useFormik({ initialValues, validationSchema: productSchema, validateOnChange: false, onSubmit: addItemWithAlert });

  return (
    <form id="form" className="flex flex-column row-gap-4" onSubmit={handleSubmit} encType="multipart/form-data">
      <TextField label={"Nombre"} input={"name"} onChange={handleChange} value={values.name} invalid={errors.name && true} helperText={errors.name} />
      <TextField label={"Precio"} input={"price"} onChange={handleChange} value={values.price} invalid={errors.price && true} helperText={errors.price} />
      <TextField label={"Costo"} input={"cost"} onChange={handleChange} value={values.cost} invalid={errors.cost && true} helperText={errors.cost} />
      <TextField label={"Stock"} input={"stock"} onChange={handleChange} value={values.stock} invalid={errors.stock && true} helperText={errors.stock} />
      <TextField label={"Categoría"} input={"category"} onChange={handleChange} value={values.category} invalid={errors.category && true} helperText={errors.category} />
      <TextField label={"Descripción"} input={"description"} onChange={handleChange} value={values.description} invalid={errors.description && true} helperText={errors.description} />

      <Uploader accept="image/*" label="Imagen del Producto" name="file" ptRef={fileRef} />
      <div className="flex justify-content-center">
        <Button label="Crear" type="submit" />
      </div>
    </form>
  );
}

export default AddProductManualForm;
