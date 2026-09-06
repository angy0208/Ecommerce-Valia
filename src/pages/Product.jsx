import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import RelatedProducts from "../components/product/RelatedProducts";

const API_URL = import.meta.env.VITE_API_URL;

function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);

        const response = await fetch(
          `${API_URL}/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Producto no encontrado");
        }

        const data = await response.json();

        setProduct(data);

        console.log(
          "PRODUCTO RECIBIDO:",
          data
        );
      } catch (error) {
        console.error(
          "Error al cargar producto:",
          error
        );

        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  // Cargando
  if (loading) {
    return (
      <section className="py-40 text-center">
        <p className="text-gray-500">
          Cargando producto...
        </p>
      </section>
    );
  }

  // Producto no encontrado
  if (!product) {
    return (
      <section className="py-40 text-center">
        <h2 className="text-4xl font-serif">
          Producto no encontrado
        </h2>
      </section>
    );
  }

  return (
    <main className="flex-grow pt-32 md:pt-36 pb-16">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

          {/* Galería */}
          <div className="md:col-span-7">
            <ProductGallery
              images={[
                product.image,
                ...(product.images || []).filter(
                  (img) => img !== product.image
                ),
              ]}
              name={product.name}
            />
          </div>

          {/* Información */}
          <div className="md:col-span-5">
            <ProductInfo
              product={product}
            />
          </div>

        </div>
      </section>

      <RelatedProducts
        currentId={product.id}
      />
    </main>
  );
}

export default Product;