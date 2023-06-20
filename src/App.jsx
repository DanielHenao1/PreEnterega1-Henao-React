import ItemDetailContainer from "./components/pages/itemListDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/ItemList/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./components/pages/Cart/CartContainer";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />

          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="/carrito" element={<CartContainer />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
