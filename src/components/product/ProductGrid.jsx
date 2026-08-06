import products from "../../data/products";
import ProductCard from "./ProductCard";

function ProductGrid({ search, category, sort }) {

    let filtered = [...products];

    if (category !== "Todos") {

        filtered = filtered.filter(

            product => product.category === category

        );

    }

    if (search) {

        filtered = filtered.filter(

            product =>

                product.name.toLowerCase().includes(search.toLowerCase())

        );

    }

    switch (sort) {

        case "low":

            filtered.sort((a, b) => a.price - b.price);

            break;

        case "high":

            filtered.sort((a, b) => b.price - a.price);

            break;

        case "az":

            filtered.sort((a, b) => a.name.localeCompare(b.name));

            break;

        default:

            break;

    }

    return (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {filtered.map(product => (

                <ProductCard

                    key={product.id}

                    product={product}

                />

            ))}

        </div>

    );

}

export default ProductGrid;