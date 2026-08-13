import { useState } from "react";
import { X, Upload, Plus } from "lucide-react";
import { updateProduct } from "../../store/products";

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

function EditProduct({ product, close }) {

  const [formData, setFormData] = useState({
    ...product,

    gender: product.gender || "Femenino",

    category: product.category || "Perfumes",

    tags: product.tags || [],

    images:
      product.images ||
      (product.image ? [product.image] : []),

    description: product.description || "",

    attributes: product.attributes || [],
  });


  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }


  // =========================
  // CARACTERÍSTICAS
  // =========================

  function handleTagToggle(tag) {

    setFormData((prev) => {

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

    setFormData((prev) => ({
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

    setFormData((prev) => {

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

    setFormData((prev) => ({
      ...prev,

      attributes: prev.attributes.filter(
        (_, i) => i !== index
      ),
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

    setFormData((prev) => ({
      ...prev,
      images: newImages,
    }));

  }


  function removeImage(index) {

    setFormData((prev) => ({
      ...prev,

      images: prev.images.filter(
        (_, i) => i !== index
      ),
    }));

  }


  // =========================
  // GUARDAR CAMBIOS
  // =========================

  function handleSubmit(e) {

    e.preventDefault();

    const stockNum = Number(formData.stock);

    const images = formData.images || [];

    const cleanAttributes =
      formData.attributes.filter(
        (attribute) =>
          attribute.name.trim() !== "" &&
          attribute.value.trim() !== ""
      );


    updateProduct({

      ...formData,

      id: product.id,

      image: images[0] || "",

      images: images,

      price: Number(formData.price),

      stock: stockNum,

      available: stockNum > 0,

      attributes: cleanAttributes,

    });


    alert("Producto actualizado correctamente.");

    close();

  }


  return (

    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">

      <div className="bg-[#fcf9f8] w-full max-w-2xl max-h-[90vh] rounded-xl shadow-2xl overflow-y-auto">


        {/* HEADER */}

        <div className="flex justify-between items-center p-6 border-b border-[#e5e2e1]">

          <div>

            <h3 className="font-serif text-xl text-[#1c1b1b]">
              Editar Producto
            </h3>

            <p className="text-xs text-[#7f756d] mt-1">
              Modifica la información del producto.
            </p>

          </div>


          <button
            type="button"
            onClick={close}
            className="text-[#7f756d] hover:text-[#1c1b1b]"
          >

            <X size={20} />

          </button>

        </div>


        <form
          onSubmit={handleSubmit}
          className="p-6 flex flex-col gap-5"
        >


          {/* NOMBRE */}

          <div>

            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
              Nombre del Producto
            </label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm bg-white focus:border-[#6e5b49] outline-none"
            />

          </div>


          {/* GÉNERO / CATEGORÍA */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>

              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
                Género
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm bg-white focus:border-[#6e5b49] outline-none"
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
                Categoría
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm bg-white focus:border-[#6e5b49] outline-none"
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


          {/* PRECIO / STOCK */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>

              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
                Precio ($)
              </label>

              <input
                type="number"
                step="0.01"
                min="0"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm bg-white focus:border-[#6e5b49] outline-none"
              />

            </div>


            <div>

              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
                Stock
              </label>

              <input
                type="number"
                min="0"
                name="stock"
                value={formData.stock ?? 0}
                onChange={handleChange}
                required
                className="w-full border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm bg-white focus:border-[#6e5b49] outline-none"
              />

            </div>

          </div>


          {/* ATRIBUTOS */}

          <div>

            <div className="flex items-center justify-between mb-2">

              <div>

                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e]">
                  Atributos del producto
                </label>

                <p className="text-xs text-[#7f756d] mt-1">
                  Talla, ml, color, material, acabado, etc.
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


            {formData.attributes.length === 0 && (

              <div className="border border-dashed border-[#d1c4bb] rounded-lg p-4 text-center bg-white">

                <p className="text-xs text-[#7f756d]">
                  No hay atributos agregados.
                </p>

              </div>

            )}


            <div className="flex flex-col gap-3">

              {formData.attributes.map(
                (attribute, index) => (

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
                      onClick={() =>
                        removeAttribute(index)
                      }
                      className="p-2 text-[#7f756d] hover:text-red-500"
                    >

                      <X size={17} />

                    </button>

                  </div>

                )
              )}

            </div>

          </div>


          {/* CARACTERÍSTICAS */}

          <div>

            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
              Características
            </label>

            <div className="flex flex-wrap gap-2">

              {TAG_OPTIONS.map((tag) => {

                const isSelected =
                  formData.tags.includes(tag);

                return (

                  <button
                    type="button"
                    key={tag}
                    onClick={() =>
                      handleTagToggle(tag)
                    }
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


          {/* IMÁGENES */}

          <div>

            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
              Imágenes del Producto
            </label>

            <p className="text-xs text-[#7f756d] mb-3">
              Máximo 3 imágenes. La primera será la principal.
            </p>


            <label className="cursor-pointer bg-[#e9e1df] hover:bg-[#c9b19c] text-[#1c1b1b] text-xs px-4 py-2.5 rounded-md flex items-center justify-center gap-2 w-fit">

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


            {formData.images.length > 0 && (

              <div className="grid grid-cols-3 gap-3 mt-4">

                {formData.images.map(
                  (image, index) => (

                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden border border-[#d1c4bb] bg-white"
                    >

                      <img
                        src={image}
                        alt={`Imagen ${index + 1}`}
                        className="w-full h-full object-cover"
                      />


                      {index === 0 && (

                        <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] text-center py-1">
                          Principal
                        </span>

                      )}


                      <button
                        type="button"
                        onClick={() =>
                          removeImage(index)
                        }
                        className="absolute top-2 right-2 bg-white/90 text-red-500 rounded-full p-1"
                      >

                        <X size={14} />

                      </button>

                    </div>

                  )
                )}

              </div>

            )}

          </div>


          {/* DESCRIPCIÓN */}

          <div>

            <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
              Descripción
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe las características del producto..."
              className="w-full border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm bg-white focus:border-[#6e5b49] outline-none resize-none"
            />

          </div>


          {/* BOTONES */}

          <div className="flex gap-3 pt-2">

            <button
              type="button"
              onClick={close}
              className="flex-1 border border-[#d1c4bb] text-[#4e453e] py-3 rounded-lg text-xs uppercase tracking-wider font-medium hover:bg-[#e9e1df]"
            >
              Cancelar
            </button>


            <button
              type="submit"
              className="flex-1 bg-[#6e5b49] text-white py-3 rounded-lg text-xs uppercase tracking-wider font-medium hover:bg-[#313030]"
            >
              Guardar Cambios
            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default EditProduct;