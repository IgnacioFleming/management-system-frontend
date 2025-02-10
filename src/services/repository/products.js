import ApiCall from "./apiService";

const path = `${import.meta.env.VITE_API_BASE_URL}/api/products`;

export default class ProductsApiCall extends ApiCall {
  constructor() {
    super(path);
  }
}
