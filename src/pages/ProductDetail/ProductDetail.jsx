import { Link, useParams } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { formatCurrency } from "../../helpers/utils";
import { productsService } from "../../services";
import { useGetDataById } from "../../hooks/useGetDataById";

function ProductDetail() {
  const { id } = useParams();
  const [product] = useGetDataById(productsService, id);
  const header = () => {
    return (
      <div className="flex justify-content-center p-3">
        <img className="w-8" src={product.thumbnail} alt={product.name} />
      </div>
    );
  };

  const subtitle = () => {
    if (product.category && typeof product.category === "string") {
      return String(product.category).charAt(0).toUpperCase() + String(product.category).slice(1);
    }
  };

  const footer = () => {
    return (
      <Link to="/products">
        <Button label="Back" />
      </Link>
    );
  };
  return (
    <>
      <div className="card flex align-items-center justify-content-center" style={{ height: "calc(100vh - 6rem)" }}>
        <Card footer={footer} header={header} title={product.name} subTitle={subtitle} className="w-5">
          <p className="text-color-secondary text-left flex flex-column gap-3 m-0">
            {product.description}
            <span>
              <strong>Precio:</strong> {formatCurrency(product.price)}
            </span>
            <span>
              <strong>Stock:</strong> {product.stock}
            </span>
          </p>
        </Card>
      </div>
    </>
  );
}

export default ProductDetail;
