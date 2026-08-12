import { Link } from "react-router-dom";
function Hero() {
  return (
    <section
      className="relative flex h-[820px] items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative z-10 max-w-3xl text-center px-6">

        <h1 className="font-serif text-6xl text-white mb-8">
          La esencia de tu presencia
        </h1>

        <p className="text-xl text-white/90 mb-10">
          Descubre fragancias corporales diseñadas para cautivar.
        </p>
        <Link 
          to="/catalogo"
          className="inline-block bg-black text-white px-8 py-3 uppercase tracking-widest hover:bg-neutral-800 transition"
        >
          Descubrir Nuestra Colección
        </Link>
        

      </div>
    </section>
  );
}

export default Hero;