import { useEffect, useState } from "react";
import { Search, Edit2, Trash2 } from "lucide-react";
import {
  getProducts,
  deleteProduct,
  updateProduct,
} from "../../store/products";
import EditProduct from "./EditProduct";

function AdminProductTable() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  function load() {
    setProducts(getProducts());
  }

  useEffect(() => {

    load();

    window.addEventListener(
      "productsUpdated",
      load
    );

    return () => {

      window.removeEventListener(
        "productsUpdated",
        load
      );

    };

  }, []);

  function remove(id) {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      deleteProduct(id);
      load();
    }
  }

  // Actualizar stock directamente desde la tabla
  function handleStockChange(product, newStock) {
    const stockNumber = Math.max(0, Number(newStock));

    const updated = {
      ...product,
      stock: stockNumber,
      available: stockNumber > 0,
    };

    updateProduct(updated);

    load();
  }

  // Buscar por nombre, categoría o género
  const filteredProducts = products.filter((product) => {
    const search = searchQuery.toLowerCase();

    return (
      product.name?.toLowerCase().includes(search) ||
      product.category?.toLowerCase().includes(search) ||
      product.gender?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="w-full">

      {/* Buscador */}
      <div className="p-4 bg-white border-b border-[#e5e2e1] flex justify-between items-center">

        <div className="relative w-full max-w-sm">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7f756d]"
            size={18}
          />

          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#fcf9f8] border border-[#d1c4bb] focus:border-[#6e5b49] rounded-full py-2 pl-11 pr-4 text-sm outline-none transition-colors"
          />

        </div>

      </div>


      {/* Tabla */}
      <div className="overflow-x-auto">

        <table className="w-full text-left border-collapse">

          <thead>

            <tr className="bg-[#f6f3f2] text-[#4e453e] text-xs font-semibold uppercase tracking-wider border-b border-[#e5e2e1]">

              <th className="py-4 px-6">
                Imagen
              </th>

              <th className="py-4 px-6">
                Producto
              </th>

              <th className="py-4 px-6">
                Categoría
              </th>

              <th className="py-4 px-6">
                Género
              </th>

              <th className="py-4 px-6">
                Atributos
              </th>

              <th className="py-4 px-6">
                Precio
              </th>

              <th className="py-4 px-6">
                Stock
              </th>

              <th className="py-4 px-6 text-right">
                Acciones
              </th>

            </tr>

          </thead>


          <tbody className="divide-y divide-[#e5e2e1] text-sm">

            {filteredProducts.length === 0 ? (

              <tr>

                <td
                  colSpan="8"
                  className="text-center py-8 text-[#7f756d]"
                >
                  No se encontraron productos registrados.
                </td>

              </tr>

            ) : (

              filteredProducts.map((product) => (

                <tr
                  key={product.id}
                  className="hover:bg-[#fcf9f8] transition-colors group"
                >

                  {/* Imagen */}
                  <td className="py-4 px-6">

                    <div className="w-14 h-14 rounded-md bg-[#e9e1df] overflow-hidden border border-[#d1c4bb]/40">

                      {product.image ? (

                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />

                      ) : (

                        <div className="w-full h-full flex items-center justify-center text-xs text-[#7f756d]">
                          Sin foto
                        </div>

                      )}

                    </div>

                  </td>


                  {/* Producto */}
                  <td className="py-4 px-6">

                    <p className="font-serif font-medium text-[#1c1b1b] group-hover:text-[#6e5b49] transition-colors">
                      {product.name}
                    </p>

                  </td>


                  {/* Categoría */}
                  <td className="py-4 px-6">

                    <span className="text-xs font-medium text-[#1c1b1b]">
                      {product.category || "General"}
                    </span>

                  </td>


                  {/* Género */}
                  <td className="py-4 px-6">

                    <span className="px-2.5 py-1 bg-[#f0eded] text-[#4e453e] text-[10px] rounded-full font-medium">
                      {product.gender || "—"}
                    </span>

                  </td>


                  {/* Atributos */}
                  <td className="py-4 px-6">

                    <div className="flex flex-wrap gap-1.5 max-w-[220px]">

                      {product.attributes && product.attributes.length > 0 ? (

                        product.attributes.map((attribute, index) => (

                          <span
                            key={`${attribute.name}-${index}`}
                            className="px-2 py-1 bg-[#f6f3f2] border border-[#e5e2e1] text-[#4e453e] text-[10px] rounded-md"
                          >

                            <strong>
                              {attribute.name}:
                            </strong>{" "}

                            {attribute.value}

                          </span>

                        ))

                      ) : (

                        <span className="text-xs text-[#9a918b]">
                          Sin atributos
                        </span>

                      )}

                    </div>

                  </td>

                  {/* Precio */}
                  <td className="py-4 px-6 font-semibold text-[#1c1b1b] whitespace-nowrap">

                    ${Number(product.price).toFixed(2)}

                  </td>


                  {/* Stock */}
                  <td className="py-4 px-6">

                    <div className="flex items-center gap-2">

                      <input
                        type="number"
                        min="0"
                        value={product.stock ?? 0}
                        onChange={(e) =>
                          handleStockChange(
                            product,
                            e.target.value
                          )
                        }
                        className={`w-20 px-3 py-1.5 border rounded-lg text-sm font-medium outline-none transition-colors ${Number(product.stock) === 0
                          ? "border-[#ba1a1a] text-[#ba1a1a] bg-red-50"
                          : "border-[#d1c4bb] text-[#6e5b49] bg-white focus:border-[#6e5b49]"
                          }`}
                      />

                      <span className="text-xs text-[#7f756d]">
                        uds
                      </span>

                    </div>

                  </td>


                  {/* Acciones */}
                  <td className="py-4 px-6 text-right">

                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() => setSelected(product)}
                        title="Editar producto"
                        className="p-2 text-[#7f756d] hover:text-[#6e5b49] hover:bg-[#e9e1df] rounded-full transition-colors"
                      >

                        <Edit2 size={16} />

                      </button>


                      <button
                        onClick={() => remove(product.id)}
                        title="Eliminar producto"
                        className="p-2 text-[#7f756d] hover:text-[#ba1a1a] hover:bg-red-50 rounded-full transition-colors"
                      >

                        <Trash2 size={16} />

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>


      {/* Modal de edición */}
      {selected && (

        <EditProduct
          product={selected}
          close={() => {
            setSelected(null);
            load();
          }}
        />

      )}

    </div>
  );
}

export default AdminProductTable;