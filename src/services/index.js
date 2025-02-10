import BalancesApiCall from "./repository/balances";
import CostumersApiCall from "./repository/costumers";
import MovementsApiCall from "./repository/movements";
import OrdersApiCall from "./repository/orders";
import ProductsApiCall from "./repository/products";
import SalesApiCall from "./repository/sales";
import UsersApiCall from "./repository/users";

export const costumersService = new CostumersApiCall();
export const productsService = new ProductsApiCall();
export const balancesService = new BalancesApiCall();
export const salesService = new SalesApiCall();
export const ordersService = new OrdersApiCall();
export const usersService = new UsersApiCall();
export const movementsService = new MovementsApiCall();
