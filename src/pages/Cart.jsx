import { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  updateQuantity,
} from "../store/cart";
import Toast from "../components/common/Toast";
function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {

    function loadCart() {
      setCart(getCart());
    }

    loadCart();

    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
    };

  }, []);

  const total = cart.reduce(
    (sum, item) =>
      sum +
      (Number(item.price) || 0) *
      (Number(item.quantity) || 1),
    0
  );

  const totalItems = cart.reduce(
    (sum, item) =>
      sum + (Number(item.quantity) || 1),
    0
  );

  function deleteProduct(id) {

    removeFromCart(id);
    setCart(getCart());

  }

  function increaseQty(item) {

    const isAvailable =
      item.available !== false &&
      Number(item.stock) > 0;

    if (!isAvailable) {
      setToast({
        message: "Este producto está agotado.",
        type: "error"
      });
      return;

    }

    const currentQty =
      Number(item.quantity) || 1;

    const result = updateQuantity(
      item.id,
      currentQty + 1
    );

    setCart(getCart());

    if (result?.limited) {

      setToast({
        message: result.message,
        type: "error"
      });

    }

  }

  function decreaseQty(id, currentQty) {

    if (currentQty <= 1) {

      deleteProduct(id);
      return;

    }

    updateQuantity(
      id,
      currentQty - 1
    );

    setCart(getCart());

  }

  async function finalizarPedido() {

    if (cart.length === 0) {
      setToast({
        message: "Tu carrito está vacío.",
        type: "error"
      });
      return;
    }

    try {

      setLoading(true);

      const response = await fetch(
        `${API_URL}/orders`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            items: cart.map((item) => ({
              id: item.id,
              name: item.name,
              price: Number(item.price),
              quantity: Number(item.quantity),
            })),

            total: Number(total.toFixed(2)),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          data.error ||
          "No se pudo crear el pedido."
        );
      }

      console.log("Pedido creado:", data);

      // Crear mensaje de WhatsApp
      let message =
        "Hola, deseo realizar el siguiente pedido:\n\n";

      cart.forEach((item) => {

        const price = Number(item.price) || 0;
        const qty = Number(item.quantity) || 1;

        message +=
          `${item.name} x${qty} - $${(
            price * qty
          ).toFixed(2)}\n`;

      });

      message +=
        `\nTotal: $${total.toFixed(2)}`;

      const whatsappUrl =
        `https://wa.me/584241537446?text=${encodeURIComponent(
          message
        )}`;

      // Vaciar carrito después de registrar correctamente la orden
      localStorage.removeItem("cart");

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      setCart([]);

      // Abrir WhatsApp
      window.open(
        whatsappUrl,
        "_blank"
      );

    } catch (error) {

      console.error(
        "Error al crear el pedido:",
        error
      );

      setToast({
        message:
          error.message ||
          "No se pudo registrar el pedido. Intenta nuevamente.",
        type: "error"
      });

    } finally {

      setLoading(false);

    }

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

      <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-12 mt-16 sm:mt-24">

        <div className="mb-8 text-center md:text-left">

          <h1 className="text-3xl md:text-5xl font-serif text-[#1c1b1b] mb-2">
            Tu Carrito
          </h1>

          <p className="text-gray-500">
            Revisa tus artículos antes de finalizar la compra.
          </p>

        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-8 flex flex-col gap-4">

            {cart.length === 0 ? (

              <p className="text-gray-500 py-8">
                Tu carrito está vacío.
              </p>

            ) : (

              cart.map((item) => {

                const itemPrice =
                  Number(item.price) || 0;

                const itemQty =
                  Number(item.quantity) || 1;

                const isAvailable =
                  item.available !== false &&
                  Number(item.stock) > 0;

                return (

                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                  >

                    <div className="w-full sm:w-32 h-32 bg-[#f6f3f2] rounded-md overflow-hidden shrink-0 flex items-center justify-center">

                      {item.image ? (

                        <img
                          alt={item.name}
                          className="w-full h-full object-cover mix-blend-multiply"
                          src={item.image}
                        />

                      ) : (

                        <span className="text-xs text-gray-400">
                          Sin Imagen
                        </span>

                      )}

                    </div>


                    <div className="flex flex-col grow justify-between py-1">

                      <div className="flex justify-between items-start gap-4">

                        <div>

                          <h3 className="text-xl font-serif text-[#1c1b1b] mb-1">
                            {item.name}
                          </h3>

                          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                            {item.category || "Body Splash"}
                          </p>

                        </div>


                        <button
                          onClick={() =>
                            deleteProduct(item.id)
                          }
                          aria-label="Eliminar producto"
                          className="text-gray-400 hover:text-red-600 transition-colors p-1"
                        >

                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >

                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />

                          </svg>

                        </button>

                      </div>


                      <div className="flex justify-between items-end mt-4 sm:mt-0">

                        <div className="flex items-center border border-gray-300 rounded-full">

                          <button
                            type="button"
                            onClick={() =>
                              decreaseQty(
                                item.id,
                                itemQty
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-l-full transition-colors font-medium"
                          >
                            -
                          </button>


                          <span className="w-8 text-center text-sm font-medium">
                            {itemQty}
                          </span>


                          <button
                            type="button"
                            onClick={() =>
                              increaseQty(item)
                            }
                            disabled={!isAvailable}
                            title={
                              !isAvailable
                                ? "Producto agotado"
                                : ""
                            }
                            className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-r-full transition-colors font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            +
                          </button>

                        </div>


                        <div className="text-right">

                          <p className="text-base text-[#1c1b1b] font-semibold">
                            ${(itemPrice * itemQty).toFixed(2)} USD
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                );

              })

            )}

          </div>


          <div className="lg:col-span-4 sticky top-28">

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col gap-4">

              <h2 className="text-xl font-serif text-[#1c1b1b] border-b border-gray-200 pb-3">
                Resumen de Compra
              </h2>


              <div className="flex flex-col gap-2 text-sm text-gray-600">

                <div className="flex justify-between">

                  <span>
                    Subtotal ({totalItems} artículos)
                  </span>

                  <span>
                    ${total.toFixed(2)}
                  </span>

                </div>


                <div className="flex justify-between">

                  <span>
                    Envío estimado
                  </span>

                  <span className="text-[#6e5b49] font-medium">
                    Gratis
                  </span>

                </div>


                <div className="flex justify-between text-xs text-gray-500">

                  <span>
                    Impuestos
                  </span>

                  <span>
                    $0.00
                  </span>

                </div>

              </div>


              <div className="border-t border-gray-200 pt-3 mt-1">

                <div className="flex justify-between items-end">

                  <span className="text-base text-[#1c1b1b] font-medium">
                    Total
                  </span>

                  <span className="text-2xl font-serif text-[#1c1b1b] font-semibold">
                    ${total.toFixed(2)} USD
                  </span>

                </div>

              </div>


              <p className="text-xs text-gray-500 text-center my-2 leading-relaxed">
                Al continuar, tu pedido será registrado y luego serás redirigido a WhatsApp para coordinar el pago y envío.
              </p>


              <button
                onClick={finalizarPedido}
                disabled={
                  cart.length === 0 ||
                  loading
                }
                className="w-full bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-widest py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >

                {loading
                  ? "Registrando pedido..."
                  : "Finalizar compra por WhatsApp"
                }

              </button>


              <a
                className="w-full text-center text-gray-600 text-xs font-semibold uppercase tracking-widest py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors mt-1"
                href="/catalogo"
              >
                Seguir Comprando
              </a>

            </div>

          </div>

        </div>

      </main>
    </>
  );

}
export default Cart;