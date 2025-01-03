import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { formatCurrency } from "../../utils/utils";

export const InputField = ({ input, inputName, isNumber = false }) => {
  const [inputContent, setInputContent] = useState(input[inputName]);
  const handleChange = (e) => setInputContent(e.target.value);
  const value = inputName === "price" ? formatCurrency(inputContent) : inputContent;

  return <InputText keyfilter={isNumber && "int"} name={inputName} onChange={handleChange} value={value} />;
};
