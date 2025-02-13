import { useRef } from "react";
import { importXlsx } from "../../helpers/importXlsx";
import { Button } from "primereact/button";
import Uploader from "../Uploader/Uploader";
import { createFormData } from "../../helpers/createFormData";

function ImportButton({ service }) {
  const fileRef = useRef(null);

  const handleImportSubmit = async (e) => {
    e.preventDefault();
    const sheetData = await importXlsx(fileRef.current);
    await Promise.all(
      sheetData.map(async (item) => {
        const formData = createFormData(item);
        return await service.create(formData);
      })
    );
  };

  return (
    <form className="flex flex-column gap-3" onSubmit={handleImportSubmit}>
      <div>Importá un archivo Excel con los productos a agregar:</div>
      <div>
        <Uploader label="Subir Archivo" name="file" ptRef={fileRef} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
      </div>
      <div className="flex justify-content-center">
        <Button label="Crear" type="submit" />
      </div>
    </form>
  );
}

export default ImportButton;
