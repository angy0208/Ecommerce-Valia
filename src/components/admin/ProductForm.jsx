import { useState } from "react";
import { Upload } from "lucide-react";
import { addProduct } from "../../store/products";

const NOTES_OPTIONS = ["Floral", "Cítrico", "Amaderado", "Dulce", "Fresco"];

function ProductForm({ onSuccess }) {
  const [product, setProduct] = useState({
    name: "",
    category: "Femenino",
    price: "",
    stock: "",
    image: "",
    description: "",
    notes: [], // Lista de notas olfativas seleccionadas
  });

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  // Manejar selección/deselección de notas olfativas
  function handleNoteToggle(note) {
    setProduct((prev) => {
      const exists = prev.notes.includes(note);
      return {
        ...prev,
        notes: exists
          ? prev.notes.filter((n) => n !== note)
          : [...prev.notes, note],
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const stockNumber = Number(product.stock);

    addProduct({
      ...product,
      price: Number(product.price),
      stock: stockNumber,
      // Si el stock es mayor a 0, está disponible automáticamente
      available: stockNumber > 0, 
    });

    alert("Producto agregado correctamente.");
    
    if (onSuccess) onSuccess();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
          Nombre del Producto *
        </label>
        <input
          name="name"
          value={product.name}
          placeholder="Ej. Esencia 'Noche Blanca'"
          onChange={handleChange}
          required
          className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
            Género *
          </label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none transition-colors"
          >
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
            Precio ($) *
          </label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={product.price}
            placeholder="0.00"
            onChange={handleChange}
            required
            className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
            Stock *
          </label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            placeholder="0"
            onChange={handleChange}
            required
            min="0"
            className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none transition-colors"
          />
        </div>
      </div>

      {/* Selector de Notas Olfativas */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
          Notas Olfativas
        </label>
        <div className="flex flex-wrap gap-2">
          {NOTES_OPTIONS.map((note) => {
            const isSelected = product.notes.includes(note);
            return (
              <button
                type="button"
                key={note}
                onClick={() => handleNoteToggle(note)}
                className={`px-3 py-1.5 rounded-full text-xs transition-colors border ${
                  isSelected
                    ? "bg-[#6e5b49] text-white border-[#6e5b49]"
                    : "bg-white text-[#4e453e] border-[#d1c4bb] hover:border-[#6e5b49]"
                }`}
              >
                {note}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
          Imagen del Producto
        </label>
        <div className="flex items-center gap-4 border border-[#d1c4bb] rounded-lg p-2 bg-white">
          <label className="cursor-pointer bg-[#e9e1df] hover:bg-[#c9b19c] text-[#1c1b1b] text-xs px-4 py-2 rounded-md transition-colors flex items-center gap-2">
            <Upload size={14} /> Subir archivo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setProduct({
                    ...product,
                    image: URL.createObjectURL(file),
                  });
                }
              }}
            />
          </label>
          <span className="text-xs text-[#7f756d] truncate">
            {product.image ? "Imagen cargada" : "Ningún archivo seleccionado"}
          </span>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
          Descripción
        </label>
        <textarea
          name="description"
          value={product.description}
          placeholder="Describe las características de la fragancia..."
          onChange={handleChange}
          rows="3"
          className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#6e5b49] text-white font-medium text-xs uppercase tracking-[0.15em] py-3.5 rounded-lg hover:bg-[#313030] transition-colors duration-300 mt-2"
      >
        Guardar Producto
      </button>
    </form>
  );
}

export default ProductForm;