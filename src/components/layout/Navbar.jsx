import { Link } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#ebe5dc] bg-[#faf8f5]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Menú Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            className="text-sm font-medium tracking-wide text-[#2d2d2d] transition-colors hover:text-[#b78a65]"
            to="/"
          >
            Inicio
          </Link>

          <Link
            className="text-sm font-medium tracking-wide text-[#2d2d2d] transition-colors hover:text-[#b78a65]"
            to="/catalogo"
          >
            Catálogo
          </Link>

          <Link
            className="text-sm font-medium tracking-wide text-[#2d2d2d] transition-colors hover:text-[#b78a65]"
            to="#"
          >
            Nosotros
          </Link>

          <Link
            className="text-sm font-medium tracking-wide text-[#2d2d2d] transition-colors hover:text-[#b78a65]"
            to="#"
          >
            Contacto
          </Link>
        </nav>

        {/* Logo */}
        <div className="text-center">
          <Link to="/">
            <h1 className="text-3xl font-semibold tracking-[0.35em] text-[#2d2d2d]">
              VALÍA
            </h1>
          </Link>
        </div>

        {/* Iconos */}
        <div className="flex items-center gap-4">

          <Link to="/carrito" className="rounded-full p-2 transition hover:bg-[#ebe5dc]">
            <ShoppingBag size={22} />
          </Link>

          <button className="rounded-full p-2 transition hover:bg-[#ebe5dc] md:hidden">
            <Menu size={24} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;