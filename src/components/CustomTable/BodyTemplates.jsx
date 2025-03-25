import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import Uploader from "../Uploader/Uploader";
import { InputField } from "../InputField/InputField";
import { customColors, formatCurrency, formatDate, inputTypes } from "../../helpers/utils";
import ActionsDataTable from "../Actions/ActionsDataTable";

const getDetailButtonTemplate = (path, handleDetail) => {
  return function detailButtonTemplate(item) {
    if (path) {
      return (
        <Link to={`${path}/${item.costumer_id || item.id}`}>
          <Button label="Show Details" />
        </Link>
      );
    }
    return <Button onClick={() => handleDetail(item.salesId)} label="Show Details" />;
  };
};

const getBodyTemplate = (editItems, ptRef) => {
  return function bodyTemplate(field, isEditable, inputType, color) {
    if (field === "thumbnail" || field === "logo") return imageBodyTemplate(editItems, ptRef);
    return fieldBodyTemplate(field, isEditable, inputType, editItems, color);
  };
};

const fieldBodyTemplate = (field, isEditable, inputType, editItems, color) => {
  return function body(item) {
    let content;
    if (field === "amount") item[field] < 0 ? (color = customColors.DANGER) : (color = customColors.SUCCESS);
    if (!inputType || inputType) content = item[field];
    if (inputType === inputTypes.CURR) content = formatCurrency(item[field]);
    if (inputType === inputTypes.DATE) content = formatDate(item[field]);
    if (!isEditable) return <div style={{ color }}>{content}</div>;
    return editItems === item.id ? <InputField inputName={field} input={item} inputType={inputType} /> : <div style={{ color }}>{content}</div>;
  };
};

const imageBodyTemplate = (editItems, ptRef) => {
  return function bodyTemplate(item) {
    return (
      <div className="flex flex-column gap-2 align-items-start">
        <img src={item?.thumbnail || item?.logo} alt={`Photo of ${item?.name}`} className="w-6rem h-6rem shadow-2 border-round " style={{ objectFit: "cover" }} />
        {editItems === item?.id && <Uploader label="Upload Image" name="thumbnail" ptRef={ptRef} accept="image/*" />}
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

const footerTemplate = (items, label) => `In total there ${items?.length === 0 ? "is" : "are"} ${items ? items.length : 0} ${label}.`;

export default {
  getDetailButtonTemplate,
  getBodyTemplate,
  actionsBodyTemplate,
  footerTemplate,
};
