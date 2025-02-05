import * as XLSX from "xlsx/xlsx.mjs";

export const exportToXlsx = async (json, filename) => {
  const worksheet = XLSX.utils.json_to_sheet(json);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, filename.split(".")[0]);
  XLSX.writeFile(workbook, filename);
};
