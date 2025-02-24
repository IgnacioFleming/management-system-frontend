import ConfirmationButtons from "./ConfirmationButtons";
import InitialButtons from "./InitialButtons";

const ActionsDataTable = ({ editingId, id, setEditItems, handleUpdateRegister, updateRegister, deleteRegister, deletion, updating }) => {
  return <>{editingId === id ? <ConfirmationButtons handleUpdateRegister={handleUpdateRegister} id={id} setEditItems={setEditItems} /> : <InitialButtons id={id} updating={updating} deletion={deletion} updateRegister={updateRegister} deleteRegister={deleteRegister} />}</>;
};

export default ActionsDataTable;
