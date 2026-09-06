import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, ShoppingBag } from "lucide-react";
import { getCart } from "../../store/cart";

function Navbar() {
  const navigate = useNavigate();
  const [totalItems, setTotalItems] = useState(() => {
    const cart = getCart() || [];

    return cart.reduce(
      (sum, item) => sum + (Number(item.quantity) || 1),
      0
    );
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const updateCartCount = () => {
    const cart = getCart() || [];
    const count = cart.reduce(
      (sum, item) => sum + (Number(item.quantity) || 1),
      0
    );
    setTotalItems(count);
  };

  useEffect(() => {
    window.addEventListener("cartUpdated", updateCartCount);

    return () =>
      window.removeEventListener("cartUpdated", updateCartCount);
  }, []);
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
      {/* w-full sin max-w-7xl para llegar hasta el borde real de la pantalla */}
      <div className="flex h-20 w-full items-center justify-between pl-1 pr-3 sm:pl-2 sm:pr-6">

        {/* COLUMNA IZQUIERDA: Logo + Navegación */}
        <div className="flex items-center gap-3 md:gap-8">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo/logo.png"
              alt="VALÍA"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
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
        </div>

        {/* COLUMNA CENTRO: Título */}
        <div className="text-center">
          <Link to="/">
            <h1 className="text-2xl font-semibold tracking-[0.35em] text-[#2d2d2d] sm:text-3xl">
              VALÍA
            </h1>
          </Link>
        </div>

        {/* COLUMNA DERECHA: Carrito + Menú Móvil */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/carrito" className="relative rounded-full p-2 transition hover:bg-[#ebe5dc]">
            <ShoppingBag size={22} />

            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#b78a65] text-[10px] font-bold text-white shadow-sm">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 transition hover:bg-[#ebe5dc] md:hidden"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Menú Desplegable Móvil */}
        {menuOpen && (
          <div className="absolute top-20 left-0 w-full border-b border-[#ebe5dc] bg-[#EFE8E1] md:hidden">
            <nav className="flex flex-col items-center gap-6 py-8">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-sm font-medium tracking-wide text-[#2d2d2d]"
              >
                Inicio
              </Link>

              <Link
                to="/catalogo"
                onClick={closeMenu}
                className="text-sm font-medium tracking-wide text-[#2d2d2d]"
              >
                Catálogo
              </Link>

              <Link
                to="/nosotros"
                onClick={closeMenu}
                className="text-sm font-medium tracking-wide text-[#2d2d2d]"
              >
                Nosotros
              </Link>

              <a
                href="#contacto"
                onClick={(e) => {
                  handleContactClick(e);
                  closeMenu();
                }}
                className="text-sm font-medium tracking-wide text-[#2d2d2d]"
              >
                Contacto
              </a>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;
