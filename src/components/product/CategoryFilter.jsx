const categories = [
    "Todos",
    "Femenino",
    "Masculino",
    "Unisex"
];

function CategoryFilter({ category, setCategory }) {

    return (

        <div className="mb-10">

            <h3 className="font-semibold mb-5">

                Categorías

            </h3>

            <div className="space-y-3">

                {categories.map(item => (

                    <button

                        key={item}

                        onClick={() => setCategory(item)}

                        className={`block transition ${category === item
                                ? "text-[#B78A65] font-semibold"
                                : "hover:text-[#B78A65]"
                            }`}

                    >

                        {item}

                    </button>

                ))}

            </div>

        </div>

    );

}

export default CategoryFilter;