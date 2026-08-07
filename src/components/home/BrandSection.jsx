import brandStory from "../../data/brandStory";
import {Link} from "react-router-dom"

function BrandSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col gap-24">

      {brandStory.map((item) => (

        <div
          key={item.id}
          className={`grid md:grid-cols-2 gap-16 items-center ${
            item.reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >

          <div className="overflow-hidden rounded-sm group cursor-pointer">

            <img
              src={item.image}
              alt={item.title}
              className="h-96 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

          </div>

          <div>

            <h2 className="text-5xl font-serif mb-6">
              {item.title}
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              {item.description}
            </p>

            <Link
            to={item.ruta}
            className= "uppercase border-b border-black pb-1 tracking-widest">
              {item.button}
            </Link>
{/* 

            <button className="uppercase border-b border-black pb-1 tracking-widest">
              
            </button> */}

          </div>

        </div>

      ))}

    </section>
  );
}

export default BrandSection;