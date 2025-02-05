import { FileUpload } from "primereact/fileupload";
import { useRef, useState } from "react";
import { importXlsx } from "../../helpers/importXlsx";
import { Button } from "primereact/button";

function ImportButton({ service }) {
  const fileRef = useRef(null);
  const [file, setFile] = useState(false);

  const handleXlsxSelect = () => {
    setFile(true);
  };

  const handleImportSubmit = async (e) => {
    e.preventDefault();
    const sheetData = await importXlsx(fileRef.current);
    await Promise.all(
      sheetData.map(async (item) => {
        const formData = new FormData();
        for (const key in item) {
          formData.append(key, item[key]);
        }
        return await service.create(formData);
      })
    );
  };

  const handleXlsxRemove = () => {
    setFile(false);
  };

  const handleRemove = () => {
    setFile(false);
  };

  const emptyTemplate = () => <div>No se ha seleccionado un archivo.</div>;

  const uploadOptions = { style: { display: "none" } };

  const cancelOptions = { style: { display: !file && "none" } };

  const chooseOptions = { className: "bg-green-500 border-green-500" };

  const pt = { badge: { root: { style: { display: "none" } } } };

  return (
    <form className="flex flex-column gap-3" onSubmit={handleImportSubmit}>
      <div>Importá un archivo Excel con los productos a agregar:</div>
      <div>
        <FileUpload ref={fileRef} chooseLabel="Subir Archivo" name="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" multiple={false} maxFileSize={1000000} uploadOptions={uploadOptions} chooseOptions={chooseOptions} cancelOptions={cancelOptions} onSelect={handleXlsxSelect} onRemove={handleXlsxRemove} onClear={handleRemove} emptyTemplate={emptyTemplate} pt={pt} />
      </div>
      <div className="flex justify-content-center">
        <Button label="Crear" type="submit" />
      </div>
    </form>
  );
}

export default ImportButton;
