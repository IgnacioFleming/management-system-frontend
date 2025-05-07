export const SALES_ACTION_TYPES = {
  SET_COSTUMERS: "SET_COSTUMERS",
  SELECT_COSTUMER: "SELECT_COSTUMER",
  SET_INITIAL_DATA: "SET_INITIAL_DATA",
  FILTER_ITEM: "FILTER_ITEM",
  REMOVE_FILTERED_ITEM: "REMOVE_FILTERED_ITEM",
  REFRESH_ITEMS: "REFRESH_ITEMS",
  ADD_QUANTITY: "ADD_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  REFRESH_QUANTITY: "REFRESH_QUANTITY",
};

export const salesReducer = (state, action) => {
  switch (action.type) {
    case SALES_ACTION_TYPES.SET_COSTUMERS: {
      return { ...state, costumers: action.payload };
    }
    case SALES_ACTION_TYPES.SELECT_COSTUMER: {
      if (!action.payload?.id) return { ...state, sale: { ...state.sale, costumer_id: null }, selectedCostumer: null };
      const costumer_id = action.payload.id;
      return { ...state, sale: { ...state.sale, costumer_id }, selectedCostumer: action.payload };
    }

    case SALES_ACTION_TYPES.SET_INITIAL_DATA: {
      const selectedCostumerId = state.selectedCostumer.id;
      const filteredItems = [...state.filteredItems];
      const products = action.payload;
      const productsWithStock = products.filter((product) => product.stock > 0);
      const restItems = productsWithStock.filter((product) => !filteredItems.some((item) => item.id === product.id)).sort((a, b) => a.name.localeCompare(b.name));
      if (!selectedCostumerId) return { ...state, restItems };
      const saleProducts = filteredItems.map((p) => {
        return { product_id: p.id, quantity: 1, amount: p.price };
      });
      const sale = { costumer_id: selectedCostumerId, products: saleProducts };
      return { ...state, restItems, sale };
    }

    case SALES_ACTION_TYPES.FILTER_ITEM: {
      const filteredItems = [...state.filteredItems, action.payload];
      const restItems = state.restItems.filter((item) => item.id !== action.payload.id);
      const products = [...state.sale.products, { product_id: action.payload.id, quantity: 1, amount: action.payload.price }];
      const sale = { ...state.sale, products };
      return { ...state, filteredItems, restItems, sale };
    }

    case SALES_ACTION_TYPES.REMOVE_FILTERED_ITEM: {
      const filteredItems = state.filteredItems.filter((item) => item.id !== action.payload.id);
      const restItems = [action.payload, ...state.restItems].sort((a, b) => a.name.localeCompare(b.name));
      const products = state.sale.products.filter((product) => product.product_id !== action.payload.id);
      const sale = { ...state.sale, products };
      return { ...state, filteredItems, restItems, sale };
    }

    case SALES_ACTION_TYPES.REFRESH_ITEMS: {
      const restItems = [...state.restItems, ...state.filteredItems];
      const filteredItems = [];
      const sale = { ...state.sale, products: [] };
      return { ...state, filteredItems, restItems, sale };
    }

    case SALES_ACTION_TYPES.ADD_QUANTITY: {
      const products = [...state.sale.products];
      const productIndex = products.findIndex((product) => product.product_id === action.payload.id);
      const product = state.sale.products[productIndex];
      const updatedQuantity = product.quantity + 1;
      const price = state.filteredItems.find((item) => item.id === action.payload.id)?.price;
      const updatedAmount = product.amount + price;
      products.splice(productIndex, 1, { ...product, quantity: updatedQuantity, amount: updatedAmount });
      return { ...state, sale: { ...state.sale, products } };
    }

    case SALES_ACTION_TYPES.DECREASE_QUANTITY: {
      const products = [...state.sale.products];
      const productIndex = products.findIndex((product) => product.product_id === action.payload.id);
      const product = state.sale.products[productIndex];
      if (product.quantity <= 1) return state;
      const updatedQuantity = product.quantity - 1;
      const price = state.filteredItems.find((item) => item.id === action.payload.id)?.price;
      const updatedAmount = product.amount - price;
      products.splice(productIndex, 1, { ...product, quantity: updatedQuantity, amount: updatedAmount });
      return { ...state, sale: { ...state.sale, products } };
    }

    case SALES_ACTION_TYPES.REFRESH_QUANTITY: {
      const products = [...state.sale.products];
      const productIndex = products.findIndex((product) => product.product_id === action.payload.id);
      const product = state.sale.products[productIndex];
      const price = state.filteredItems.find((item) => item.id === action.payload.id)?.price;
      products.splice(productIndex, 1, { ...product, quantity: 1, amount: price });
      return { ...state, sale: { ...state.sale, products } };
    }

    default:
      return state;
  }
};
