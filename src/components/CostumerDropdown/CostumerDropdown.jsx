import { Dropdown } from "primereact/dropdown";

function CostumerDropdown({ data, selectedCostumer, handleSelectCostumer }) {
  const selectedCostumerTemplate = (option, props) => {
    if (option)
      return (
        <div className="flex align-items-center">
          <img alt={option.name} src={option.logo} className="mr-2" style={{ width: "18px", objectFit: "contain", height: "18px" }} />
          <div>{option.name}</div>
        </div>
      );
    return <span>{props.placeholder}</span>;
  };
  const costumerOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img alt={option.name} src={option.logo} className="mr-2" style={{ width: "18px", objectFit: "contain", height: "18px" }} />
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-column row-gap-2">
      <label htmlFor="costumer" className="text-lg">
        Cliente
      </label>
      <Dropdown id="costumer" name="costumer" value={selectedCostumer} onChange={(e) => handleSelectCostumer(e.target.value)} showClear options={data} optionLabel="name" valueTemplate={selectedCostumerTemplate} filter itemTemplate={costumerOptionTemplate} placeholder="Selecciona un Cliente" />
    </div>
  );
}

export default CostumerDropdown;
