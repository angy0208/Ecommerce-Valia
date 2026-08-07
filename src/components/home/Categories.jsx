import {Link} from "react-router-dom"
function Categories() {

  const categories = [
    {
      name: "Femenino",
      image: "/images/categories/femenino.jpg",
    },
    {
      name: "Masculino",
      image: "/images/categories/masculino.jpg",
    },
    {
      name: "Unisex",
      image: "/images/categories/unisex.jpg",
    },
  ];

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-serif mb-14">
          Explora por categoría
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {categories.map(category => (

            <Link
              key={category.name}
              to={`/catalogo?category=${category.name.toLowerCase()}`}
              className="group cursor-pointer overflow-hidden block"
            >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-[450px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="mt-5 text-center">

                  <h3 className="font-serif text-3xl">
                    {category.name}
                  </h3>

                </div>
            </Link>
          ))}

        </div>

      </div>

    </section>

  );
}

export default Categories;