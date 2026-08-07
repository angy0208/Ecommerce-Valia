function AboutHero() {
  return (
    <section className="w-full min-h-[500px] flex items-center justify-center relative overflow-hidden bg-[#F8F5F1] py-24 border-b border-[#E5DDD3]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#b78a65] uppercase mb-4 block">
          Nuestra Filosofía
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-[#2d2d2d] mb-6 max-w-4xl tracking-tight">
          La esencia de tu presencia.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
          Elevando lo cotidiano a extraordinario a través de fragancias cuidadosamente curadas y un diseño atemporal.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;