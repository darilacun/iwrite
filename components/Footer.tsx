export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
      <p>© {new Date().getFullYear()} iWrite Inc. Todos los derechos reservados.</p>
    </footer>
  );
}