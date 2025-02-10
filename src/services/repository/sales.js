import ApiCall from "./apiService";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/sales`;
export default class SalesApiCall extends ApiCall {
  constructor() {
    super(path);
  }
}
