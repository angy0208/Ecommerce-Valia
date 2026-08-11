import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import AboutUs from "./pages/AboutUs";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter >
      <ScrollToTop />
      <Routes>
        {/* Rutas de la Tienda (con Navbar y Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/producto/:id" element={<Product />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/terminos" element={<Terms />} />
        </Route>

        {/* Ruta para el Formulario de Login */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Ruta Protegida del Panel Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;