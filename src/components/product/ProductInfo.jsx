import { useState } from "react";
import QuantitySelector from "../common/QuantitySelector";
import AddToCartButton from "../common/AddToCarButton";

function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col h-fit justify-start">
      {/* Breadcrumb / Categoría */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
          Body Splash
        </span>
        <span className="text-gray-400 text-xs">/</span>
        <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
          {product.category}
        </span>
      </div>

      {/* Nombre principal */}
      <h1 className="text-4xl md:text-5xl font-serif text-[#1c1b1b] mb-2">
        {product.name}
      </h1>

      {/* Subtítulo de marca */}
      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-semibold">
        VALÍA PREMIUM BODY SPLASH
      </p>

      {/* Precio y Disponibilidad */}
      <div className="flex items-end gap-4 mb-8">
        <span className="text-2xl md:text-3xl font-semibold text-[#1c1b1b]">
          ${product.price}.00 USD
        </span>
        <span className="text-xs uppercase tracking-wider text-[#6e5b49] bg-[#c9b19c]/20 px-3 py-1 rounded-full border border-[#c9b19c]/30 mb-0.5 font-semibold">
          Disponible
        </span>
      </div>

      {/* Descripción dinámica */}
      <p className="text-gray-600 leading-relaxed mb-8 text-base">
        {product.description ||
          "Un aroma radiante diseñado para evocar una sensación de lujo tranquilo y sofisticación sin esfuerzo."}
      </p>

      {/* Notas Olfativas */}
      <div className="mb-10">
        <h3 className="text-xs uppercase font-semibold text-[#1c1b1b] tracking-widest mb-4 border-b border-gray-200 pb-2">
          Notas Olfativas
        </h3>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-[#f6f3f2] px-4 py-2 rounded-md border border-gray-200/60">
            <span className="text-[#6e5b49] text-sm font-medium">🌸 Floral</span>
          </div>
          <div className="flex items-center gap-2 bg-[#f6f3f2] px-4 py-2 rounded-md border border-gray-200/60">
            <span className="text-[#6e5b49] text-sm font-medium">🍰 Dulce</span>
          </div>
          <div className="flex items-center gap-2 bg-[#f6f3f2] px-4 py-2 rounded-md border border-gray-200/60">
            <span className="text-[#6e5b49] text-sm font-medium">🌿 Frutal</span>
          </div>
        </div>
      </div>

      {/* Selector de Cantidad y Botón de Agregar */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-32">
          <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
        <div className="flex-grow">
          <AddToCartButton
            product={product}
            quantity={quantity}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;