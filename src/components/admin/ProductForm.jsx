import { useState, useEffect } from "react";
import { Upload, X, Plus } from "lucide-react";
import Toast from "../common/Toast";
import { createProduct, getParentProducts } from "../../services/productService";


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

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

function ProductForm({ onSuccess }) {
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [parentProducts, setParentProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    category: "Perfumes",
    gender: "Femenino",
    price: "",
    stock: "",
    images: [],
    imageFiles: [],
    mainImage: 0,
    description: "",
    tags: [],
    attributes: [],
    parent_id: "",
  });

  useEffect(() => {

    async function loadParents() {

      try {

        const data =
          await getParentProducts();

        setParentProducts(data);

      } catch (error) {

        console.error(
          "Error cargando productos padre:",
          error
        );

      }

    }


    loadParents();

  }, []);
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
      const exists =
        prev.tags.includes(tag);
      return {
        ...prev,
        tags: exists
          ? prev.tags.filter(
            (item) => item !== tag
          )
          : [
            ...prev.tags,
            tag
          ],
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
      const updatedAttributes =
        [...prev.attributes];
      updatedAttributes[index] = {
        ...updatedAttributes[index],
        [field]: value,
      };
      return {
        ...prev,
        attributes:
          updatedAttributes,
      };
    });
  }

  function removeAttribute(index) {
    setProduct((prev) => ({
      ...prev,
      attributes:
        prev.attributes.filter(
          (_, i) => i !== index
        ),
    }));
  }
  // =========================
  // IMÁGENES
  // =========================
  function handleImageChange(e) {
    const files =
      Array.from(e.target.files);
    if (files.length === 0)
      return;
    // Limitar cantidad total
    const availableSlots =
      3 - product.imageFiles.length;
    if (availableSlots <= 0) {
      setToast({
        message: "Solo puedes subir máximo 3 imágenes.",
        type: "error"
      });
      e.target.value = "";
      return;
    }
    const selectedFiles =
      files.slice(0, availableSlots);
    const validFiles = [];
    for (const file of selectedFiles) {
      // Validar tipo
      if (!ALLOWED_TYPES.includes(file.type)) {
        setToast({
          message: `${file.name} no es un formato permitido. Usa JPG, PNG o WEBP.`,
          type: "error"
        });
        continue;
      }
      // Validar tamaño
      if (file.size > MAX_IMAGE_SIZE) {
        setToast({
          message: `${file.name} supera el tamaño máximo permitido de 5MB.`,
          type: "error"
        });
        continue;
      }
      validFiles.push(file);
    }
    if (validFiles.length === 0) {
      e.target.value = "";
      return;
    }
    const previews =
      validFiles.map(file =>
        URL.createObjectURL(file)
      );
    setProduct(prev => ({
      ...prev,
      images: [
        ...prev.images,
        ...previews
      ],
      imageFiles: [
        ...prev.imageFiles,
        ...validFiles
      ]
    }));



    e.target.value = "";
  }



  function removeImage(index) {


    setProduct(prev => {


      const newImages =
        prev.images.filter(
          (_, i) => i !== index
        );


      const newFiles =
        prev.imageFiles.filter(
          (_, i) => i !== index
        );


      let newMain =
        prev.mainImage;


      // si eliminamos la principal

      if (index === prev.mainImage) {

        newMain = 0;

      }


      // si eliminamos una imagen antes
      // de la principal

      if (index < prev.mainImage) {

        newMain--;

      }


      return {

        ...prev,

        images:
          newImages,


        imageFiles:
          newFiles,


        mainImage:
          newMain

      };


    });


  }



  function setMainImage(index) {


    setProduct(prev => ({

      ...prev,

      mainImage: index

    }));

  }



  // =========================
  // GUARDAR PRODUCTO
  // =========================


  async function handleSubmit(e) {
    e.preventDefault();
    const stockNumber =
      Number(product.stock);

    if (product.images.length === 0) {
      setToast({
        message: "Debes subir al menos una imagen del producto.",
        type: "error"
      });
      return;
    }
    const cleanAttributes =
      product.attributes.filter(
        (attribute) =>
          attribute.name.trim() !== "" &&
          attribute.value.trim() !== ""
      );
    const formData =
      new FormData();
    formData.append(
      "name",
      product.name
    );
    formData.append(
      "category",
      product.category
    );
    formData.append(
      "gender",
      product.gender
    );
    formData.append(
      "price",
      product.price
    );
    formData.append(
      "stock",
      stockNumber
    );
    formData.append(
      "description",
      product.description
    );
    formData.append(
      "tags",
      JSON.stringify(product.tags)
    );
    formData.append(
      "attributes",
      JSON.stringify(cleanAttributes)
    );
    formData.append(
      "featured",
      "false"
    );
    formData.append(
      "parent_id",
      product.parent_id || ""
    );
    // =========================
    // IMAGEN PRINCIPAL
    // =========================
    const orderedImages = [
      product.imageFiles[product.mainImage],
      ...product.imageFiles.filter(
        (_, index) => index !== product.mainImage
      )
    ];
    orderedImages.forEach(file => {
      formData.append(
        "images",
        file
      );
    });
    try {
      setLoading(true);
      const data = await createProduct(formData);
      console.log(
        "Producto creado:",
        data
      );
      setToast({
        message: "Producto agregado correctamente.",
        type: "success"
      });
      setProduct({
        name: "",
        category: "Perfumes",
        gender: "Femenino",
        price: "",
        stock: "",
        images: [],
        imageFiles: [],
        mainImage: 0,
        description: "",
        tags: [],
        attributes: [],
        parent_id:"",
      });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(
        "ERROR AL CREAR PRODUCTO:",
        error
      );
      setToast({
        message: "No se pudo crear el producto.",
        type: "error"
      });
    } finally {
      setLoading(false);
    }


  }
  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

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
            PRODUCTO PADRE
            ========================= */}

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#4e453e] mb-2">
            Producto padre
          </label>
          <select
            name="parent_id"
            value={product.parent_id}
            onChange={handleChange}
            className="w-full bg-white border border-[#d1c4bb] rounded-lg px-4 py-2.5 text-sm focus:border-[#6e5b49] outline-none"
          >
            <option value="">
              Ninguno (producto principal)
            </option>
            {parentProducts.map((parent) => (
              <option
                key={parent.id}
                value={parent.id}
              >
                {parent.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-[#7f756d] mt-2">
            Selecciona un producto padre si este producto será una variante.
          </p>
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
                  className={`px-3 py-1.5 rounded-full text-xs transition-colors border ${isSelected
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
            Puedes subir hasta 3 imágenes JPG, PNG o WEBP (máx. 5MB cada una). Selecciona una como imagen principal.
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

                  onClick={() => setMainImage(index)}

                  className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all
          
          ${product.mainImage === index

                      ? "border-[#6e5b49] shadow-md"

                      : "border-[#d1c4bb]"
                    }

          `}

                >


                  <img

                    src={image}

                    alt={`Vista previa ${index + 1}`}

                    className="w-full h-full object-cover"

                  />



                  {product.mainImage === index && (

                    <span className="absolute bottom-0 left-0 right-0 bg-[#6e5b49]/90 text-white text-[10px] text-center py-1">

                      Imagen principal

                    </span>

                  )}



                  <button

                    type="button"

                    onClick={(e) => {

                      e.stopPropagation();

                      removeImage(index);

                    }}

                    className="absolute top-2 right-2 bg-white/90 text-red-500 rounded-full p-1 hover:bg-white"

                  >

                    <X size={14} />

                  </button>



                </div>


              ))}


            </div>


          )}



          {product.images.length > 0 && (

            <p className="text-xs text-[#7f756d] mt-3">

              Haz clic sobre una imagen para convertirla en principal.

            </p>

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
          disabled={loading}
          className="w-full bg-[#6e5b49] text-white font-medium text-xs uppercase tracking-[0.15em] py-3.5 rounded-lg hover:bg-[#313030] transition-colors duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Guardando..." : "Guardar Producto"}
        </button>

      </form>
    </>
  );
}

export default ProductForm;