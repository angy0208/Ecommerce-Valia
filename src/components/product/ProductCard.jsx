import { Link } from "react-router-dom";

function ProductCard({ product }) {

  const available = product.available !== false;

  return (

    <Link

      to={`/producto/${product.id}`}

      className="group block cursor-pointer hover:-translate-y-1 transition duration-300"

    >

      <div className="overflow-hidden relative">

        <img

          src={product.image}

          alt={product.name}

          className={`h-[420px] w-full object-cover transition duration-700 group-hover:scale-110 ${
            !available ? "opacity-70" : ""
          }`}

        />

        {!available && (

          <span className="absolute top-4 left-4 bg-black text-white text-xs uppercase tracking-wider px-3 py-2">

            Agotado

          </span>

        )}

      </div>


      <div className="mt-5">

        {/* Categoría y género */}

        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500">

          <p>
            {product.category}
          </p>

          <span>
            •
          </span>

          <p>
            {product.gender}
          </p>

        </div>


        <h3 className="mt-2 text-2xl font-serif">

          {product.name}

        </h3>


        <p className="mt-3 text-lg font-medium">

          ${Number(product.price).toFixed(2)}

        </p>


        <p
          className={`text-sm mt-2 ${
            !available
              ? "text-red-500"
              : "text-green-600"
          }`}
        >

          {available
            ? "Disponible"
            : "Agotado"
          }

        </p>

      </div>

    </Link>

  );
}

export default ProductCard;