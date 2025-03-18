import { useRef } from "react";
import { importXlsx } from "../../helpers/importXlsx";
import { Button } from "primereact/button";
import Uploader from "../Uploader/Uploader";
import { createFormData } from "../../helpers/createFormData";
import Alerts from "../../helpers/alerts/alerts";

function ImportButton({ service }) {
  const fileRef = useRef(null);

  const submitWithAlert = async (e) => {
    e.preventDefault();
    await Alerts.warnAlert({ title: "Atencion!", text: "Estás seguro que querés importar los items por archivo?", hasCancellation: true, confirmCallback: () => handleImportSubmit(), confirmButtonText: "Importar" });
  };
  const handleImportSubmit = async () => {
    const sheetData = await importXlsx(fileRef.current);
    await Promise.all(
      sheetData.map(async (item) => {
        const formData = createFormData(item);
        return await service.create(formData);
      })
    );
  };

  return (
    <form className="flex flex-column gap-3" onSubmit={submitWithAlert}>
      <div>Importá un archivo Excel con los productos a agregar:</div>
      <div>
        <Uploader label="Subir Archivo" name="file" ptRef={fileRef} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
      </div>
      <div className="flex justify-content-center">
        <Button label="Importar" type="submit" />
      </div>
    </form>
  );
}

export default ImportButton;
