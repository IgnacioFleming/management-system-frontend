import ApiCall from "./apiService";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/costumers`;
export default class CostumersApiCall extends ApiCall {
  constructor() {
    super(path);
  }
}
