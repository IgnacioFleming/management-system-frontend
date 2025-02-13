import { useRef } from "react";
import { Formik } from "formik";
import { productSchema } from "../../schemas/product";
import TextField from "../TextField/TextField";
import { Button } from "primereact/button";
import { productsService } from "../../services";
import Uploader from "../Uploader/Uploader";
import { createFormData } from "../../helpers/createFormData";

const initialValues = {
  name: "",
  price: "",
  stock: "",
  category: "",
  description: "",
};

function AddProductManualForm() {
  const fileRef = useRef(null);
  const handleSubmit = async (data) => {
    const formData = createFormData(data, fileRef);
    await productsService.create(formData);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={productSchema} validateOnChange={false}>
      {(props) => (
        <form id="form" className="flex flex-column row-gap-5" onSubmit={props.handleSubmit} encType="multipart/form-data">
          <TextField label={"Nombre"} input={"name"} onChange={props.handleChange} value={props.values.name} invalid={props.errors.name && true} helperText={props.errors.name} />
          <TextField label={"Precio"} input={"price"} onChange={props.handleChange} value={props.values.price} invalid={props.errors.price && true} helperText={props.errors.price} />
          <TextField label={"Stock"} input={"stock"} onChange={props.handleChange} value={props.values.stock} invalid={props.errors.stock && true} helperText={props.errors.stock} />
          <TextField label={"Categoría"} input={"category"} onChange={props.handleChange} value={props.values.category} invalid={props.errors.category && true} helperText={props.errors.category} />
          <TextField label={"Descripción"} input={"description"} onChange={props.handleChange} value={props.values.description} invalid={props.errors.description && true} helperText={props.errors.description} />

          <Uploader accept="image/*" label="Imagen del Producto" name="file" ptRef={fileRef} />
          <div className="flex justify-content-center">
            <Button label="Crear" type="submit" />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default AddProductManualForm;
