export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];

}

export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product, quantity) {
  const cart = getCart();

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity,
    });
  }

  saveCart(cart);
  window.dispatchEvent(new Event("cartUpdated"));
}

export function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);

  saveCart(cart);
  window.dispatchEvent(new Event("cartUpdated"));
}

export function updateQuantity(id, quantity) {
  const cart = getCart();

  const product = cart.find(item => item.id === id);

  if (product) {
    product.quantity = quantity;
  }

  saveCart(cart);
  window.dispatchEvent(new Event("cartUpdated"));
}