import { addToCart } from "../../store/cart";

function AddToCartButton({ product, quantity }) {

  function handleClick() {

    addToCart(product, quantity);

    alert("Producto agregado al carrito");

  }

  return (

    <button

      onClick={handleClick}

      className="w-full bg-black text-white py-4 uppercase tracking-[0.2em] hover:bg-neutral-800 transition"

    >

      Agregar al carrito

    </button>

  );

}

export default AddToCartButton;