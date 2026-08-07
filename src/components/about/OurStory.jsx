function OurStory() {
  return (
    <section className="py-24 bg-[#FCF9F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna de Texto */}
          <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#b78a65] uppercase mb-3">
              Desde el Atelier
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2d2d2d] leading-tight mb-6">
              Nuestra Historia
            </h2>

            <p className="font-serif italic text-xl text-[#6e5b49] border-l-2 border-[#b78a65] pl-4 mb-6 leading-relaxed">
              "VALÍA surge como un homenaje a la individualidad y al lujo silencioso."
            </p>

            <div className="space-y-4 text-gray-600 font-light leading-relaxed text-base">
              <p>
                Nacida de la búsqueda de la pureza y la sofisticación, empezamos en un pequeño atelier con la visión de crear brumas corporales que no solo perfumen, sino que envuelvan, transformen y eleven el aura personal de quien las lleva.
              </p>
              <p>
                Cada gota es el resultado de una meticulosa selección botánica y un proceso artesanal que respeta los tiempos de la naturaleza, logrando una estela sutil pero inolvidable.
              </p>
            </div>

            {/* Métrica / Badge editorial */}
            <div className="mt-8 pt-6 border-t border-[#E5DDD3] w-full flex items-center gap-8">
              <div>
                <span className="block font-serif text-2xl text-[#2d2d2d]">100%</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  Extractos Botánicos
                </span>
              </div>
              <div className="h-8 w-px bg-[#E5DDD3]" />
              <div>
                <span className="block font-serif text-2xl text-[#2d2d2d]">Artisanal</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  Proceso Meticuloso
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
                  src="/images/nosotros/nosotros1.jpg"
                  alt="VALÍA Premium Body Splash Atelier"
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