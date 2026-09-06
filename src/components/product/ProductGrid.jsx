import { useEffect, useState } from "react";

import { getProducts } from "../../services/productService";

import ProductCard from "./ProductCard";


function ProductGrid({ search, category, gender, sort }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {

      try {

        const data = await getProducts();

        const productsWithVariants = data.map((product) => ({
          ...product,

          variants: data.filter(
            (variant) => variant.parent_id === product.id
          ),
        }));

        setProducts(productsWithVariants);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    loadProducts();

  }, []);


  if (loading) {

    return (

      <p className="text-gray-500 text-center py-20">

        Cargando productos...

      </p>

    );

  }


  // Solo mostrar productos principales
  // Las variantes aparecen dentro del detalle del padre

  let filtered = products.filter(
    product => !product.parent_id
  );


  // FILTRAR POR CATEGORÍA

  if (category !== "Todos") {

    filtered = filtered.filter(
      product => product.category === category
    );

  }


  // FILTRAR POR GÉNERO

  if (gender !== "Todos") {

    filtered = filtered.filter(
      product => product.gender === gender
    );

  }


  // FILTRAR POR BÚSQUEDA

  if (search) {

    filtered = filtered.filter(product =>
      product.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  }


  // ORDENAR

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

        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 lg:gap-10">

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