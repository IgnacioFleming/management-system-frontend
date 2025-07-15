import { API_Status_List } from "../../helpers/utils";
import helpers from "../utils/utils";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/sessions`;

export default class SessionsApiCall {
  static async register(user) {
    try {
      const options = helpers.requestOptionsHandler(user, "POST");
      const result = await fetch(`${path}/register`, options);
      const jsonResult = await result.json();
      return jsonResult;
    } catch (error) {
      return new Error(error);
    }
  }
  static async login(credentials) {
    try {
      const options = helpers.requestOptionsHandler(credentials, "POST");
      const result = await fetch(`${path}/login`, options);
      const jsonResult = await result.json();
      jsonResult?.payload?.token && localStorage.setItem("backoffice_manager_auth_token", JSON.stringify(jsonResult?.payload?.token));
      return jsonResult;
    } catch (error) {
      return new Error(error);
    }
  }
  static async demoLogin() {
    try {
      const options = helpers.requestOptionsHandler({ username: "", password: "" }, "POST");
      const result = await fetch(`${path}/demo-login`, options);
      const jsonResult = await result.json();
      jsonResult?.payload?.token && localStorage.setItem("backoffice_manager_auth_token", JSON.stringify(jsonResult?.payload?.token));
      return jsonResult;
    } catch (error) {
      return new Error(error);
    }
  }
  static async logout() {
    try {
      const result = await helpers.requestHandle(`${path}/logout`, { method: "POST", auth: false });
      if (result.status === API_Status_List.SUCCESS) localStorage.removeItem("backoffice_manager_auth_token");
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
      return new Error(error);
    }
  }
}
