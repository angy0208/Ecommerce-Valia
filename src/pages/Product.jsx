import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProducts } from "../store/products";

import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import RelatedProducts from "../components/product/RelatedProducts";

function Product() {

  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  function loadProduct() {

    const productsList = getProducts();

    setProducts(productsList);

    const foundProduct = productsList.find(
      p => p.id === Number(id)
    );

    setProduct(foundProduct || null);
  }

  useEffect(() => {

    loadProduct();

    window.addEventListener(
      "productsUpdated",
      loadProduct
    );

    return () => {

      window.removeEventListener(
        "productsUpdated",
        loadProduct
      );

    };

  }, [id]);

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
              images={
                product.images ||
                [product.image]
              }
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