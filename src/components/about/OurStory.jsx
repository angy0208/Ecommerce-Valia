function OurStory() {
  return (
    <section className="py-24 bg-[#FCF9F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna de Texto */}
          <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#b78a65] uppercase mb-3">
              El Universo VALÍA
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2d2d2d] leading-tight mb-6">
              Nuestra Historia
            </h2>

            <p className="font-serif italic text-xl text-[#6e5b49] border-l-2 border-[#b78a65] pl-4 mb-6 leading-relaxed">
              "VALÍA nace para reunir en un solo lugar la armonía entre lo que vistes, la belleza que proyectas y el aroma que dejas al pasar."
            </p>

            <div className="space-y-4 text-gray-600 font-light leading-relaxed text-base">
              <p>
                Lo que comenzó como un proyecto enfocado en la perfumería y el cuidado personal evolucionó en una experiencia de estilo integral. Entendimos que la elegancia no es un solo elemento, sino la suma de pequeños detalles.
              </p>
              <p>
                Hoy reunimos una curaduría que abarca ropa, accesorios, maquillaje y body splashes inspirados en grandes fragancias, pensados para acompañar el ritmo de la mujer contemporánea con frescura, calidad y personalidad.
              </p>
            </div>

            {/* Métrica / Badge editorial */}
            <div className="mt-8 pt-6 border-t border-[#E5DDD3] w-full flex items-center gap-8">
              <div>
                <span className="block font-serif text-2xl text-[#2d2d2d]">Integral</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  Moda & Perfumería
                </span>
              </div>
              <div className="h-8 w-px bg-[#E5DDD3]" />
              <div>
                <span className="block font-serif text-2xl text-[#2d2d2d]">Curada</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  Selección Exclusiva
                </span>
              </div>
            </div>
          </div>

          {/* Columna de Imagen con Marco Editorial */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Recuadro decorativo de fondo */}
              <div className="absolute -inset-4 border border-[#b78a65]/30 rounded-sm translate-x-2 translate-y-2 pointer-events-none hidden sm:block" />
              
              {/* Contenedor principal de la imagen */}
              <div className="relative aspect-[4/5] bg-[#F8F5F1] rounded-sm overflow-hidden shadow-lg group">
                <img
                  src="/images/nosotros/nosotros.jpg"
                  alt="VALÍA Lifestyle Store"
                  className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay gradual sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurStory;