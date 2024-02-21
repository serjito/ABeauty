import Image from 'next/image';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Benefits from './Components/Benefits';
import Abaout from './Components/Abaout';

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Abaout />
      <Footer />
    </>
  );
}
