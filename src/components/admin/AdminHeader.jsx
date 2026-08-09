import { LogOut } from "lucide-react";

function AdminHeader() {
  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/admin-login";
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#d1c4bb]">
      <div className="flex items-center gap-4">
        <span className="text-3xl font-serif tracking-widest text-[#6e5b49] border-r border-[#d1c4bb] pr-6">
          VALÍA
        </span>
        <div>
          <h1 className="text-3xl font-serif text-[#1c1b1b] tracking-tight">
            Panel Administrativo
          </h1>
          <p className="text-sm text-[#4e453e] mt-1">
            Gestiona tu catálogo, precios y disponibilidad de productos.
          </p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-5 py-2.5 border border-[#d1c4bb] text-[#4e453e] hover:text-[#ba1a1a] hover:border-[#ba1a1a] text-xs font-semibold uppercase tracking-wider rounded-full transition-colors self-start sm:self-auto"
      >
        <LogOut size={16} /> Cerrar sesión
      </button>
    </div>
  );
}

export default AdminHeader;