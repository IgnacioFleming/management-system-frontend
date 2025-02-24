import { Button } from "primereact/button";
import Alerts from "../../helpers/alerts/alerts";

function ConfirmationButtons({ id, handleUpdateRegister, setEditItems }) {
  const updateWithAlert = async () => {
    await Alerts.warnAlert({ title: "Advertencia!", text: "Estás seguro que querés actualizar este registro?", hasCancellation: true, confirmCallback: () => handleUpdateRegister(id), confirmButtonText: "Guardar", cancelButtonText: "Cancelar" });
  };
  return (
    <div className="flex flex-column gap-2 align-items-center w-8rem">
      <Button className="w-full flex justify-content-center" severity="warning" onClick={updateWithAlert}>
        Guardar
      </Button>
      <Button className="w-full flex justify-content-center" severity="danger" onClick={() => setEditItems(null)}>
        Cancelar
      </Button>
    </div>
  );
}

export default ConfirmationButtons;
