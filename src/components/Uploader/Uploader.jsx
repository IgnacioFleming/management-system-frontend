import { FileUpload } from "primereact/fileupload";
import { useState } from "react";

function Uploader({ label, name, accept, ptRef }) {
  const [file, setFile] = useState("");

  const handleSelect = (filename) => {
    setFile(filename);
  };
  const handleRemove = () => {
    setFile("");
  };
  const emptyTemplate = () => <div>No file selected.</div>;

  const uploadOptions = { style: { display: "none" } };

  const cancelOptions = { style: { display: !file && "none" } };

  const chooseOptions = { className: "bg-green-500 border-green-500" };

  const pt = { badge: { root: { style: { display: "none" } } } };

  return <FileUpload chooseLabel={label} chooseOptions={chooseOptions} ref={ptRef} name={name} accept={accept} multiple={false} maxFileSize={1000000} uploadOptions={uploadOptions} cancelOptions={cancelOptions} onSelect={handleSelect} onRemove={handleRemove} emptyTemplate={emptyTemplate} pt={pt} />;
}

export default Uploader;
