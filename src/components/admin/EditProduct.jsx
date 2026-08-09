import { useState } from "react";
import { X } from "lucide-react";
import { updateProduct } from "../../store/products"; // Ajusta según tu método de actualización

function EditProduct({ product, close }) {
  const [formData, setFormData] = useState({ ...product });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const stockNum = Number(formData.stock);

    updateProduct({
      ...formData,
      id: product.id,
      price: Number(formData.price),
      stock: stockNum,
      available: stockNum > 0,
    });

    close();
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#fcf9f8] w-full max-w-lg rounded-xl shadow-2xl overflow-hidden p-6">
        <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#e5e2e1]">
          <h3 className="font-serif text-lg text-[#1c1b1b]">Editar Producto</h3>
          <button onClick={close} className="text-[#7f756d] hover:text-[#1c1b1b]">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-[#4e453e] mb-1">
              Nombre
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[#d1c4bb] rounded-lg p-2 text-sm bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-[#4e453e] mb-1">
                Precio ($)
              </label>
              <input
                type="number"
                step="0.01"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-[#d1c4bb] rounded-lg p-2 text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#4e453e] mb-1">
                Stock (Unidades)
              </label>
              <input
                type="number"
                min="0"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full border border-[#d1c4bb] rounded-lg p-2 text-sm bg-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6e5b49] text-white py-3 rounded-lg text-xs uppercase tracking-wider font-medium hover:bg-[#313030] transition-colors mt-2"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;