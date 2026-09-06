import { Sparkles, Palette, Shirt } from "lucide-react";

function OurMission() {
  return (
    <section className="py-24 bg-[#F8F5F1] border-t border-[#E5DDD3]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-[#2d2d2d] mb-4 tracking-tight">
            Nuestra Misión
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Inspirar confianza y autenticidad ofreciéndote piezas y detalles de belleza que completan tu estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-sm p-10 flex flex-col items-center text-center shadow-sm border border-[#E5DDD3] hover:border-[#b78a65] transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-[#F8F5F1] flex items-center justify-center text-[#b78a65] mb-6">
              <Shirt size={26} />
            </div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-[#2d2d2d] mb-3">
              Moda & Versatilidad
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              Curamos prendas y accesorios atemporales diseñados para acompañarte en cualquier ocasión, combinando comodidad, elegancia y tendencia.
            </p>
          </div>

          <div className="bg-white rounded-sm p-10 flex flex-col items-center text-center shadow-sm border border-[#E5DDD3] hover:border-[#b78a65] transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-[#F8F5F1] flex items-center justify-center text-[#b78a65] mb-6">
              <Palette size={26} />
            </div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-[#2d2d2d] mb-3">
              Belleza & Expresión
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              Seleccionamos indispensables de maquillaje que realzan tu belleza natural con acabados frescos, ligeros e impecables.
            </p>
          </div>

          <div className="bg-white rounded-sm p-10 flex flex-col items-center text-center shadow-sm border border-[#E5DDD3] hover:border-[#b78a65] transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-[#F8F5F1] flex items-center justify-center text-[#b78a65] mb-6">
              <Sparkles size={26} />
            </div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-[#2d2d2d] mb-3">
              Sello Aromático
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              Nuestros Body Splash e inspiraciones de alta perfumería ofrecen esa estela de frescura y sofisticación que se convierte en tu firma personal.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OurMission;