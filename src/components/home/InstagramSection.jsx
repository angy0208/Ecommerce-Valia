function InstagramSection() {
  return (

    <section className="py-24 bg-[#faf8f5]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-serif mb-14">
          Síguenos en Instagram
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {[1,2,3,4,5,6].map(item => (

            <img
              key={item}
              src={`https://picsum.photos/400/500?random=${item}`}
              className="aspect-square object-cover"
              alt=""
            />

          ))}

        </div>

      </div>

    </section>

  );
}

export default InstagramSection;