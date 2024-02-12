'use client';
import Image from 'next/image';
import bg from '../../../public/bg.webp';
import { FaPlay } from 'react-icons/fa';
import Contact from './Contact';
import { useState } from 'react';
import Button from './Button';

function Hero() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };
  return (
    <section className=" w-[95%] max-w-[1200px]  mx-auto my-3 flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col justify-center items-center my-2 mx-auto">
        <h2 className="text-center text-3xl px-1 text-black/90 text-pretty font-normal">
          Aumenta la{' '}
          <strong className="text-black">
            rentabilidad y facturación de tu negocio de belleza
          </strong>
           con nuestro método
        </h2>
        <h3 className="text-center">
          &quot; Potencia tu presencia en línea y atrae a más clientes con la
          ayuda de una agencia de marketing especializada en belleza”
        </h3>
        <Image
          src={bg}
          alt="Angencia Beauty"
          className="object-cover h-full w-full"
        ></Image>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="w-full flex items-center justify-center">
          <Button onClick={toggleContact} />
        </div>
        {showContact && <Contact onClose={toggleContact} />}
      </div>
    </section>
  );
}

export default Hero;
