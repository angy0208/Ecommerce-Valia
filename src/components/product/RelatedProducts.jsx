import { useEffect, useState } from "react";
import { getProducts } from "../../store/products";
import ProductCard from "./ProductCard";

function RelatedProducts({ currentId }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    setProducts(getProducts());

  }, [currentId]);


  const currentProduct = products.find(
    product => product.id === currentId
  );


  // Si todavía no existe el producto actual,
  // no mostramos productos relacionados.
  if (!currentProduct) {
    return null;
  }


  const related = products

    // No mostrar el producto que estamos viendo
    .filter(product => product.id !== currentId)

    // Ordenar por productos más relacionados
    .sort((a, b) => {

      const scoreA =
        (a.category === currentProduct.category ? 2 : 0) +
        (a.gender === currentProduct.gender ? 1 : 0);

      const scoreB =
        (b.category === currentProduct.category ? 2 : 0) +
        (b.gender === currentProduct.gender ? 1 : 0);

      return scoreB - scoreA;

    })

    // Mostrar máximo 3
    .slice(0, 3);


  const handleCardClick = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  // Si no existen productos relacionados,
  // no mostramos la sección vacía.
  if (related.length === 0) {
    return null;
  }


  return (

    <section className="bg-[#f6f3f2] py-24 mt-16 border-t border-gray-200/60">

      <div className="max-w-7xl mx-auto px-6 md:px-12">


        {/* TÍTULO */}

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-serif text-[#1c1b1b] mb-2">

            También te puede interesar

          </h2>


          <p className="text-gray-600 text-sm">

            Descubre productos seleccionados para complementar tu estilo.

          </p>

        </div>


        {/* PRODUCTOS RELACIONADOS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {related.map(product => (

            <div
              key={product.id}
              onClick={handleCardClick}
            >

              <ProductCard
                product={product}
              />

            </div>

          ))}

        </div>


      </div>

    </section>

  );

}

export default RelatedProducts;