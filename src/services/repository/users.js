import ApiCall from "./apiService";
import helpers from "../utils/utils";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/users`;

export default class UsersApiCall extends ApiCall {
  constructor() {
    super(path);
  }

  async handleUserState(id) {
    try {
      const result = await helpers.requestHandle(`${this.path}/${id}/handleState`, { method: "POST" });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
