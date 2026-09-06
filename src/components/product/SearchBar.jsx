import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
return ( <div className="mb-6 lg:mb-10"> <div className="relative"> <Search
       size={18}
       className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
     />

    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Buscar producto..."
      className="w-full border border-gray-200 rounded-lg py-3 pl-12 pr-4 outline-none focus:border-[#B78A65] transition"
    />
  </div>
</div>


);
}

export default SearchBar;
