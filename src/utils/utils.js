export const formatCurrency = (value) => {
  if (value.toLocaleString.style === "currency") return value.toLocaleString("en-US", { style: "none" });
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
