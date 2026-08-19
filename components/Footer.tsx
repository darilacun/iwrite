export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-8 px-6 text-neutral-500 text-sm flex justify-between items-center pr-16">
      <p>© {new Date().getFullYear()} iWrite Inc. Todos los derechos reservados.</p>
      <a 
        href="https://www.canva.com/design/DAHSwZaoYAg/8l4Xs1XVhTlBIaJrVt8lcg/edit"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors text-blue-500 text-xl"
      >
        Presentación
      </a>
    </footer>
  );
}