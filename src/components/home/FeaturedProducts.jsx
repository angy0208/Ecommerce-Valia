import products from "../../data/products";
import ProductCard from "../product/ProductCard";

function FeaturedProducts() {

  const featured = products.filter(
    product => product.featured
  );

  return (

    <section className="bg-[#faf8f5] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-14">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Colección
            </p>

            <h2 className="text-5xl font-serif mt-3">
              Más Vendidos
            </h2>

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {featured.map(product => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>

  );
}

export default FeaturedProducts;