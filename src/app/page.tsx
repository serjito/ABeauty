import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Achievements from './Components/Achievements';
import Works from './Components/Works';
import Footer from './Components/Footer';
import ServicesSection from './Components/ServicesSection';
import ContactHome from './Components/ContactHome';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col ">
        <div className="w-full mx-auto">
          <Navbar />
          <HeroSection />
          <Works />
          <Achievements />
          <ServicesSection />
          <ContactHome />
        </div>
        <Footer />
      </main>
    </>
  );
}
