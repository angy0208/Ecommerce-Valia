import { useState } from "react";
import { Upload, X, Plus } from "lucide-react";
import { addProduct } from "../../store/products";

const TAG_OPTIONS = [
  "Elegante",
  "Casual",
  "Moderno",
  "Premium",
  "Natural",
  "Minimalista",
  "Dulce",
  "Fresco",
  "Formal",
];

function ProductForm({ onSuccess }) {

  const [product, setProduct] = useState({
    name: "",
    category: "Perfumes",
    gender: "Femenino",
    price: "",
    stock: "",
    images: [],
    description: "",
    tags: [],
    attributes: [],
  });

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  // =========================
  // CARACTERÍSTICAS
  // =========================

  function handleTagToggle(tag) {

    setProduct((prev) => {

      const exists = prev.tags.includes(tag);

      return {
        ...prev,
        tags: exists
          ? prev.tags.filter((item) => item !== tag)
          : [...prev.tags, tag],
      };

    });

  }

  // =========================
  // ATRIBUTOS
  // =========================

  function addAttribute() {

    setProduct((prev) => ({
      ...prev,
      attributes: [
        ...prev.attributes,
        {
          name: "",
          value: "",
        },
      ],
    }));

  }

  function updateAttribute(index, field, value) {

    setProduct((prev) => {

      const updatedAttributes = [...prev.attributes];

      updatedAttributes[index] = {
        ...updatedAttributes[index],
        [field]: value,
      };

      return {
        ...prev,
        attributes: updatedAttributes,
      };

    });

  }

  function removeAttribute(index) {

    setProduct((prev) => ({
      ...prev,
      attributes: prev.attributes.filter((_, i) => i !== index),
    }));

  }

  // =========================
  // IMÁGENES
  // =========================

  function handleImageChange(e) {

    const files = Array.from(e.target.files);

    if (files.length === 0) return;

    const newImages = files
      .slice(0, 3)
      .map((file) => URL.createObjectURL(file));

    setProduct((prev) => ({
      ...prev,
      images: newImages,
    }));

  }

  function removeImage(index) {

    setProduct((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));

  }

  // =========================
  // GUARDAR PRODUCTO
  // =========================

  function handleSubmit(e) {

    e.preventDefault();

    const stockNumber = Number(product.stock);

    if (product.images.length === 0) {

      alert("Debes subir al menos una imagen del producto.");

      return;
    }

    const cleanAttributes = product.attributes.filter(
      (attribute) =>
        attribute.name.trim() !== "" &&
        attribute.value.trim() !== ""
    );

    const productToSave = {

      ...product,

      image: product.images[0],

      images: product.images,

      price: Number(product.price),

      stock: stockNumber,

      available: stockNumber > 0,

      featured: false,

      attributes: cleanAttributes,
    };

    addProduct(productToSave);

    alert("Producto agregado correctamente.");

    setProduct({
      name: "",
      category: "Perfumes",
      gender: "Femenino",
      price: "",
      stock: "",
      images: [],
      description: "",
      tags: [],
      attributes: [],
    });

    if (onSuccess) {
      onSuccess();
    }

  }

  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* =========================
          NOMBRE
      ========================= */}

      <div>

        <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
          Nombre del Producto *
        </label>

        <input
          name="name"
          value={product.name}
          placeholder="Ej. Sweet Vanilla"
          onChange={handleChange}
          required
          className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none transition-colors"
        />

      </div>


      {/* =========================
          GÉNERO / CATEGORÍA
      ========================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div>

          <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
            Género *
          </label>

          <select
            name="gender"
            value={product.gender}
            onChange={handleChange}
            required
            className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none"
          >

            <option value="Femenino">
              Femenino
            </option>

            <option value="Masculino">
              Masculino
            </option>

            <option value="Unisex">
              Unisex
            </option>

          </select>

        </div>


        <div>

          <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
            Categoría *
          </label>

          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none"
          >

            <option value="Perfumes">
              Perfumes
            </option>

            <option value="Ropa">
              Ropa
            </option>

            <option value="Accesorios">
              Accesorios
            </option>

            <option value="Maquillaje">
              Maquillaje
            </option>

          </select>

        </div>

      </div>


      {/* =========================
          PRECIO / STOCK
      ========================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div>

          <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
            Precio ($) *
          </label>

          <input
            type="number"
            step="0.01"
            min="0"
            name="price"
            value={product.price}
            placeholder="0.00"
            onChange={handleChange}
            required
            className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none"
          />

        </div>


        <div>

          <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
            Stock *
          </label>

          <input
            type="number"
            min="0"
            name="stock"
            value={product.stock}
            placeholder="0"
            onChange={handleChange}
            required
            className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none"
          />

        </div>

      </div>


      {/* =========================
          ATRIBUTOS
      ========================= */}

      <div>

        <div className="flex items-center justify-between mb-2">

          <div>

            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e]">
              Atributos del producto
            </label>

            <p className="text-xs text-[#7f756d] mt-1">
              Agrega características específicas como talla, ml, color, material, etc.
            </p>

          </div>

          <button
            type="button"
            onClick={addAttribute}
            className="flex items-center gap-1.5 text-xs font-medium text-[#6e5b49] hover:text-[#313030]"
          >

            <Plus size={15} />

            Agregar

          </button>

        </div>


        {product.attributes.length === 0 && (

          <div className="border border-dashed border-[#d1c4bb] rounded-lg p-4 text-center bg-white">

            <p className="text-xs text-[#7f756d]">
              No hay atributos agregados.
            </p>

          </div>

        )}


        <div className="flex flex-col gap-3">

          {product.attributes.map((attribute, index) => (

            <div
              key={index}
              className="flex gap-2 items-center"
            >

              <input
                type="text"
                placeholder="Ej. Talla"
                value={attribute.name}
                onChange={(e) =>
                  updateAttribute(
                    index,
                    "name",
                    e.target.value
                  )
                }
                className="flex-1 bg-white border border-[#d1c4bb] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#6e5b49]"
              />


              <input
                type="text"
                placeholder="Ej. M"
                value={attribute.value}
                onChange={(e) =>
                  updateAttribute(
                    index,
                    "value",
                    e.target.value
                  )
                }
                className="flex-1 bg-white border border-[#d1c4bb] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#6e5b49]"
              />


              <button
                type="button"
                onClick={() => removeAttribute(index)}
                className="p-2 text-[#7f756d] hover:text-red-500 transition-colors"
              >

                <X size={17} />

              </button>

            </div>

          ))}

        </div>

      </div>


      {/* =========================
          CARACTERÍSTICAS
      ========================= */}

      <div>

        <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
          Características
        </label>

        <div className="flex flex-wrap gap-2">

          {TAG_OPTIONS.map((tag) => {

            const isSelected = product.tags.includes(tag);

            return (

              <button
                type="button"
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1.5 rounded-full text-xs transition-colors border ${
                  isSelected
                    ? "bg-[#6e5b49] text-white border-[#6e5b49]"
                    : "bg-white text-[#4e453e] border-[#d1c4bb] hover:border-[#6e5b49]"
                }`}
              >

                {tag}

              </button>

            );

          })}

        </div>

      </div>


      {/* =========================
          IMÁGENES
      ========================= */}

      <div>

        <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
          Imágenes del Producto *
        </label>

        <p className="text-xs text-[#7f756d] mb-3">
          Puedes subir hasta 3 imágenes. La primera será la imagen principal.
        </p>

        <label className="cursor-pointer bg-[#e9e1df] hover:bg-[#c9b19c] text-[#1c1b1b] text-xs px-4 py-2.5 rounded-md transition-colors flex items-center justify-center gap-2 w-fit">

          <Upload size={14} />

          Seleccionar imágenes

          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleImageChange}
          />

        </label>


        {product.images.length > 0 && (

          <div className="grid grid-cols-3 gap-3 mt-4">

            {product.images.map((image, index) => (

              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden border border-[#d1c4bb] bg-white"
              >

                <img
                  src={image}
                  alt={`Vista previa ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {index === 0 && (

                  <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] text-center py-1">
                    Principal
                  </span>

                )}

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-white/90 text-red-500 rounded-full p-1 hover:bg-white"
                >

                  <X size={14} />

                </button>

              </div>

            ))}

          </div>

        )}

      </div>


      {/* =========================
          DESCRIPCIÓN
      ========================= */}

      <div>

        <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
          Descripción
        </label>

        <textarea
          name="description"
          value={product.description}
          placeholder="Describe las características del producto..."
          onChange={handleChange}
          rows="4"
          className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none resize-none"
        />

      </div>


      {/* =========================
          GUARDAR
      ========================= */}

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