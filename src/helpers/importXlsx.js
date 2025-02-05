import * as XLSX from "xlsx/xlsx.mjs";

export const importXlsx = async (fileRef) => {
  const file = fileRef.getFiles()[0];
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const sheetData = XLSX.utils.sheet_to_json(sheet);
  return sheetData;
};
