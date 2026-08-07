import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, CreditCard, Landmark } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contacto" className="bg-[#EFE8E1] border-t border-[#E5DDD3] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid Principal de 4 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* 1. Marca & Información General */}
          <div className="flex flex-col items-start">
            <h2 className="font-serif text-3xl tracking-widest text-[#2d2d2d] mb-4">
              VALÍA
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Body Splash inspirados en las mejores fragancias. Elegancia, frescura y personalidad en cada aplicación.
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} VALÍA Premium Body Splash.
            </p>
          </div>

          {/* 2. Enlaces Rápidos (Navegación con React Router) */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-xs text-[#2d2d2d] uppercase tracking-widest mb-5">
              Enlaces
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-black transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="hover:text-black transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-black transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="hover:text-black transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Datos de Contacto */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-xs text-[#2d2d2d] uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#b78a65] shrink-0" />
                <span>Av. Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#b78a65] shrink-0" />
                <a href="mailto:hola@valiasplash.com" className="hover:text-black transition-colors">
                  hola@valiasplash.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#b78a65] shrink-0" />
                <a href="tel:+5491112345678" className="hover:text-black transition-colors">
                  +54 9 11 1234-5678
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Formas de Pago & Redes Sociales */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-xs text-[#2d2d2d] uppercase tracking-widest mb-4">
              Formas de Pago
            </h4>
            
            <div className="flex gap-6 text-gray-600 mb-8">
              <div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-black transition-colors">
                <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                <span className="text-[11px]">WhatsApp</span>
              </div>
              <div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-black transition-colors">
                <Landmark size={22} className="group-hover:scale-110 transition-transform" />
                <span className="text-[11px]">Transferencia</span>
              </div>
              <div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-black transition-colors">
                <CreditCard size={22} className="group-hover:scale-110 transition-transform" />
                <span className="text-[11px]">Tarjetas</span>
              </div>
            </div>

            <h4 className="font-semibold text-xs text-[#2d2d2d] uppercase tracking-widest mb-3">
              Síguenos
            </h4>
            <div className="flex gap-4 text-gray-700">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#b78a65] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#b78a65] transition-colors">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Línea Divisora y Copyright Final */}
        <div className="border-t border-[#E5DDD3] pt-8 text-center text-xs text-gray-500">
          Todos los derechos reservados. Diseñado para ofrecer frescura y elegancia.
        </div>

      </div>
    </footer>
  );
}

export default Footer;