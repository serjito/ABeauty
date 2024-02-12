'use client';
import React, { useState } from 'react';
import Button from './Button';
import Contact from './Contact';

function Benefits() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };
  return (
    <section className=" w-[95%] max-w-[1200px]  mx-auto my-3 flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col justify-center items-center my-2 mx-auto">
        <h2 className="text-center text-3xl px-1 text-black/90 text-pretty font-normal">
          EN ESTE VÍDEO VAS A LOGRAR:
        </h2>
        <ul className="mx-1">
          <li className="flex flex-col">
            <strong>
              ✅ Llegar a muchas más personas y multiplicar el impacto
              que generas.
            </strong>
            Tu salón tiene potencial, vamos a impulsar tu marca personal, para
            conseguir nuevos clientes y aumentar tu facturación.
          </li>
          <li className="flex flex-col">
            <strong>
              ✅ Un método probado que te permitirá tener tu agenda llena de
              clientes
            </strong>
            para que puedas crecer exponencialmente.
          </li>
          <li className="flex flex-col">
            <strong>✅ Aumentar tu ticket medio.</strong>
            Este método está especialmente pensado para que dueños de salones de
            belleza como tú, podáis facturar más, y obtengáis a cambio más
            tiempo para vuestro día a día.
          </li>
        </ul>
        <div className="flex flex-col">
          <p className="font-bold">
            ¿Quieres ver el vídeo que te hemos preparado?
          </p>
          <Button onClick={toggleContact} />
        </div>
      </div>
      <div className="my-3 space-y-4">
        <h2 className="text-center text-3xl px-1  text-pretty font-bold">
          ¿Por qué queremos enseñarte este método?
        </h2>
        <div className="bg-white/90 text-white py-3">
          <h3 className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] text-transparent bg-clip-text text-center text-3xl px-1  text-pretty font-bold">
            NUESTRA MISIÓN
          </h3>
          <p className="text-black">
            Creamos{' '}
            <strong>
              {' '}
              estrategias de venta para que dueños de salones de belleza
            </strong>{' '}
            puedan facturar más y ganar en calidad de vida.
          </p>
          <h3 className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] text-transparent bg-clip-text text-center text-3xl px-1  text-pretty font-bold">
            NUESTRA VISIÓN
          </h3>
          <p className="text-black">
            Más de <strong> 20 años de experiencia en salones</strong> nos han
            demostrado el método para <strong>no trabajar</strong> 10 horas
            diarias.
          </p>
        </div>
      </div>
      {showContact && <Contact onClose={toggleContact} />}
    </section>
  );
}

export default Benefits;
