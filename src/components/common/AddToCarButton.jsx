import { addToCart } from "../../store/cart";

function AddToCartButton({ product, quantity }) {

  const available = product.available !== false;

  function handleClick() {

    if (!available) {

      alert("Este producto está agotado.");

      return;

    }

    addToCart(product, quantity);

    alert("Producto agregado al carrito");

  }

  return (

    <button

      type="button"

      onClick={handleClick}

      disabled={!available}

      className="w-full bg-black text-white py-4 uppercase tracking-[0.2em] hover:bg-neutral-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"

    >

      {available
        ? "Agregar al carrito"
        : "Producto agotado"
      }

    </button>

  );

}

export default AddToCartButton;