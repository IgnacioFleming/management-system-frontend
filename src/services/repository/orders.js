import helpers from "../utils/utils";
import ApiCall from "./apiService";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/orders`;
export default class OrdersApiCall extends ApiCall {
  constructor() {
    super(path);
  }
  async getById(id) {
    try {
      const payload = await helpers.requestHandle(`${this.path}/sale_id/${id}`);
      return payload;
    } catch (error) {
      console.log(error);
    }
  }
}
