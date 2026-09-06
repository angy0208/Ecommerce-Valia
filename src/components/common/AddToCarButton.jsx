import { useState } from "react";
import { addToCart } from "../../store/cart";
import Toast from "../common/Toast";

function AddToCartButton({ product, quantity }) {
  const [toast, setToast] = useState(null);

  const stock = Number(product.stock) || 0;
  const available = stock > 0;

  function handleClick() {

    if (!available) {
      setToast({
        message: "Este producto está agotado.",
        type: "error"
      });
      return;
    }

    const result = addToCart(product, quantity);

    if (!result.success) {

      setToast({
        message: result.message,
        type: "error"
      });

      return;

    }

    if (result.limited) {

      setToast({
        message: result.message,
        type: "error"
      });

      return;

    }

    setToast({
      message: "Producto agregado al carrito.",
      type: "success"
    });
  }

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
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
    </>
  );
}

export default AddToCartButton;