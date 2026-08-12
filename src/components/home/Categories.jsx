import { Link } from "react-router-dom";


function Categories() {


  const genders = [

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
    }

  ];



  const categories = [

    {
      name: "Perfumes",
      image: "/images/categories/perfumes.jpg",
    },

    {
      name: "Ropa",
      image: "/images/categories/ropa.jpg",
    },

    {
      name: "Accesorios",
      image: "/images/categories/accesorios.jpg",
    },

    {
      name: "Maquillaje",
      image: "/images/categories/maquillaje.jpg",
    }

  ];



  return (

    <>


      {/* Sección por género */}

      <section className="py-24 bg-white">


        <div className="max-w-7xl mx-auto px-6">


          <h2 className="text-center text-5xl font-serif mb-14">

            Explora por estilo

          </h2>



          <div className="grid md:grid-cols-3 gap-8">


            {

              genders.map(item => (


                <Link

                  key={item.name}

                  to={`/catalogo?gender=${item.name.toLowerCase()}`}

                  className="group overflow-hidden block"

                >


                  <img

                    src={item.image}

                    alt={item.name}

                    className="h-[450px] w-full object-cover transition duration-500 group-hover:scale-105"

                  />



                  <div className="mt-5 text-center">


                    <h3 className="font-serif text-3xl">

                      {item.name}

                    </h3>


                  </div>


                </Link>


              ))


            }


          </div>


        </div>


      </section>





      {/* Sección por categoría de producto */}

      <section className="py-24 bg-[#faf8f5]">


        <div className="max-w-7xl mx-auto px-6">


          <h2 className="text-center text-5xl font-serif mb-14">

            Explora categorías

          </h2>



          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


            {

              categories.map(item => (


                <Link

                  key={item.name}

                  to={`/catalogo?category=${item.name.toLowerCase()}`}

                  className="group overflow-hidden block"

                >


                  <img

                    src={item.image}

                    alt={item.name}

                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"

                  />



                  <div className="mt-5 text-center">


                    <h3 className="font-serif text-3xl">

                      {item.name}

                    </h3>


                  </div>


                </Link>


              ))


            }


          </div>


        </div>


      </section>


    </>


  );


}


export default Categories; 