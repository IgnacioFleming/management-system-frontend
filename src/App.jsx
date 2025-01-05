import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import AddProducts from "./components/AddProducts/AddProducts";
import CostumerListContainer from "./components/CostumerList/ConstumerListContainer";
import AddCostumer from "./components/AddCostumer/AddCostumer";

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
