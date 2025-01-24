import { Button } from "primereact/button";

const ActionsDataTable = ({ editingId, id, handleUpdateRegister, updateRegister, deleteRegister, deletion, updating }) => {
  if (editingId === id) {
    console.log(editingId, id);
    return (
      <Button severity="warning" onClick={() => handleUpdateRegister(id)}>
        Guardar
      </Button>
    );
  }
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
};

export default ActionsDataTable;
