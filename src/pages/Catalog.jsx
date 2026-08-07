import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../components/product/SearchBar";
import CategoryFilter from "../components/product/CategoryFilter";
import SortSelect from "../components/product/SortSelect";
import ProductGrid from "../components/product/ProductGrid";

function Catalog() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("Todos");

  const [sort, setSort] = useState("featured");

  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  useEffect(() => {
    if (categoryFromUrl) {
      // Convertimos la primera letra a mayúscula para que coincida con tu filtro ("femenino" -> "Femenino")
      const formattedCategory = categoryFromUrl.charAt(0).toUpperCase() + categoryFromUrl.slice(1);
      setCategory(formattedCategory);
    } else {
      setCategory("Todos");
    }
  }, [categoryFromUrl]);

return (
    <>
      {/* Hero del Catálogo: Tono Crema/Arena suave para diferenciarse suavemente del Navbar */}
      <section className="bg-[#faf8f5] pt-32 pb-14 md:pt-36 md:pb-16 border-b border-[#DCD3CA]">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          
          {/* Badge / Subtítulo */}
          <span className="text-xs font-semibold tracking-[0.25em] text-[#b78a65] uppercase mb-3 block">
            Colección
          </span>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-serif text-[#2d2d2d] mb-4 tracking-tight">
            Catálogo
          </h1>

          {/* Descripción */}
          <p className="text-[#5c544d] max-w-xl text-base md:text-lg leading-relaxed font-light">
            Descubre todas nuestras fragancias disponibles y encuentra la esencia perfecta para cada momento.
          </p>

        </div>
      </section>

      {/* Sección del Catálogo (Mismo tono base que el resto de la interfaz) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[250px_1fr] gap-12">
          
          <aside className="space-y-6">
            <SearchBar search={search} setSearch={setSearch} />
            <CategoryFilter category={category} setCategory={setCategory} />
            <SortSelect sort={sort} setSort={setSort} />
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