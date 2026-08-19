const features = [
  {
    title: 'Micro-Motor de Precisión',
    description: 'Escribe letras completas automáticamente mientras solo mantienes el desplazamiento horizontal fluido.',
  },
  {
    title: 'Lectura vía Tarjeta SD',
    description: 'Carga archivos PDF o TXT directamente en el dispositivo sin necesidad de conexión a internet.',
  },
  {
    title: 'Navegación Físico-Análoga',
    description: 'Control de palabras y archivos mediante dos botones de respuesta háptica limpios y minimalistas.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-neutral-900 text-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}