export const formatCurrency = (value) => {
  if (value?.toLocaleString.style === "currency") return value.toLocaleString("en-US", { style: "none" });
  return value?.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

export const API_Status_List = {
  UNAUTHORIZED: "unauthorized",
  SUCCESS: "success",
  ERROR: "error",
};
export const authRedirection = (status, redirectURL) => {
  if (status === API_Status_List.UNAUTHORIZED) {
    window.history.pushState({}, "", redirectURL);
    return window.dispatchEvent(new PopStateEvent("popstate"));
  }
  return;
};

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, 0);
  const month = String(date.getMonth()).padStart(2, 0);
  const year = String(date.getFullYear()).padStart(2, 0);
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

export const addModes = {
  manual: "Manual",
  import: "Importar Excel",
};

export const customRedirect = (path) => {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

export const inputTypes = {
  ANY: "any",
  INT: "int",
  FLOAT: "float",
  CURR: "currency",
  DATE: "date",
};

export const customColors = {
  DANGER: "#d32f2f",
  SUCCESS: "#22c55e",
};
