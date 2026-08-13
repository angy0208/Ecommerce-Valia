import productsData from "../data/products";


export function getProducts() {

  const saved = localStorage.getItem("products");

  return saved
    ? JSON.parse(saved)
    : productsData;

}


function notifyProductsUpdated() {

  window.dispatchEvent(
    new Event("productsUpdated")
  );

}


export function saveProducts(products) {

  localStorage.setItem(
    "products",
    JSON.stringify(products)
  );

  notifyProductsUpdated();

}


export function addProduct(product) {

  const products = getProducts();

  const newProduct = {

    ...product,

    id: Date.now(),

    price: Number(product.price),

    stock: Number(product.stock),

    available: Number(product.stock) > 0,

  };


  saveProducts([
    ...products,
    newProduct
  ]);

}


export function deleteProduct(id) {

  const products = getProducts();

  const updated = products.filter(
    product => product.id !== id
  );

  saveProducts(updated);

}


export function updateProduct(updatedProduct) {

  const products = getProducts();

  const updated = products.map(product =>
    product.id === updatedProduct.id
      ? updatedProduct
      : product
  );

  saveProducts(updated);

}


export function toggleAvailability(id) {

  const products = getProducts();

  const updated = products.map(product => {

    if (product.id === id) {

      return {
        ...product,
        available: !product.available
      };

    }

    return product;

  });


  saveProducts(updated);

}