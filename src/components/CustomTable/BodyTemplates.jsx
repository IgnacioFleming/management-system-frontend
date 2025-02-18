import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import Uploader from "../Uploader/Uploader";
import { InputField } from "../InputField/InputField";
import { formatCurrency, inputTypes } from "../../helpers/utils";
import ActionsDataTable from "../Actions/ActionsDataTable";

const getDetailButtonTemplate = (path, handleDetail) => {
  return function detailButtonTemplate(item) {
    if (path) {
      return (
        <Link to={`${path}/${item.id}`}>
          <Button label="Ver Detalle" />
        </Link>
      );
    }
    return <Button onClick={() => handleDetail(item.salesId)} label="Ver Detalle" />;
  };
};

const getBodyTemplate = (editItems, ptRef) => {
  return function bodyTemplate(field, isEditable, inputType) {
    if (field === "thumbnail" || field === "logo") return imageBodyTemplate(editItems, ptRef);
    return fieldBodyTemplate(field, isEditable, inputType, editItems);
  };
};

const fieldBodyTemplate = (field, isEditable, inputType, editItems) => {
  return function body(item) {
    const content = inputType === inputTypes.CURR ? formatCurrency(item[field]) : item[field];
    if (!isEditable) return content;
    return editItems === item.id ? <InputField inputName={field} input={item} inputType={inputType} /> : content;
  };
};

const imageBodyTemplate = (editItems, ptRef) => {
  return function bodyTemplate(item) {
    return (
      <div className="flex flex-column gap-2 align-items-start">
        <img src={item?.thumbnail || item?.logo} alt={`Foto de ${item?.name}`} className="w-6rem h-6rem shadow-2 border-round" style={{ objectFit: "cover" }} />
        {editItems === item?.id && <Uploader label="Subir Imagen" name="thumbnail" ptRef={ptRef} accept="image/*" />}
      </div>
    );
  };
};

const actionsBodyTemplate = (editItems, setEditItems, updateRegister, handleDelete, updateItem, deletion, updating, is_sales) => {
  return function bodyTemplate(item) {
    const actionsProps = { editingId: editItems, setEditItems, id: is_sales ? item.salesId : item.id, updateRegister, deleteRegister: handleDelete, handleUpdateRegister: updateItem, deletion, updating };
    return <ActionsDataTable {...actionsProps} />;
  };
};

const footerTemplate = (items, label) => `En total hay ${items ? items.length : 0} ${label}.`;

export default {
  getDetailButtonTemplate,
  getBodyTemplate,
  actionsBodyTemplate,
  footerTemplate,
};
