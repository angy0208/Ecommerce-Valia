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

  if (product.available === false) {

    alert("Este producto está agotado.");

    return;

  }

  const cart = getCart();

  const existing = cart.find(
    item => item.id === product.id
  );

  const stock = Number(product.stock);

  if (existing) {

    let newQuantity =
      Number(existing.quantity) +
      Number(quantity);

    if (stock > 0 && newQuantity > stock) {

      newQuantity = stock;

      alert(
        `Solo hay ${stock} unidades disponibles.`
      );

    }

    existing.quantity = newQuantity;

  } else {

    let newQuantity = Number(quantity);

    if (stock > 0 && newQuantity > stock) {

      newQuantity = stock;

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

  if (!product) return;

  const stock = Number(product.stock);

  let newQuantity = Number(quantity);

  if (newQuantity < 1) {

    newQuantity = 1;

  }

  if (stock > 0 && newQuantity > stock) {

    newQuantity = stock;

  }

  product.quantity = newQuantity;

  saveCart(cart);

  window.dispatchEvent(
    new Event("cartUpdated")
  );

}