import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/products" element={<ItemList />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
