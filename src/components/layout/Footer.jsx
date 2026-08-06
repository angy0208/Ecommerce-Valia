import { MessageCircle } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#F5F0EA] border-t border-[#E5DDD3]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-serif mb-5">
              VALÍA
            </h2>
            <p className="text-gray-600 leading-7">
              Body Splash inspirados en las mejores fragancias.
              Elegancia, frescura y personalidad en cada aplicación.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Tienda
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>Inicio</li>
              <li>Catálogo</li>
              <li>Nosotros</li>
              <li>Contacto</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Atención
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>Preguntas frecuentes</li>
              <li>Envíos</li>
              <li>Cambios</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">
              Síguenos
            </h3>
            <div className="flex gap-4">
              <FaInstagram size={24} className="cursor-pointer hover:opacity-75" />
              <FaFacebook size={24} className="cursor-pointer hover:opacity-75" />
              <MessageCircle size={24} className="cursor-pointer hover:opacity-75" />
            </div>
          </div>
        </div>

        <div className="border-t mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2026 VALÍA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;