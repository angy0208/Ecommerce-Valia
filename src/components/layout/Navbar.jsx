import { Link } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
    const navigate = useNavigate();

    const handleContactClick = (e) => {
      e.preventDefault();

      const footer = document.getElementById("contacto");

      if (footer) {
        // Si el footer ya está presente en el DOM actual
        footer.scrollIntoView({ behavior: "smooth" });
      } else {
        // Si el usuario está en una página donde no carga el footer (o viene de otra ruta)
        navigate("/#contacto");
        setTimeout(() => {
          const targetFooter = document.getElementById("contacto");
          if (targetFooter) {
            targetFooter.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#ebe5dc] bg-[#EFE8E1]/90 backdrop-blur">
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
            to="/nosotros"
          >
            Nosotros
          </Link>
          <a
            href="#contacto"
            onClick={handleContactClick}
            className="text-sm font-medium tracking-wide text-[#2d2d2d] transition-colors hover:text-[#b78a65]"
          >
            Contacto
          </a>
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