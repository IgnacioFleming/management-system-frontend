import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";
import AddProducts from "./pages/AddProducts/AddProducts";
import AddCostumer from "./pages/AddCostumer/AddCostumer";
import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";
import AddSalesContainer from "./pages/AddSale/AddSalesContainer";
import SalesContextProvider from "./contexts/orders";
import RegisterContainer from "./pages/Register/RegisterContainer";
import LoginContainer from "./pages/Login/LoginContainer";
import Balances from "./pages/Balances/Balances";
import CostumerMovements from "./pages/CostumerMovements/CostumerMovements";
import Users from "./pages/Users/Users";
import UserContextProvider from "./contexts/user";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ItemList from "./pages/ItemList/ItemList";
import CostumerList from "./pages/CostumerList/CostumerList";
import SalesList from "./pages/SalesList/SalesList";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/register" element={<RegisterContainer />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ItemList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/addProducts" element={<AddProducts />} />
              <Route path="/costumers" element={<CostumerList />} />
              <Route path="/addCostumer" element={<AddCostumer />} />
              <Route path="/sales" element={<SalesList />} />
              <Route path="/balances" element={<Balances />} />
              <Route path="/balances/:id" element={<CostumerMovements />} />
              <Route path="/users" element={<Users />} />
              <Route
                path="/addSale"
                element={
                  <SalesContextProvider>
                    <AddSalesContainer />
                  </SalesContextProvider>
                }
              />
            </Route>
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
