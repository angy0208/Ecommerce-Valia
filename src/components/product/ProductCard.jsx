import { Link } from "react-router-dom";


function ProductCard({ product }) {


  return (

    <Link

      to={`/producto/${product.id}`}

      className="group block cursor-pointer hover:-translate-y-1 transition duration-300"

    >


      <div className="overflow-hidden">


        <img

          src={product.image}

          alt={product.name}

          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"

        />


      </div>



      <div className="mt-5">


        {/* Categoría y género */}

        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500">


          <p>

            {product.category}

          </p>


          <span>

            •

          </span>


          <p>

            {product.gender}

          </p>


        </div>




        <h3 className="mt-2 text-2xl font-serif">

          {product.name}

        </h3>





        {/* Características */}

        <div className="flex flex-wrap gap-2 mt-3">


          {

            product.tags?.map(tag => (


              <span

                key={tag}

                className="text-xs bg-[#f6f3f2] px-3 py-1 rounded-full"

              >


                {tag}


              </span>


            ))


          }


        </div>




        <p className="mt-3 text-lg font-medium">

          ${product.price}

        </p>





        <p

          className={`text-sm mt-2 ${product.available === false

              ?

              "text-red-500"

              :

              "text-green-600"

            }`}

        >


          {

            product.available === false

              ?

              "Agotado"

              :

              "Disponible"

          }


        </p>



      </div>


    </Link>


  );


}


export default ProductCard;