import { Button } from "primereact/button";

const ActionsDataTable = ({ editingId, id, setEditItems, handleUpdateRegister, updateRegister, deleteRegister, deletion, updating }) => {
  if (editingId === id) {
    return (
      <div className="flex flex-column gap-2 align-items-center w-8rem">
        <Button className="w-full flex justify-content-center" severity="warning" onClick={() => handleUpdateRegister(id)}>
          Guardar
        </Button>
        <Button className="w-full flex justify-content-center" severity="danger" onClick={() => setEditItems(null)}>
          Cancelar
        </Button>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", gap: 10 }}>
        {updating && (
          <Button severity="info" onClick={() => updateRegister(id)}>
            <i className="pi pi-pen-to-square"></i>
          </Button>
        )}
        {deletion && (
          <Button severity="danger" onClick={() => deleteRegister(id)}>
            <i className="pi pi-trash"></i>
          </Button>
        )}
      </div>
    );
  }
};

export default ActionsDataTable;
