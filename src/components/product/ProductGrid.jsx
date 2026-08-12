import products from "../../data/products";
import ProductCard from "./ProductCard";

function ProductGrid({ search, category, gender, sort }) {

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
        product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Ordenar
  switch (sort) {

    case "low":
      filtered.sort((a, b) => a.price - b.price);
      break;

    case "high":
      filtered.sort((a, b) => b.price - a.price);
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