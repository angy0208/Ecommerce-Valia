import { useState } from "react";

import SearchBar from "../components/product/SearchBar";
import CategoryFilter from "../components/product/CategoryFilter";
import SortSelect from "../components/product/SortSelect";
import ProductGrid from "../components/product/ProductGrid";

function Catalog() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("Todos");

  const [sort, setSort] = useState("featured");

  return (

    <>

    <section className="bg-[#F8F5F1] pt-32 pb-16 md:pt-36 md:pb-20 border-b border-[#E5DDD3]">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        
        {/* Subtítulo estilo etiqueta/badge */}
        <span className="text-xs font-semibold tracking-[0.25em] text-[#b78a65] uppercase mb-3 block">
          Colección
        </span>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-serif text-[#2d2d2d] mb-4 tracking-tight">
          Catálogo
        </h1>

        {/* Descripción */}
        <p className="text-gray-600 max-w-xl text-base md:text-lg leading-relaxed">
          Descubre todas nuestras fragancias disponibles y encuentra la esencia perfecta para cada momento.
        </p>

      </div>
    </section>
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-[250px_1fr] gap-12">

          <aside>

            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            <CategoryFilter
              category={category}
              setCategory={setCategory}
            />

            <SortSelect
              sort={sort}
              setSort={setSort}
            />

          </aside>

          <ProductGrid
            search={search}
            category={category}
            sort={sort}
          />

        </div>

      </section>

    </>

  );

}

export default Catalog;