import BalancesApiCall from "./balances";
import CostumersApiCall from "./costumers";
import OrdersApiCall from "./orders";
import ProductsApiCall from "./products";
import SalesApiCall from "./sales";
import UsersApiCall from "./users";

export const costumersService = new CostumersApiCall();
export const productsService = new ProductsApiCall();
export const balancesService = new BalancesApiCall();
export const salesService = new SalesApiCall();
export const ordersService = new OrdersApiCall();
export const usersService = new UsersApiCall();
