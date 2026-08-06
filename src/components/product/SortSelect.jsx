function SortSelect({ sort, setSort }) {

    return (

        <div>

            <h3 className="font-semibold mb-5">

                Ordenar

            </h3>

            <select

                value={sort}

                onChange={(e) => setSort(e.target.value)}

                className="w-full border rounded-lg p-3"

            >

                <option value="featured">

                    Destacados

                </option>

                <option value="low">

                    Precio menor

                </option>

                <option value="high">

                    Precio mayor

                </option>

                <option value="az">

                    A-Z

                </option>

            </select>

        </div>

    );

}

export default SortSelect;