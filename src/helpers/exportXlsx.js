import * as XLSX from "xlsx/xlsx.mjs";

export const exportToXlsx = async (json, filename) => {
  const worksheet = XLSX.utils.json_to_sheet(json);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, filename.split(".")[0]);
  XLSX.writeFile(workbook, filename);
};

export const exportSalesXlsx = async (sales, orders, filename) => {
  const salesWorksheet = XLSX.utils.json_to_sheet(sales);
  const ordersWorksheet = XLSX.utils.json_to_sheet(orders);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, salesWorksheet, "sales");
  XLSX.utils.book_append_sheet(workbook, ordersWorksheet, "orders");
  XLSX.writeFile(workbook, filename);
};
