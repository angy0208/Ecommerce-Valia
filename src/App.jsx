import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import AboutUs from "./pages/AboutUs";
import Terms from "./pages/Terms";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/catalogo" element={<Catalog />} />

          <Route path="/producto/:id" element={<Product />} />

          <Route path="/carrito" element={<Cart />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/nosotros" element={<AboutUs />} />

          <Route path="/terminos" element={<Terms />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;