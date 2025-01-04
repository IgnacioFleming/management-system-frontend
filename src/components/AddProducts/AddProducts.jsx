import { Card } from "primereact/card";
import { Button } from "primereact/button";

import { Formik } from "formik";
import { productSchema } from "../../schemas/product";
import ProductsApiCall from "../../services/products";
import styles from "./AddProducts.module.css";
import AddInput from "../AddInput/AddProductInput";

const initialValues = {
  name: "",
  price: "",
  stock: "",
  category: "",
  description: "",
  thumbnail: "",
};

function AddProducts() {
  const handleSubmit = (data) => ProductsApiCall.create(data);
  return (
    <div className={styles.cardContainer}>
      <div className={`card ${styles.card}`}>
        <Card pt={{ title: { className: "m-4" } }} title="Alta de Productos" className="flex justify-content-center">
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={productSchema} validateOnChange={false}>
            {(props) => (
              <form className="flex flex-column row-gap-5" onSubmit={props.handleSubmit}>
                <AddInput label={"Nombre"} input={"name"} onChange={props.handleChange} value={props.values.name} invalid={props.errors.name && true} helperText={props.errors.name} />
                <AddInput label={"Precio"} input={"price"} onChange={props.handleChange} value={props.values.price} invalid={props.errors.price && true} helperText={props.errors.price} />
                <AddInput label={"Stock"} input={"stock"} onChange={props.handleChange} value={props.values.stock} invalid={props.errors.stock && true} helperText={props.errors.stock} />
                <AddInput label={"Categoría"} input={"category"} onChange={props.handleChange} value={props.values.category} invalid={props.errors.category && true} helperText={props.errors.category} />
                <AddInput label={"Descripción"} input={"description"} onChange={props.handleChange} value={props.values.description} invalid={props.errors.description && true} helperText={props.errors.description} />
                <AddInput label={"Imagen"} input={"thumbnail"} onChange={props.handleChange} value={props.values.thumbnail} invalid={props.errors.thumbnail && true} helperText={props.errors.thumbnail} />
                <div className="flex justify-content-center">
                  <Button label="Crear" type="submit" />
                </div>
              </form>
            )}
          </Formik>
        </Card>
      </div>
    </div>
  );
}

export default AddProducts;
