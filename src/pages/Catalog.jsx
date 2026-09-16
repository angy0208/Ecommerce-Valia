import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../components/product/SearchBar";
import CategoryFilter from "../components/product/CategoryFilter";
import GenderFilter from "../components/product/GenderFilter";
import SortSelect from "../components/product/SortSelect";
import ProductGrid from "../components/product/ProductGrid";

function Catalog() {
const [search, setSearch] = useState("");
const [sort, setSort] = useState("featured");

const [searchParams, setSearchParams] = useSearchParams();

const categoryFromUrl = searchParams.get("category");
const genderFromUrl = searchParams.get("gender");

const category = categoryFromUrl
? categoryFromUrl.charAt(0).toUpperCase() +
categoryFromUrl.slice(1)
: "Todos";

const gender = genderFromUrl
? genderFromUrl.charAt(0).toUpperCase() +
genderFromUrl.slice(1)
: "Todos";

function setCategory(value) {
const params = new URLSearchParams(searchParams);

if (value === "Todos") {
  params.delete("category");
} else {
  params.set("category", value.toLowerCase());
}

setSearchParams(params);


}

function setGender(value) {
const params = new URLSearchParams(searchParams);

if (value === "Todos") {
  params.delete("gender");
} else {
  params.set("gender", value.toLowerCase());
}

setSearchParams(params);


}

return (
<>
{/* HERO DEL CATÁLOGO */} <section className="w-full bg-[#faf8f5] pt-24 pb-10 md:pt-36 md:pb-16 border-b border-[#DCD3CA]"> <div className="w-full max-w-7xl mx-auto px-4 md:px-6 text-center md:text-left"> <span className="text-xs font-semibold tracking-[0.25em] text-[#b78a65] uppercase mb-3 block">
Colección </span>

      <h1 className="text-4xl md:text-6xl font-serif text-[#2d2d2d] mb-4">
        Catálogo
      </h1>

      <p className="text-[#5c544d] max-w-xl mx-auto md:mx-0 text-sm md:text-lg leading-relaxed font-light">
        Descubre productos seleccionados para cada estilo y ocasión.
      </p>
    </div>
  </section>

  {/* CATÁLOGO */}
  <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
    <div className="w-full min-w-0 grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)] gap-8 lg:gap-12">

      {/* FILTROS */}
      <aside className="w-full min-w-0 space-y-5 lg:space-y-6">
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

      {/* PRODUCTOS */}
      <div className="w-full min-w-0">
        <ProductGrid
          search={search}
          category={category}
          gender={gender}
          sort={sort}
        />
      </div>

    </div>
  </section>
</>


);
}

export default Catalog;
