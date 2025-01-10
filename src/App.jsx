import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout/Layout";
import ItemListContainer from "./pages/ItemList/ItemListContainer";
import AddProducts from "./pages/AddProducts/AddProducts";
import AddCostumer from "./pages/AddCostumer/AddCostumer";
import CostumerListContainer from "./pages/CostumerList/ConstumerListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/addProducts" element={<AddProducts />} />
            <Route path="/costumers" element={<CostumerListContainer />} />
            <Route path="/addCostumer" element={<AddCostumer />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
