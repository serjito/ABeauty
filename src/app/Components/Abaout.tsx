'use client';
import React, { useState } from 'react';

import Button from './Button';
import Contact from './Contact';
import bg from '../../../public/bg.webp';
import Image from 'next/image';

function Abaout() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };
  return (
    <section className=" w-[95%] max-w-[1200px]  mx-auto flex flex-col items-center justify-center ">
      <div className="flex flex-col">
        <h2 className="text-center text-4xl px-1 text-pretty font-bold tracking-tighter">
          Somos{' '}
          <span className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] text-transparent bg-clip-text text-center text-5xl text-pretty font-extrabold tracking-tighter">
            Agencia Beauty
          </span>
        </h2>
        <div className="flex items-center justify-center">
          <Image
            src={bg}
            alt="Angencia Beauty"
            className="object-cover h-full w-full lg:w-[60%]"
          ></Image>
        </div>
        <div className=" flex flex-col space-y-0 items-center justify-center">
          <p className="text-black font-semibold text-center text-sm tracking-tighter">
            Nuestra agencia nace de la fusión de emprendedores en el sector de
            la belleza, junto a un grupo de expertos en marketing y diseño de
            estrategias.
          </p>
          <p className="text-black font-semibold text-center text-sm tracking-tighter">
            En los últimos 2 años, hemos ayudado a salones a{' '}
            <strong> multiplicar x3 y x4 su facturación </strong>, gracias al
            servicio de coaching unido al marketing digital.
          </p>
          <p className="text-black font-semibold text-center text-sm tracking-tighter">
            A día de hoy nuestra misión es clara. Emplear todos nuestros
            conocimientos acumulados,
            <strong>
              {' '}
              para ayudar a que dueños de salones de belleza
            </strong>{' '}
            puedan seguir creciendo como se merecen.
          </p>
        </div>
        <Button onClick={toggleContact} />
      </div>
      {showContact && <Contact onClose={toggleContact} />}
    </section>
  );
}

export default Abaout;
