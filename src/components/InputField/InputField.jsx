import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { inputTypes } from "../../helpers/utils";

export const InputField = ({ input, inputName, inputType = inputTypes.ANY }) => {
  const [inputContent, setInputContent] = useState(input[inputName]);
  const handleChange = (e) => setInputContent(e.target.value);
  let keyfilter;
  if (inputType === inputTypes.CURR || inputType === inputTypes.FLOAT) keyfilter = "num";
  if (inputType === inputTypes.INT) keyfilter = "int";
  if (inputType === inputTypes.ANY) keyfilter = null;
  return <InputText keyfilter={keyfilter} name={inputName} onChange={handleChange} value={inputContent} pt={{ root: { style: { width: inputType === (inputTypes.ANY || inputTypes.DATE) ? "200px" : "100px" } } }} />;
};
