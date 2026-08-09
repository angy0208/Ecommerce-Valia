import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link 
      to={`/producto/${product.id}`} 
      className="group block cursor-pointer hover:-translate-y-1 transition duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="mt-5">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
          {product.category}
        </p>

        <h3 className="mt-2 text-2xl font-serif">
          {product.name}
        </h3>

        <p className="mt-3 text-lg font-medium">
          ${product.price}
        </p>
        <p className={`text-sm mt-2 ${
          product.available === false
          ?"text-red-500"
          :"text-green-600"
          }`}>

          {
          product.available === false
          ?
          "Agotado"
          :
          "Disponible"
          }

</p>
      </div>
    </Link>
  );
}

export default ProductCard;