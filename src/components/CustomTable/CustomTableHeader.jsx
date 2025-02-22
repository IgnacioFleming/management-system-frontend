import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

export const renderHeader = (label, refreshItems, globalFilterValue, onGlobalFilterChange, handleRefresh) => {
  const refreshAllItems = () => {
    refreshItems();
    handleRefresh();
  };
  return (
    <>
      <div className="flex flex-wrap align-items-center justify-content-between gap-2">
        <span className="text-xl text-900 font-bold">{label}</span>
        <div className="flex justify-content-end gap-2">
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar Producto" />
          </IconField>
          {refreshItems && <Button onClick={refreshAllItems} icon="pi pi-refresh" rounded raised />}
        </div>
      </div>
    </>
  );
};
