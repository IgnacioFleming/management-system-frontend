import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { formatCurrency } from "../../utils/utils";

export const InputField = ({ input, inputName, isNumber = false }) => {
  const [inputContent, setInputContent] = useState(input[inputName]);
  console.log(typeof input[inputName], inputName);
  const handleChange = (e) => setInputContent(e.target.value);
  const value = inputName === "price" ? formatCurrency(inputContent) : inputContent;
  let keyfilter = inputName === "price" ? "num" : isNumber ? "int" : null;

  return <InputText keyfilter={keyfilter} name={inputName} onChange={handleChange} value={value} />;
};
