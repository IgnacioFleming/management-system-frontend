import { useRef, useState } from "react";
import ProductsApiCall from "../../services/products";
import { Formik } from "formik";
import { productSchema } from "../../schemas/product";
import TextField from "../TextField/TextField";
import { FileUpload } from "primereact/fileupload";
import { Button } from "primereact/button";

const initialValues = {
  name: "",
  price: "",
  stock: "",
  category: "",
  description: "",
};

function AddProductManualForm() {
  const [file, setFile] = useState(false);
  const fileRef = useRef(null);
  const handleRemove = () => {
    setFile(false);
  };

  const handleSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append("file", fileRef.current.getFiles()[0]);
    await ProductsApiCall.create(formData);
  };
  const handleSelect = () => {
    setFile(true);
  };

  const emptyTemplate = () => <div>No se ha seleccionado un archivo.</div>;

  const uploadOptions = { style: { display: "none" } };

  const cancelOptions = { style: { display: !file && "none" } };

  const chooseOptions = { className: "bg-green-500 border-green-500" };

  const pt = { badge: { root: { style: { display: "none" } } } };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={productSchema} validateOnChange={false}>
      {(props) => (
        <form id="form" className="flex flex-column row-gap-5" onSubmit={props.handleSubmit} encType="multipart/form-data">
          <TextField label={"Nombre"} input={"name"} onChange={props.handleChange} value={props.values.name} invalid={props.errors.name && true} helperText={props.errors.name} />
          <TextField label={"Precio"} input={"price"} onChange={props.handleChange} value={props.values.price} invalid={props.errors.price && true} helperText={props.errors.price} />
          <TextField label={"Stock"} input={"stock"} onChange={props.handleChange} value={props.values.stock} invalid={props.errors.stock && true} helperText={props.errors.stock} />
          <TextField label={"Categoría"} input={"category"} onChange={props.handleChange} value={props.values.category} invalid={props.errors.category && true} helperText={props.errors.category} />
          <TextField label={"Descripción"} input={"description"} onChange={props.handleChange} value={props.values.description} invalid={props.errors.description && true} helperText={props.errors.description} />
          {/* <TextField label={"Imagen"} input={"thumbnail"} onChange={props.handleChange} value={props.values.thumbnail} invalid={props.errors.thumbnail && true} helperText={props.errors.thumbnail} /> */}
          <FileUpload chooseLabel="Subir Imagen" ref={fileRef} name="file" accept="image/*" multiple={false} maxFileSize={1000000} uploadOptions={uploadOptions} chooseOptions={chooseOptions} cancelOptions={cancelOptions} onSelect={handleSelect} onRemove={handleRemove} onClear={handleRemove} emptyTemplate={emptyTemplate} pt={pt} />
          <div className="flex justify-content-center">
            <Button label="Crear" type="submit" />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default AddProductManualForm;
