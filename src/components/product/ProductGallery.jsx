import { useState } from "react";

function ProductGallery({ images = [], name }) {
  // Garantiza que siempre tengamos al menos un elemento para mostrar
  const imageList = Array.isArray(images) && images.length > 0 
    ? images 
    : ["/assets/placeholder.jpg"];

  // Estado para la imagen activa (por defecto la primera del array)
  const [selectedImage, setSelectedImage] = useState(imageList[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Visor de Imagen Principal */}
      <div className="w-full bg-white rounded-lg overflow-hidden relative group border border-gray-200 shadow-sm aspect-square">
        <div className="absolute inset-0 p-8 flex items-center justify-center">
          <img
            src={selectedImage}
            alt={name}
            className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl transition-transform duration-700 ease-in-out group-hover:scale-110 cursor-zoom-in"
          />
        </div>
      </div>

      {/* Tira de Miniaturas */}
      {imageList.length > 1 && (
        <div className="flex gap-4 mt-2">
          {imageList.map((imgUrl, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(imgUrl)}
              className={`w-20 aspect-square bg-white rounded-md overflow-hidden border relative shadow-sm transition-all duration-300 hover:opacity-80 ${
                selectedImage === imgUrl
                  ? "border-[#6e5b49] ring-1 ring-[#6e5b49]"
                  : "border-gray-200"
              }`}
            >
              <div className="absolute inset-0 p-2 flex items-center justify-center">
                <img
                  src={imgUrl}
                  alt={`${name} miniatura ${index + 1}`}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;