import { Link, useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import ProductsApiCall from "../../services/products";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { formatCurrency } from "../../utils/utils";

function ProductDetail() {
  const { id } = useParams();
  const { data } = useGetData(ProductsApiCall, id);
  const header = () => {
    return (
      <div className="flex justify-content-center p-3">
        <img className="w-8" src={data.thumbnail} alt={data.name} />
      </div>
    );
  };

  const subtitle = () => {
    return String(data.category).charAt(0).toUpperCase() + String(data.category).slice(1);
  };

  const footer = () => {
    return (
      <Link to="/products">
        <Button label="Volver" />
      </Link>
    );
  };
  return (
    <>
      <div className="card flex align-items-center justify-content-center" style={{ height: "calc(100vh - 6rem)" }}>
        <Card footer={footer} header={header} title={data.name} subTitle={subtitle} className="w-5">
          <p className="text-color-secondary text-left flex flex-column gap-3 m-0">
            {data.description}
            <span>
              <strong>Precio:</strong> {formatCurrency(data.price)}
            </span>
            <span>
              <strong>Stock:</strong> {data.stock}
            </span>
          </p>
        </Card>
      </div>
    </>
  );
}

export default ProductDetail;
