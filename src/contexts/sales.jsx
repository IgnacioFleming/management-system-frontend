import { createContext, useEffect, useReducer } from "react";
import { SALES_ACTION_TYPES, salesReducer } from "../reducers/sales";
import { useGetData } from "../hooks/useGetData";
import { costumersService, productsService } from "../services";

export const SalesContext = createContext();

const initialState = {
  costumers: [],
  filteredItems: JSON.parse(localStorage.getItem("filteredItems") || "[]"),
  restItems: [],
  selectedCostumer: JSON.parse(localStorage.getItem("costumer") || "null"),
  sale: {},
};

function SalesContextProvider({ children }) {
  const [products] = useGetData(productsService);
  const [costumers] = useGetData(costumersService);
  const [state, dispatch] = useReducer(salesReducer, initialState);

  useEffect(() => {
    dispatch({ type: SALES_ACTION_TYPES.SET_COSTUMERS, payload: costumers });
  }, [costumers]);

  useEffect(() => {
    dispatch({ type: SALES_ACTION_TYPES.SET_INITIAL_DATA, payload: products });
  }, [products]);

  const addQuantity = (item) => {
    dispatch({ type: SALES_ACTION_TYPES.ADD_QUANTITY, payload: item });
  };
  const decreaseQuantity = (item) => {
    dispatch({ type: SALES_ACTION_TYPES.DECREASE_QUANTITY, payload: item });
  };

  const refreshQuantity = (item) => {
    dispatch({ type: SALES_ACTION_TYPES.REFRESH_QUANTITY, payload: item });
  };

  const handleSelectCostumer = (costumer) => {
    dispatch({ type: SALES_ACTION_TYPES.SELECT_COSTUMER, payload: costumer ? costumer : null });
    localStorage.setItem("costumer", JSON.stringify(costumer));
  };

  const refreshSaleItems = () => {
    dispatch({ type: SALES_ACTION_TYPES.REFRESH_ITEMS });
    localStorage.setItem("filteredItems", JSON.stringify([]));
  };

  const filterItem = (item) => {
    dispatch({ type: SALES_ACTION_TYPES.FILTER_ITEM, payload: item });
    localStorage.setItem("filteredItems", JSON.stringify([...state.filteredItems, item]));
  };

  const removeFilteredItem = (item) => {
    dispatch({ type: SALES_ACTION_TYPES.REMOVE_FILTERED_ITEM, payload: item });
    localStorage.setItem("filteredItems", JSON.stringify(state.filteredItems.filter((i) => i.id !== item.id)));
  };

  const tools = { state, filterItem, removeFilteredItem, handleSelectCostumer, addQuantity, decreaseQuantity, refreshQuantity, refreshSaleItems };
  return <SalesContext.Provider value={tools}>{children}</SalesContext.Provider>;
}

export default SalesContextProvider;
