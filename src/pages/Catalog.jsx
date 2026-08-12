import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../components/product/SearchBar";
import CategoryFilter from "../components/product/CategoryFilter";
import GenderFilter from "../components/product/GenderFilter";
import SortSelect from "../components/product/SortSelect";
import ProductGrid from "../components/product/ProductGrid";

function Catalog() {

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("Todos");

    const [gender, setGender] = useState("Todos");

    const [sort, setSort] = useState("featured");

    const [searchParams] = useSearchParams();

    const categoryFromUrl = searchParams.get("category");
    const genderFromUrl = searchParams.get("gender");


    useEffect(() => {

        // Filtro por categoría
        if (categoryFromUrl) {

            const formattedCategory =
                categoryFromUrl.charAt(0).toUpperCase() +
                categoryFromUrl.slice(1);

            setCategory(formattedCategory);

        } else {

            setCategory("Todos");

        }


        // Filtro por género
        if (genderFromUrl) {

            const formattedGender =
                genderFromUrl.charAt(0).toUpperCase() +
                genderFromUrl.slice(1);

            setGender(formattedGender);

        } else {

            setGender("Todos");

        }

    }, [categoryFromUrl, genderFromUrl]);


    return (
        <>

            {/* HERO DEL CATÁLOGO */}

            <section className="bg-[#faf8f5] pt-32 pb-14 md:pt-36 md:pb-16 border-b border-[#DCD3CA]">

                <div className="max-w-7xl mx-auto px-6 text-center md:text-left">

                    <span className="text-xs font-semibold tracking-[0.25em] text-[#b78a65] uppercase mb-3 block">
                        Colección
                    </span>

                    <h1 className="text-4xl md:text-6xl font-serif text-[#2d2d2d] mb-4">
                        Catálogo
                    </h1>

                    <p className="text-[#5c544d] max-w-xl text-base md:text-lg leading-relaxed font-light">
                        Descubre productos seleccionados para cada estilo y ocasión.
                    </p>

                </div>

            </section>


            {/* CATÁLOGO */}

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid lg:grid-cols-[250px_1fr] gap-12">

                    <aside className="space-y-6">

                        <SearchBar
                            search={search}
                            setSearch={setSearch}
                        />


                        <CategoryFilter
                            category={category}
                            setCategory={setCategory}
                        />


                        <GenderFilter
                            gender={gender}
                            setGender={setGender}
                        />


                        <SortSelect
                            sort={sort}
                            setSort={setSort}
                        />

                    </aside>


                    <ProductGrid
                        search={search}
                        category={category}
                        gender={gender}
                        sort={sort}
                    />

                </div>

            </section>

        </>
    );
}

export default Catalog;