function InstagramSection() {
  // Rutas locales a tu carpeta public/images/product/
  const instagramPosts = [
    { id: 1, image: "/images/products/product1.1.jpg", alt: "VALÍA Body Splash 1" },
    { id: 2, image: "/images/products/product2.1.jpg", alt: "VALÍA Body Splash 2" },
    { id: 3, image: "/images/products/product3.1.jpg", alt: "VALÍA Body Splash 3" },
    { id: 4, image: "/images/products/product3.2.jpg", alt: "VALÍA Body Splash 4" },
    { id: 5, image: "/images/products/product4.2.jpg", alt: "VALÍA Body Splash 5" },
    { id: 6, image: "/images/products/product2.2.jpg", alt: "VALÍA Body Splash 6" },
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado con buen espaciado inferior respecto a las fotos */}
        <div className="text-center mb-16 flex flex-col items-center gap-3">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2d2d2d] tracking-tight">
            Síguenos en Instagram
          </h2>
          
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#b78a65] hover:text-[#2d2d2d] transition-colors"
          >
            @valianshop_123
          </a>
        </div>

        {/* Cuadrícula con imágenes locales */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#e5ddd3] rounded-sm aspect-square shadow-sm"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              
              {/* Overlay suave al pasar el cursor */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-medium tracking-widest uppercase">
                  Ver Post
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default InstagramSection;