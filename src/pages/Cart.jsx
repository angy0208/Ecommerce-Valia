import { useEffect, useState } from "react";
import { getCart, removeFromCart, updateQuantity } from "../store/cart"; // Asegúrate de tener o exportar updateQuantity de tu store

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + (Number(item.quantity) || 1),
    0
  );

  function deleteProduct(id) {
    removeFromCart(id);
    setCart(getCart());
  }

  function increaseQty(id, currentQty) {

    updateQuantity(
      id,
      currentQty + 1
    );

    setCart(getCart());

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

  function finalizarPedido() {
    let message = "Hola, deseo realizar el siguiente pedido:%0A%0A";
    cart.forEach((item) => {
      const price = Number(item.price) || 0;
      const qty = Number(item.quantity) || 1;
      message += `${item.name} x${qty} - $${price * qty}%0A`;
    });
    message += `%0ATotal: $${total}`;

    window.open(`https://wa.me/584241127242?text=${message}`, "_blank");
  }

  return (
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
            <p className="text-gray-500 py-8">Tu carrito está vacío.</p>
          ) : (
            cart.map((item) => {
              const itemPrice = Number(item.price) || 0;
              const itemQty = Number(item.quantity) || 1;

              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                >
                  {/* Imagen */}
                  <div className="w-full sm:w-32 h-32 bg-[#f6f3f2] rounded-md overflow-hidden shrink-0 flex items-center justify-center">
                    {item.image ? (
                      <img
                        alt={item.name}
                        className="w-full h-full object-cover mix-blend-multiply"
                        src={item.image}
                      />
                    ) : (
                      <span className="text-xs text-gray-400">Sin Imagen</span>
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
                        onClick={() => deleteProduct(item.id)}
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
                      {/* Controles de Cantidad con onClick activado */}
                      <div className="flex items-center justify-center border border-gray-300 rounded-full px-3 py-1">
                        <span className="text-sm font-medium">
                          {itemQty}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-base text-[#1c1b1b] font-semibold">
                          ${itemPrice * itemQty}.00 USD
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
                <span>Subtotal ({totalItems} artículos)</span>
                <span>${total}.00</span>
              </div>
              <div className="flex justify-between">
                <span>Envío estimado</span>
                <span className="text-[#6e5b49] font-medium">Gratis</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Impuestos (calculados en checkout)</span>
                <span>$0.00</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-3 mt-1">
              <div className="flex justify-between items-end">
                <span className="text-base text-[#1c1b1b] font-medium">Total</span>
                <span className="text-2xl font-serif text-[#1c1b1b] font-semibold">
                  ${total}.00 USD
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center my-2 leading-relaxed">
              Al continuar, serás redirigido a WhatsApp para coordinar el pago y
              envío de forma personalizada y segura.
            </p>

            <button
              onClick={finalizarPedido}
              disabled={cart.length === 0}
              className="w-full bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-widest py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Finalizar compra por WhatsApp</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
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
  );
}

export default Cart;