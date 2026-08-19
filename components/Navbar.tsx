export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-wider text-white">iWrite</div>
      <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition">
        Comprar Ahora
      </button>
    </nav>
  );
}