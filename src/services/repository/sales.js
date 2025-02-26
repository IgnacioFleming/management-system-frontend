import ApiCall from "./apiService";
import helpers from "../utils/utils.js";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/sales`;
export default class SalesApiCall extends ApiCall {
  constructor() {
    super(path);
  }
  async getMonthlySales() {
    try {
      const payload = await helpers.requestHandle(`${this.path}/monthlySales`);
      return payload;
    } catch (error) {
      console.log("Exception throwed, ", error);
    }
  }
}
