export const formatCurrency = (value) => {
  if (value.toLocaleString.style === "currency") return value.toLocaleString("en-US", { style: "none" });
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

export const authRedirection = ({ redirectURL }) => {
  window.location.pathname = redirectURL;
};

export const API_Status_List = {
  UNAUTHORIZED: "unauthorized",
  SUCCESS: "success",
  ERROR: "error",
};
