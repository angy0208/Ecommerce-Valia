import { useEffect } from "react";
function Toast({ message, type = "success", onClose, duration = 2500 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    // Limpiar el timer si el componente se desmonta
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  return (

    <div
      className={`
        fixed
        top-6
        right-6
        z-[100]
        px-5
        py-3
        rounded-lg
        shadow-lg
        text-sm
        text-white
        ${type === "success"
          ? "bg-green-600"
          : "bg-red-600"
        }
      `}
    >

      {message}

    </div>

  );

}

export default Toast;