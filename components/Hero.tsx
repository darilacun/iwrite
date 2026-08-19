import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-neutral-950 text-white flex flex-col justify-center items-center pt-24 px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl z-10 space-y-6">
        <span className="text-xs uppercase tracking-widest text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
          El futuro de la caligrafía
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          La escritura nunca será igual.
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
          El primer lápiz robótico asistido. Carga tus documentos mediante SD y deja que la tecnología guíe cada letra con precisión impecable.
        </p>
      </div>

      <div className="mt-12 relative w-full max-w-4xl h-[400px] md:h-[500px]">
        <Image 
          src="/iwrite-pencil.png" 
          alt="iWrite SmartPen" 
          fill 
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}