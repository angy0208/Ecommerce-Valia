function TermsSidebar() {
  const sections = [
    { id: "uso-sitio", label: "Uso del Sitio" },
    { id: "propiedad", label: "Propiedad Intelectual" },
    { id: "envios", label: "Políticas de Envío" },
    { id: "devoluciones", label: "Devoluciones" },
    { id: "privacidad", label: "Privacidad" },
  ];

  return (
    <aside className="md:col-span-4 hidden md:block">
      <div className="sticky top-[120px] bg-[#F8F5F1] p-6 rounded-xl border border-[#E5DDD3]">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-[#2d2d2d] mb-6">
          Contenido
        </h3>
        <nav className="flex flex-col gap-4">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-600 hover:text-[#b78a65] transition-colors text-sm flex items-center gap-2 group font-light"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#b78a65] opacity-0 group-hover:opacity-100 transition-opacity" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default TermsSidebar;