import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useGetData } from "../../hooks/useGetData";
import BalancesApiCall from "../../services/balances";
import { formatCurrency } from "../../utils/utils";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";

function Balances() {
  const { data, refreshData } = useGetData(BalancesApiCall);
  const [filters, setFilters] = useState({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const nameBodyTemplate = (balance) => {
    return (
      <div className="flex align-items-center gap-3">
        <img src={balance.logo} alt={balance.logo} className="w-6rem h-6rem shadow-2 border-round" style={{ objectFit: "cover" }} />
        <div>{balance.name}</div>
      </div>
    );
  };

  const balanceAmountBodyTemplate = ({ balance_amount }) => {
    return formatCurrency(balance_amount);
  };

  const showDetailBodyTemplate = ({ costumer_id }) => {
    return (
      <Link to={`/balances/${costumer_id}`}>
        <Button>Ver Detalle</Button>
      </Link>
    );
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
          <span className="text-xl text-900 font-bold">Ventas</span>
          <div className="flex justify-content-end gap-2">
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar en Ventas" />
            </IconField>
            <Button onClick={refreshData} icon="pi pi-refresh" rounded raised />
          </div>
        </div>
      </>
    );
  };
  const header = renderHeader();
  return (
    <>
      <DataTable value={data} header={header} filters={filters} removableSort paginator rows={5}>
        <Column header="Número de Cuenta" field="account_number" sortable />
        <Column header="Cliente" field="name" body={nameBodyTemplate} sortable />
        <Column header="Saldo" field="balance_amount" body={balanceAmountBodyTemplate} sortable />
        <Column body={showDetailBodyTemplate}></Column>
      </DataTable>
    </>
  );
}

export default Balances;
