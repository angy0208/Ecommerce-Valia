import { useState } from "react";
import QuantitySelector from "../common/QuantitySelector";
import AddToCartButton from "../common/AddToCarButton";
import { Link } from "react-router-dom";

function ProductInfo({ product }) {

  const [quantity, setQuantity] = useState(1);

  const variants = product.variants || [];
  const parentProduct = product.parentProduct;

  const stock = Number(product.stock) || 0;
  const available = stock > 0;
  const hasVariants = variants.length > 0;
  const canBuyWithVariants =
    product.category === "Ropa" ||
    product.category === "Accesorios";

  function changeQuantity(newQuantity) {

    if (newQuantity < 1) {
      setQuantity(1);
      return;
    }

    // Si el producto tiene stock definido,
    // no permitir superar la cantidad disponible.
    if (stock > 0 && newQuantity > stock) {
      setQuantity(stock);
      return;
    }

    setQuantity(newQuantity);
  }

  return (

    <div className="flex flex-col h-fit justify-start">

      {/* Categoría / Género */}

      <div className="flex items-center gap-2 mb-4">

        <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
          {product.category}
        </span>

        <span className="text-gray-400 text-xs">
          /
        </span>

        <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
          {product.gender}
        </span>

      </div>


      {/* Nombre */}

      <h1 className="text-4xl md:text-5xl font-serif text-[#1c1b1b] mb-2">
        {product.name}
      </h1>


      {/* Marca */}

      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-semibold">
        VALÍA COLLECTION
      </p>


      {/* Precio */}

      <div className="flex items-end gap-4 mb-8">

        <span className="text-2xl md:text-3xl font-semibold text-[#1c1b1b]">
          ${Number(product.price).toFixed(2)} USD
        </span>

        <span
          className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full border mb-0.5 font-semibold ${!available
            ? "text-red-600 bg-red-100 border-red-200"
            : "text-[#6e5b49] bg-[#c9b19c]/20 border-[#c9b19c]/30"
            }`}
        >

          {!available
            ? "Agotado"
            : "Disponible"
          }

        </span>

      </div>


      {/* Descripción */}

      <p className="text-gray-600 leading-relaxed mb-8 text-base">

        {product.description ||
          "Un producto seleccionado para complementar tu estilo con elegancia y personalidad."
        }

      </p>


      {/* ATRIBUTOS */}

      {product.attributes &&
        product.attributes.length > 0 && (

          <div className="mb-8">

            <h3 className="text-xs uppercase font-semibold text-[#1c1b1b] tracking-widest mb-4 border-b border-gray-200 pb-2">
              Detalles del producto
            </h3>

            <div className="flex flex-col divide-y divide-gray-100">

              {product.attributes.map(
                (attribute, index) => (

                  <div
                    key={index}
                    className="flex justify-between gap-6 py-3"
                  >

                    <span className="text-sm text-gray-500">
                      {attribute.name}
                    </span>

                    <span className="text-sm font-medium text-[#1c1b1b] text-right">
                      {attribute.value}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        )
      }

      {/* VARIANTES DEL PRODUCTO */}
      {variants.length > 0 && (
        <div className="mb-10">
          <h3 className="text-xs uppercase font-semibold text-[#1c1b1b] tracking-widest mb-4 border-b border-gray-200 pb-2">
            Variantes disponibles
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {variants.map((variant) => (
              <Link
                key={variant.id}
                to={`/producto/${variant.id}`}
                className="group border border-gray-200 rounded-md overflow-hidden bg-white hover:shadow-md hover:border-[#c9b19c] transition-all"
              >
                {/* IMAGEN */}
                <div className="h-24 sm:h-28 md:h-32 bg-[#faf8f5] overflow-hidden">
                  <img
                    src={
                      variant.image ||
                      variant.images?.[0]
                    }
                    alt={variant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* INFORMACIÓN */}
                <div className="p-2">
                  <h4 className="text-xs font-medium text-[#1c1b1b] truncate">
                    {variant.name}
                  </h4>

                  <p className="text-[#6e5b49] font-semibold text-xs mt-1">
                    ${Number(variant.price).toFixed(2)}
                  </p>

                  <p
                    className={`text-[10px] mt-1 ${variant.stock > 0
                        ? "text-green-600"
                        : "text-red-500"
                      }`}
                  >
                    {variant.stock > 0
                      ? `${variant.stock} disponibles`
                      : "Agotado"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {
        parentProduct && (

          <div className="mb-10">

            <h3 className="text-xs uppercase font-semibold text-[#1c1b1b] tracking-widest mb-4 border-b border-gray-200 pb-2">
              Producto principal
            </h3>


            <Link
              to={`/producto/${parentProduct.id}`}
              className="flex items-center gap-4 border border-gray-200 rounded-lg p-3 hover:shadow-md transition"
            >


              <img
                src={
                  parentProduct.image ||
                  parentProduct.images?.[0]
                }
                className="w-16 h-16 object-cover rounded"
              />


              <div>

                <h4 className="font-medium">
                  {parentProduct.name}
                </h4>

                <p className="text-sm text-[#6e5b49]">
                  Ver producto principal
                </p>

              </div>


            </Link>


          </div>

        )
      }

      {/* CARACTERÍSTICAS */}

      {product.tags &&
        product.tags.length > 0 && (

          <div className="mb-10">

            <h3 className="text-xs uppercase font-semibold text-[#1c1b1b] tracking-widest mb-4 border-b border-gray-200 pb-2">
              Características
            </h3>

            <div className="flex flex-wrap gap-3">

              {product.tags.map((tag) => (

                <div
                  key={tag}
                  className="bg-[#f6f3f2] px-4 py-2 rounded-md border border-gray-200"
                >

                  <span className="text-[#6e5b49] text-sm font-medium">
                    {tag}
                  </span>

                </div>

              ))}

            </div>

          </div>

        )
      }


      {/* CANTIDAD / CARRITO */}

      {/* CANTIDAD / CARRITO */}

      {available && (!hasVariants || canBuyWithVariants) ? (

        <>

          <div className="flex items-center gap-4 mb-8">

            <div className="w-32">

              <QuantitySelector
                quantity={quantity}
                setQuantity={changeQuantity}
              />

            </div>


            <div className="flex-grow">

              <AddToCartButton
                product={product}
                quantity={quantity}
              />

            </div>

          </div>


          {stock > 0 && (

            <p className="text-xs text-gray-500 -mt-4 mb-6">

              {stock} unidades disponibles

            </p>

          )}

        </>


      ) : hasVariants && !canBuyWithVariants ? (

        <div className="border border-[#d1c4bb] bg-[#faf8f5] text-[#6e5b49] text-sm text-center py-4 mb-8 rounded-lg">

          Selecciona una opción disponible para realizar la compra.

        </div>


      ) : (

        <div className="border border-red-200 bg-red-50 text-red-600 text-sm text-center py-4 mb-8">

          Este producto está agotado.

        </div>

      )}

    </div>

  );

}

export default ProductInfo;