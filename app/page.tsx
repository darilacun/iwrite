import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white font-sans antialiased selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}