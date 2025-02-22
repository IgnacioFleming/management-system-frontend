import { customRedirect } from "../../helpers/utils";
import helpers from "../utils/utils";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/sessions`;

export default class SessionsApiCall {
  static async register(user) {
    try {
      const options = helpers.requestOptionsHandler(user, "POST");
      const result = await fetch(`${path}/register`, { ...options, credentials: "include" });
      const jsonResult = await result.json();
      return jsonResult;
    } catch (error) {
      return new Error(error);
    }
  }
  static async login(credentials) {
    try {
      const options = helpers.requestOptionsHandler(credentials, "POST");
      const result = await fetch(`${path}/login`, { ...options, credentials: "include" });
      const jsonResult = await result.json();
      return jsonResult;
    } catch (error) {
      return new Error(error);
    }
  }
  static async logout() {
    try {
      const result = await helpers.requestHandle(`${path}/logout`, { method: "POST" });
      return result;
    } catch (error) {
      return new Error(error);
    }
  }

  static async checkSession() {
    try {
      const result = await helpers.requestHandle(`${path}/checkSession`);
      return result;
    } catch (error) {
      customRedirect("/login");
      return new Error(error);
    }
  }
}
