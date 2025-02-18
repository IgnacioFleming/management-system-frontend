import { useState } from "react";
import CustomTable from "./CustomTable";
import { renderHeader } from "./CustomTableHeader";
import { useGlobalFilter } from "../../hooks/useGlobalFilter";
import BodyTemplates from "./BodyTemplates";

function CustomTableContainer({ label, columns, items, refreshItems, path, extractionFilename, paginator = false, rows, handleDetail, updating = false, handleUpdate, deletion = false, handleDelete, ptRef, dataKey, expandedRows, InnerComponent = null, is_sales = false }) {
  const [editItems, setEditItems] = useState();
  const { globalFilterValue, onGlobalFilterChange, handleRefresh, filters } = useGlobalFilter();

  const updateRegister = (id) => {
    setEditItems(id);
  };

  const updateItem = (id) => {
    handleUpdate(id);
    setEditItems(null);
  };

  const header = renderHeader(label, refreshItems, globalFilterValue, onGlobalFilterChange, handleRefresh);

  const showDetailButton = path || handleDetail;

  const detailButtonTemplate = BodyTemplates.getDetailButtonTemplate(path, handleDetail);

  const getBodyTemplate = BodyTemplates.getBodyTemplate(editItems, ptRef);

  const actionsBodyTemplate = BodyTemplates.actionsBodyTemplate(editItems, setEditItems, updateRegister, handleDelete, updateItem, deletion, updating, is_sales);

  const footer = BodyTemplates.footerTemplate(items, label);

  const props = { header, columns, items, path, extractionFilename, filters, paginator, rows, getBodyTemplate, detailButtonTemplate, actionsBodyTemplate, dataKey, expandedRows, rowExpansionTemplate: InnerComponent, footer, showDetailButton };

  return <CustomTable {...props} />;
}

export default CustomTableContainer;
