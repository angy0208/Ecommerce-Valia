
export function getCart() {

  return JSON.parse(
    localStorage.getItem("cart")
  ) || [];

}


export function saveCart(cart) {

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

}


export function addToCart(product, quantity = 1) {

  if (
    product.available === false ||
    Number(product.stock) <= 0
  ) {

    return {
      success: false,
      message: "Este producto está agotado.",
    };

  }

  const cart = getCart();

  const existing = cart.find(
    item => item.id === product.id
  );

  const stock = Number(product.stock);

  let limited = false;
  let message = "";

  if (existing) {

    let newQuantity =
      Number(existing.quantity) +
      Number(quantity);

    if (stock > 0 && newQuantity > stock) {

      newQuantity = stock;

      limited = true;

      message =
        `Solo hay ${stock} unidades disponibles.`;

    }

    existing.quantity = newQuantity;

    existing.stock = product.stock;
    existing.available = product.available;
    existing.price = product.price;
    existing.image = product.image;

  } else {

    let newQuantity = Number(quantity);

    if (stock > 0 && newQuantity > stock) {

      newQuantity = stock;

      limited = true;

      message =
        `Solo hay ${stock} unidades disponibles.`;

    }

    cart.push({

      ...product,

      quantity: newQuantity,

    });

  }

  saveCart(cart);

  window.dispatchEvent(
    new Event("cartUpdated")
  );

  return {
    success: true,
    limited,
    message,
  };

}


export function removeFromCart(id) {

  const cart = getCart().filter(
    item => item.id !== id
  );

  saveCart(cart);

  window.dispatchEvent(
    new Event("cartUpdated")
  );

}


export function updateQuantity(id, quantity) {

  const cart = getCart();

  const product = cart.find(
    item => item.id === id
  );

  if (!product) {
    return {
      success: false,
      message: "Producto no encontrado.",
    };
  }

  const stock = Number(product.stock);

  let newQuantity = Number(quantity);

  let limited = false;
  let message = "";

  if (newQuantity < 1) {

    newQuantity = 1;

  }

  if (
    stock > 0 &&
    newQuantity > stock
  ) {

    newQuantity = stock;

    limited = true;

    message =
      `Solo hay ${stock} unidades disponibles.`;

  }

  product.quantity = newQuantity;

  saveCart(cart);

  window.dispatchEvent(
    new Event("cartUpdated")
  );

  return {
    success: true,
    limited,
    message,
  };

}
