import { Button } from "primereact/button";
import Alerts from "../../helpers/alerts/alerts";

function InitialButtons({ id, updating, deletion, updateRegister, deleteRegister }) {
  const deleteWithAlert = async () => {
    await Alerts.warnAlert({ title: "Warning!", text: "Are you sure you want to delete this register?", hasCancellation: true, confirmCallback: async () => await deleteRegister(id), confirmButtonText: "Delete", cancelButtonText: "Cancel" });
  };
  return (
    <div className="flex flex-column gap-1">
      <div>
        {updating && (
          <Button severity="info" onClick={() => updateRegister(id)}>
            <i className="pi pi-pen-to-square"></i>
          </Button>
        )}
      </div>
      <div>
        {deletion && (
          <Button severity="danger" onClick={deleteWithAlert}>
            <i className="pi pi-trash"></i>
          </Button>
        )}
      </div>
    </div>
  );
}

export default InitialButtons;
