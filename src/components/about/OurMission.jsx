import { Sparkles, FlaskConical, Shirt } from "lucide-react";

function OurMission() {
  return (
    <section className="py-24 bg-[#F8F5F1] border-t border-[#E5DDD3]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-[#2d2d2d] mb-4 tracking-tight">
            Nuestra Misión
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            Inspirar momentos de conexión profunda con uno mismo a través del poder evocador del aroma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-sm p-10 flex flex-col items-center text-center shadow-sm border border-[#E5DDD3] hover:border-[#b78a65] transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-[#F8F5F1] flex items-center justify-center text-[#b78a65] mb-6">
              <Sparkles size={26} />
            </div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-[#2d2d2d] mb-3">
              Ingredientes Nobles
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              Seleccionamos cuidadosamente extractos botánicos de primera calidad, priorizando fuentes sostenibles y éticas para asegurar la pureza en cada frasco.
            </p>
          </div>

          <div className="bg-white rounded-sm p-10 flex flex-col items-center text-center shadow-sm border border-[#E5DDD3] hover:border-[#b78a65] transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-[#F8F5F1] flex items-center justify-center text-[#b78a65] mb-6">
              <FlaskConical size={26} />
            </div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-[#2d2d2d] mb-3">
              Alquimia Moderna
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              Combinamos técnicas tradicionales de perfumería con innovación contemporánea para crear brumas ligeras que perduran sutilmente en la piel.
            </p>
          </div>

          <div className="bg-white rounded-sm p-10 flex flex-col items-center text-center shadow-sm border border-[#E5DDD3] hover:border-[#b78a65] transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-[#F8F5F1] flex items-center justify-center text-[#b78a65] mb-6">
              <Shirt size={26} />
            </div>
            <h3 className="font-semibold text-xs uppercase tracking-widest text-[#2d2d2d] mb-3">
              Lujo Minimalista
            </h3>
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              Creemos en el poder de la sencillez. Nuestros envases reflejan una estética depurada, diseñada para ser un objeto de deseo en cualquier espacio.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OurMission;