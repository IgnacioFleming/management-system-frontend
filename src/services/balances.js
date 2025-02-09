import ApiCall from "./apiService";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/balances`;
export default class BalancesApiCall extends ApiCall {
  constructor() {
    super(path);
  }
}
