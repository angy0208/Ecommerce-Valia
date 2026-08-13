import { useEffect, useState } from "react";
import { getProducts } from "../../store/products";
import ProductCard from "./ProductCard";

function ProductGrid({ search, category, gender, sort }) {

  const [products, setProducts] = useState([]);

  function loadProducts() {
    setProducts(getProducts());
  }

  useEffect(() => {
    loadProducts();

    window.addEventListener(
      "productsUpdated",
      loadProducts
    );

    return () => {
      window.removeEventListener(
        "productsUpdated",
        loadProducts
      );
    };
  }, []);

  let filtered = [...products];

  // Filtrar por categoría
  if (category !== "Todos") {
    filtered = filtered.filter(
      product => product.category === category
    );
  }

  // Filtrar por género
  if (gender !== "Todos") {
    filtered = filtered.filter(
      product => product.gender === gender
    );
  }

  // Filtrar por búsqueda
  if (search) {
    filtered = filtered.filter(
      product =>
        product.name
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );
  }

  // Ordenar
  switch (sort) {

    case "low":
      filtered.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
      break;

    case "high":
      filtered.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      break;

    case "az":
      filtered.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    default:
      break;
  }

  return (
    <div>

      {filtered.length === 0 ? (

        <p className="text-gray-500 text-center py-20">
          No se encontraron productos con estos filtros.
        </p>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {filtered.map(product => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default ProductGrid;