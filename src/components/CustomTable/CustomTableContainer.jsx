import { useState } from "react";
import ActionsDataTable from "../Actions/ActionsDataTable";
import CustomTable from "./CustomTable";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FilterMatchMode } from "primereact/api";
import { InputField } from "../InputField/InputField";
import { Link } from "react-router-dom";
import Uploader from "../Uploader/Uploader";
import { formatCurrency } from "../../helpers/utils";

function CustomTableContainer({ label, columns, items, refreshItems, path, extractionFilename, paginator = false, rows, updating = false, handleUpdate, deletion = false, handleDelete, ptRef }) {
  const [editItems, setEditItems] = useState();

  const [filters, setFilters] = useState({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const handleRefresh = () => {
    refreshItems();
    setFilters({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });
    setGlobalFilterValue("");
  };

  const imageBodyTemplate = (item) => {
    return (
      <div className="flex flex-column gap-2 align-items-start">
        <img src={item?.thumbnail} alt={`Foto de ${item?.name}`} className="w-6rem h-6rem shadow-2 border-round" style={{ objectFit: "cover" }} />
        {editItems === item?.id && <Uploader label="Subir Imagen" name="thumbnail" ptRef={ptRef} accept="image/*" />}
      </div>
    );
  };

  const detailButtonTemplate = (item) => {
    return (
      <Link to={`${path}/${item.id}`}>
        <Button label="Ver Detalle" />
      </Link>
    );
  };

  const getBodyTemplate = (field) => {
    let body;
    switch (field) {
      case "thumbnail":
      case "logo":
        body = imageBodyTemplate;
        break;

      case "price":
        body = currencyBodyTemplate(field);
        break;
      default:
        body = fieldBodyTemplate(field);
        break;
    }
    return body;
  };

  const updateRegister = (id) => {
    setEditItems(id);
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let inputValue = value;
    if (inputValue.startsWith("$")) inputValue = value.slice(1);
    inputValue = inputValue.replace(/(\.0{0,2})$/, "");
    let _filters = { ...filters };
    _filters["global"].value = inputValue;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <>
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <span className="text-xl text-900 font-bold">{label}</span>
          <div className="flex justify-content-end gap-2">
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar Producto" />
            </IconField>
            <Button onClick={handleRefresh} icon="pi pi-refresh" rounded raised />
          </div>
        </div>
      </>
    );
  };
  const header = renderHeader();

  const footer = `En total hay ${items ? items.length : 0} productos.`;

  const fieldBodyTemplate = (field) => {
    return function body(item) {
      return editItems === item.id ? <InputField inputName={field} input={item} isNumber /> : item[field];
    };
  };

  const currencyBodyTemplate = (field) => {
    return function body(item) {
      return editItems === item.id ? <InputField inputName={field} input={item} isNumber /> : formatCurrency(item[field]);
    };
  };

  const updateItem = (id) => {
    handleUpdate(id);
    setEditItems(null);
  };

  const actionsBodyTemplate = ({ id }) => {
    const actionsProps = { editingId: editItems, setEditItems, id, updateRegister, deleteRegister: handleDelete, handleUpdateRegister: updateItem, deletion, updating };
    return <ActionsDataTable {...actionsProps} />;
  };

  const props = { header, columns, items, path, extractionFilename, filters, paginator, rows, getBodyTemplate, detailButtonTemplate, actionsBodyTemplate, footer };

  return <CustomTable {...props} />;
}

export default CustomTableContainer;
