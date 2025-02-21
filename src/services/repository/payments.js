import ApiCall from "./apiService";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/payments`;
export default class PaymentsApiCall extends ApiCall {
  constructor() {
    super(path);
  }
}
