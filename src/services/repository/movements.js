import ApiCall from "./apiService";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/movements`;

export default class MovementsApiCall extends ApiCall {
  constructor() {
    super(path);
  }
}
