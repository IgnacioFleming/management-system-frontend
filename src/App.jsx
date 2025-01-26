import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";
import ItemListContainer from "./pages/ItemList/ItemListContainer";
import AddProducts from "./pages/AddProducts/AddProducts";
import AddCostumer from "./pages/AddCostumer/AddCostumer";
import CostumerListContainer from "./pages/CostumerList/ConstumerListContainer";
import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";
import SalesListContainer from "./pages/SalesList/SalesListContainer";
import AddSalesContainer from "./pages/AddSale/AddSalesContainer";
import SalesContextProvider from "./contexts/orders";
import RegisterContainer from "./pages/Register/RegisterContainer";
import LoginContainer from "./pages/Login/LoginContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/addProducts" element={<AddProducts />} />
            <Route path="/costumers" element={<CostumerListContainer />} />
            <Route path="/addCostumer" element={<AddCostumer />} />
            <Route path="/sales" element={<SalesListContainer />} />
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
      </BrowserRouter>
    </>
  );
}

export default App;
