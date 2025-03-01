import Alerts from "../../helpers/alerts/alerts";
import helpers from "../utils/utils";

export default class ApiCall {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    try {
      const payload = await helpers.requestHandle(this.path);
      return payload;
    } catch (error) {
      Alerts.errorAlert({ text: error });
    }
  }

  async create(data) {
    try {
      const options = helpers.requestOptionsHandler(data, "POST");
      const payload = await helpers.requestHandle(this.path, options);
      return payload;
    } catch (error) {
      Alerts.errorAlert({ text: error });
    }
  }

  async update(id, data) {
    try {
      const options = helpers.requestOptionsHandler(data, "PUT");
      const payload = await helpers.requestHandle(`${this.path}/${id}`, options);
      return payload;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      const payload = await helpers.requestHandle(`${this.path}/${id}`, { method: "DELETE" });
      return payload;
    } catch (error) {
      Alerts.errorAlert({ text: error });
    }
  }

  async getById(id) {
    try {
      const payload = await helpers.requestHandle(`${this.path}/${id}`);
      return payload;
    } catch (error) {
      Alerts.errorAlert({ text: error });
    }
  }
}
