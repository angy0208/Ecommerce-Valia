import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const available = product.available !== false;

  const variants = product.variants || [];

  const hasVariants = variants.length > 0;

  const variantColors = [
    "#1c1b1b",
    "#8b5e3c",
    "#d4af37",
    "#c9b19c",
    "#f3e5d8",
  ];

  return (
    <Link
      to={`/producto/${product.id}`}
      className="group block cursor-pointer hover:-translate-y-1 transition duration-300"
    >
      {/* IMAGEN */}
      <div className="overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className={`h-[250px] sm:h-[320px] md:h-[420px] w-full object-cover transition duration-700 group-hover:scale-110 ${
            !available ? "opacity-70" : ""
          }`}
        />

        {!available && (
          <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-black text-white text-[9px] md:text-xs uppercase tracking-wider px-2 py-1 md:px-3 md:py-2">
            Agotado
          </span>
        )}
      </div>

      {/* INFORMACIÓN */}
      <div className="mt-3 md:mt-5">
        {/* Categoría y género */}
        <div className="flex items-center gap-1 md:gap-2 text-[9px] md:text-xs uppercase tracking-[0.12em] md:tracking-[0.2em] text-gray-500">
          <p className="truncate">{product.category}</p>

          <span>•</span>

          <p className="truncate">{product.gender}</p>
        </div>

        {/* Nombre */}
        <h3 className="mt-1 md:mt-2 text-base sm:text-lg md:text-2xl font-serif leading-tight">
          {product.name}
        </h3>

        {/* INDICADOR DE VARIANTES */}
        {hasVariants && (
          <div className="flex items-center gap-1.5 md:gap-2 mt-2 md:mt-3">
            {variants.slice(0, 5).map((variant, index) => (
              <span
                key={variant.id}
                title={variant.name}
                className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-300"
                style={{
                  backgroundColor:
                    variantColors[index % variantColors.length],
                }}
              />
            ))}

            {variants.length > 5 && (
              <span className="text-[10px] md:text-xs text-gray-500 ml-1">
                +{variants.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Precio */}
        <p className="mt-2 md:mt-3 text-sm sm:text-base md:text-lg font-medium">
          ${Number(product.price).toFixed(2)}
        </p>

        {/* Disponibilidad */}
        <p
          className={`text-xs md:text-sm mt-1 md:mt-2 ${
            !available
              ? "text-red-500"
              : "text-green-600"
          }`}
        >
          {available ? "Disponible" : "Agotado"}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;