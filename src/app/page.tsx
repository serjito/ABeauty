import Image from 'next/image';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Benefits from './Components/Benefits';
import Abaout from './Components/Abaout';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col ">
        <Navbar />
        <div className=" container mx-auto px-1 py-4">
          <HeroSection />
        </div>
      </main>
    </>
  );
}
