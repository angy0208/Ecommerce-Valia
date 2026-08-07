function TermsContent() {
  return (
    <div className="md:col-span-8 space-y-8 bg-white p-6 md:p-10 rounded-xl border border-[#E5DDD3]/60 shadow-sm">
      
      {/* Sección 1: Uso del Sitio */}
      <section id="uso-sitio" className="scroll-mt-[120px]">
        <h2 className="font-serif text-2xl text-[#2d2d2d] mb-4">Uso del Sitio</h2>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base mb-4">
          Bienvenido al sitio web de VALÍA Premium Body Splash. Al acceder y utilizar este sitio, usted
          acepta estar sujeto a los siguientes términos y condiciones. Este sitio está destinado para uso
          personal y no comercial.
        </p>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
          Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del sitio en
          cualquier momento, incluyendo la disponibilidad de cualquier característica, base de datos o
          contenido, sin previo aviso.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5DDD3]" />

      {/* Sección 2: Propiedad Intelectual */}
      <section id="propiedad" className="scroll-mt-[120px]">
        <h2 className="font-serif text-2xl text-[#2d2d2d] mb-4">Propiedad Intelectual</h2>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
          Todo el contenido incluido en este sitio, como texto, gráficos, logotipos, imágenes, clips de
          audio, descargas digitales y compilaciones de datos, es propiedad de VALÍA o de sus proveedores de
          contenido y está protegido por las leyes de propiedad intelectual aplicables.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5DDD3]" />

      {/* Sección 3: Políticas de Envío */}
      <section id="envios" className="scroll-mt-[120px]">
        <h2 className="font-serif text-2xl text-[#2d2d2d] mb-4">Políticas de Envío</h2>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base mb-4">
          Los tiempos de envío varían según la ubicación. Procesamos los pedidos dentro de 1-2 días
          hábiles tras la confirmación del pago.
        </p>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed font-light text-sm md:text-base space-y-2 ml-2">
          <li>Envío Estándar: 3-5 días hábiles.</li>
          <li>Envío Express: 1-2 días hábiles.</li>
          <li>No realizamos envíos en días festivos nacionales.</li>
        </ul>
      </section>

      <div className="w-full h-px bg-[#E5DDD3]" />

      {/* Sección 4: Devoluciones */}
      <section id="devoluciones" className="scroll-mt-[120px]">
        <h2 className="font-serif text-2xl text-[#2d2d2d] mb-4">Devoluciones</h2>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base mb-4">
          Su satisfacción es primordial. Aceptamos devoluciones de productos no abiertos y en su embalaje
          original dentro de los 14 días posteriores a la recepción.
        </p>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
          Para iniciar una devolución, por favor contacte a nuestro equipo de servicio al cliente. Los
          gastos de envío de devolución corren por cuenta del cliente, a menos que el producto haya
          llegado dañado o defectuoso.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5DDD3]" />

      {/* Sección 5: Privacidad */}
      <section id="privacidad" className="scroll-mt-[120px]">
        <h2 className="font-serif text-2xl text-[#2d2d2d] mb-4">Privacidad</h2>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
          Respetamos su privacidad y estamos comprometidos a proteger sus datos personales. Consulte
          nuestra Política de Privacidad detallada para comprender cómo recopilamos, utilizamos y
          salvaguardamos su información cuando visita nuestro sitio web o realiza una compra.
        </p>
      </section>

    </div>
  );
}

export default TermsContent;