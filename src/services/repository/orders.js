import ApiCall from "./apiService";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/orders`;
export default class OrdersApiCall extends ApiCall {
  constructor() {
    super(path);
  }
}
