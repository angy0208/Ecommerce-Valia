import brandStory from "../../data/brandStory";

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

          <div>

            <img
              src={item.image}
              alt={item.title}
              className="h-96 w-full object-cover"
            />

          </div>

          <div>

            <h2 className="text-5xl font-serif mb-6">
              {item.title}
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              {item.description}
            </p>

            <button className="uppercase border-b border-black pb-1 tracking-widest">
              {item.button}
            </button>

          </div>

        </div>

      ))}

    </section>
  );
}

export default BrandSection;