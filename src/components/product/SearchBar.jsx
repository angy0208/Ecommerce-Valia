import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {

  return (

    <div className="mb-10">

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2"
        />

        <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          type="text"
          placeholder="Buscar splash..."
          className="w-full border rounded-lg py-3 pl-12 pr-4"
        />

      </div>

    </div>

  );

}

export default SearchBar;