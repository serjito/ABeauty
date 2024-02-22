'use client';
import React, { useState } from 'react';
import Button from './Button';
import Contact from './Contact';
import { FaPlay } from 'react-icons/fa';

function Benefits() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };
  return (
    <section className=" w-[96%] max-w-[1200px]  mx-auto flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col justify-center items-center my-2 mx-auto space-y-2">
        <h2 className="text-center text-[22px] text-black text-pretty font-semibold tracking-tighter">
          EN ESTE VÍDEO VAS A LOGRAR:
        </h2>
        <ul className="mx-1 flex flex-col items-center justify-center ml-4 space-y-4">
          <li className="font-semibold">
            <strong>
              ✅ Llegar a muchas más personas y multiplicar el impacto que
              generas.
            </strong>{' '}
            Tu salón tiene potencial, vamos a impulsar tu marca personal, para
            conseguir nuevos clientes y aumentar tu facturación.
          </li>
          <li className="font-semibold">
            <strong>
              ✅ Un método probado que te permitirá tener tu agenda llena de
              clientes{' '}
            </strong>{' '}
            para que puedas crecer exponencialmente.
          </li>
          <li className="font-semibold">
            <strong>✅ Aumentar tu ticket medio. </strong>
            Este método está especialmente pensado para que dueños de salones de
            belleza como tú, podáis facturar más, y obtengáis a cambio más
            tiempo para vuestro día a día.
          </li>
        </ul>
        <div className="flex flex-col w-full">
          <p className="font-extrabold text-[15px] text-center tracking-tighter">
            ¿Quieres ver el vídeo que te hemos preparado?
          </p>
          <div className="w-full flex items-center justify-center">
            <button
              onClick={toggleContact}
              type="submit"
              className=" text-white text-xl w-[70%] sm:w-[40%] font-bold px-3 py-4 flex flex-row justify-center sm:justify-center items-center bg-gradient-to-t from-[#9958cc] to-[#6c71e5] shadow-inner  shadow-white/10 rounded-3xl animate-parpadea"
            >
              <FaPlay size={20} className="mr-2" />
              Acceder al vídeo
            </button>
          </div>
        </div>
      </div>
      <div className="my-3 space-y-3">
        <h2 className="text-center text-3xl px-0  text-pretty font-bold tracking-tighter">
          ¿Por qué queremos enseñarte este método?
        </h2>
        <div className=" bg-[#6c71e5]/10 rounded-lg text-white py-3">
          <h3 className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] text-transparent bg-clip-text text-center text-4xl px-1  text-pretty font-bold tracking-tighter">
            NUESTRA MISIÓN
          </h3>
          <p className="text-black font-bold text-center tracking-tighter">
            Creamos{' '}
            <strong className=" tracking-tighter font-bold">
              {' '}
              estrategias de venta para que dueños de salones de belleza
            </strong>{' '}
            puedan facturar más y ganar en calidad de vida.
          </p>
          <h3 className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] text-transparent bg-clip-text text-center text-4xl px-1  text-pretty font-bold tracking-tighter">
            NUESTRA VISIÓN
          </h3>
          <p className="text-black font-bold text-center tracking-tighter">
            Más de{' '}
            <strong className=" tracking-tighter font-bold">
              {' '}
              20 años de experiencia en salones
            </strong>{' '}
            nos han demostrado el método para <strong>no trabajar</strong> 10
            horas diarias.
          </p>
        </div>
      </div>
      {showContact && <Contact onClose={toggleContact} />}
    </section>
  );
}

export default Benefits;
