import { Button } from "primereact/button";
import Alerts from "../../helpers/alerts/alerts";

function ConfirmationButtons({ id, handleUpdateRegister, setEditItems }) {
  const updateWithAlert = async () => {
    await Alerts.warnAlert({ title: "Warning!", text: "Are you sure you want to update this register?", hasCancellation: true, confirmCallback: async () => await handleUpdateRegister(id), confirmButtonText: "Save", cancelButtonText: "Cancel" });
  };
  return (
    <div className="flex flex-column gap-2 align-items-center w-8rem">
      <Button className="w-full flex justify-content-center" severity="warning" onClick={updateWithAlert}>
        Save
      </Button>
      <Button className="w-full flex justify-content-center" severity="danger" onClick={() => setEditItems(null)}>
        Cancel
      </Button>
    </div>
  );
}

export default ConfirmationButtons;
