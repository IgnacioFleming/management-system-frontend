import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./AddProducts.css";
import AddProductInput from "./AddProductInput";

function AddProducts() {
  return (
    <div className="card-container">
      <div className="card">
        <Card pt={{ title: { className: "m-4" } }} title="Alta de Productos" className="flex justify-content-center">
          <form className="flex flex-column row-gap-5">
            <AddProductInput label={"Nombre"} input={"name"} />
            <AddProductInput label={"Precio"} input={"price"} />
            <AddProductInput label={"Stock"} input={"stock"} />
            <AddProductInput label={"Categoría"} input={"category"} />
            <AddProductInput label={"Descripción"} input={"description"} />
            <AddProductInput label={"Imagen"} input={"thumbnail"} />
            <div className="flex justify-content-center">
              <Button label="Crear" type="submit" />
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default AddProducts;

// name: "Paracetamol 500mg",
// price: 120.0,
// stock: 150,
// category: "analgesicos",
// description: "Alivio temporal del dolor y reducción de fiebre.",
// costumer: "Farmacia Saludable",
// thumbnail: "https://www.farmaciasdrahorro.com.ar/wp-content/uploads/2020/11/PARACETAMOL_ISA_5___X_1__COMP_BLISTER.png",
// status: "PAYED",
