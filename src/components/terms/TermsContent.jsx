function TermsContent() {
  return (
    <div className="md:col-span-8 space-y-8 bg-white p-6 md:p-10 rounded-xl border border-[#E5DDD3]/60 shadow-sm">
      
      {/* Sección 1: Uso del Sitio */}
      <section id="uso-sitio" className="scroll-mt-[120px]">
        <h2 className="font-serif text-2xl text-[#2d2d2d] mb-4">Uso del Sitio</h2>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base mb-4">
          Bienvenido al sitio web de <strong>VALÍA</strong>. Al acceder y realizar compras en nuestra plataforma, aceptas estar sujeto a los siguientes términos y condiciones. Este sitio está destinado para uso personal y comercialización final de nuestras colecciones de moda, belleza y perfumería.
        </p>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
          Nos reservamos el derecho de modificar o actualizar productos, precios, disponibilidad y condiciones del sitio en cualquier momento sin previo aviso.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5DDD3]" />

      {/* Sección 2: Propiedad Intelectual */}
      <section id="propiedad" className="scroll-mt-[120px]">
        <h2 className="font-serif text-2xl text-[#2d2d2d] mb-4">Propiedad Intelectual</h2>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
          Todo el contenido disponible en este sitio (fotografías de producto, logotipos, textos, diseños, catálogo e identidad de marca) es propiedad exclusiva de VALÍA y está protegido por las leyes de propiedad intelectual correspondientes. Queda prohibida su reproducción sin autorización previa.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5DDD3]" />

      {/* Sección 3: Políticas de Envío */}
      <section id="envios" className="scroll-mt-[120px]">
        <h2 className="font-serif text-2xl text-[#2d2d2d] mb-4">Políticas de Envío</h2>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base mb-4">
          Procesamos los pedidos en un lapso de 24 a 48 horas hábiles tras haber verificado el pago correspondiente.
        </p>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed font-light text-sm md:text-base space-y-2 ml-2">
          <li><strong>Envíos Nacionales:</strong> Entre 2 y 5 días hábiles según la ciudad de destino.</li>
          <li><strong>Pick-up / Entregas Locales:</strong> Sujeto a coordinación previa con el equipo de atención.</li>
          <li>Es responsabilidad del cliente proporcionar la dirección y datos de contacto de manera exacta para evitar demoras en la entrega.</li>
        </ul>
      </section>

      <div className="w-full h-px bg-[#E5DDD3]" />

      {/* Sección 4: Cambios y Devoluciones */}
      <section id="devoluciones" className="scroll-mt-[120px]">
        <h2 className="font-serif text-2xl text-[#2d2d2d] mb-4">Cambios y Devoluciones</h2>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base mb-4">
          Para garantizar la mejor experiencia, nuestras políticas se adaptan según la categoría del producto:
        </p>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed font-light text-sm md:text-base space-y-3 ml-2 mb-4">
          <li>
            <strong>Ropa y Accesorios:</strong> Se permiten cambios de talla o prenda dentro de los primeros 5 días continuos tras la entrega. La prenda debe estar sin usar, sin lavar, sin manchas y con sus etiquetas originales.
          </li>
          <li>
            <strong>Maquillaje y Body Splash / Perfumes:</strong> Por motivos de higiene y bioseguridad, <u>no se aceptan cambios ni devoluciones</u> en productos cosméticos o fragancias que hayan sido abiertos, destapados o probados.
          </li>
        </ul>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
          Los costos de envío generados por cambios de talla o gusto personal corren por cuenta del comprador, excepto en aquellos casos donde el producto presente una falla demostrable de fábrica.
        </p>
      </section>

      <div className="w-full h-px bg-[#E5DDD3]" />

      {/* Sección 5: Privacidad */}
      <section id="privacidad" className="scroll-mt-[120px]">
        <h2 className="font-serif text-2xl text-[#2d2d2d] mb-4">Privacidad y Protección de Datos</h2>
        <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
          Respetamos tu privacidad. Tus datos personales de envío y pago son gestionados de manera confidencial y únicamente serán utilizados para el procesamiento de tus órdenes y la comunicación directa referente a tus compras en VALÍA.
        </p>
      </section>

    </div>
  );
}

export default TermsContent;