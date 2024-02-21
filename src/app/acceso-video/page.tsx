import Image from 'next/image';
import bg from '../../../public/bg.webp';
import { IoIosArrowDown } from 'react-icons/io';

function Intro() {
  return (
    <section className=" w-[98%] max-w-[1200px]  mx-auto my-3 flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col justify-center items-center my-2 mx-auto">
        <p className="text-center text-sm text-black text-pretty font-bold tracking-normal">
          - <strong className="text-black font-black"> ¡Enhorabuena! </strong>
          Aquí tienes lo prometido. Asegúrate de terminar el vídeo…
        </p>
        <h3 className="text-center text-2xl font-bold tracking-normal px-4 ">
          {' '}
          Supera tu <strong className="text-"> récord de facturación</strong> en
          los próximos 4 meses{' '}
        </h3>
        <iframe
          src="videoIntro.mp4"
          className="w-[93%] h-[27vh] rounded-md shadow-[0_0px_10px_3px_rgba(0,0,0)] border shadow-black/30 landscape:w-[70%] landscape:h-[80vh] "
        ></iframe>
        <p className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] text-transparent bg-clip-text text-center text-md font-extrabold tracking-tighter pl-">
          IMPORTANTE: MIRA EL VÍDEO HASTA EL FINAL
        </p>
        <p className="text-center pl-4 font-bold text-md tracking-tight ">
          *Al finalizar este vídeo,{' '}
          <strong>
            {' '}
            podrás acceder de forma GRATUITA a un plan personalizado{' '}
          </strong>
          para que puedas multiplicar tu facturación en 2024
        </p>
        <IoIosArrowDown size={60} className="mb-4" />
        <h4 className="text-[16px] text-center">
          ¿Estás preparado para <strong>escalar tu negocio</strong>?
        </h4>
        <a
          href="https://calendly.com/agenbeauty/elevatusalon?month=2024-02"
          className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] rounded-xl mx-3 my-3 p-2 text-center text-lg shadow-2xl font-normal text-white tracking-tight animate-parpadea"
        >
          Agenda tu sesión ahora y empieza 2024{' '}
          <strong className=" font-extrabold ">
            {' '}
            batiendo récords con tu negocio
          </strong>
        </a>
        <div className="bg-[#6c71e5]/10 flex flex-col items-center justify-center my-5">
          <h3 className="text-[30px] text-center font-extrabold mt-3 tracking-tighter">
            Rompe el hielo{' '}
            <strong className='font-blaclassName="mx-1 flex flex-col items-center justify-center ml-4 space-y-4"ck'>
              {' '}
              en una primera sesión{' '}
            </strong>{' '}
            sin compromiso
          </h3>
          <ul className="mx-1 flex flex-col items-center justify-center ml-4 mb-3 space-y-4">
            <li className="font-semibold text-sm">
              <strong>
                ✅ Comprenderás a la perfección cuál es la situación actual de
                tu proyecto.
              </strong>{' '}
              Para llegar a un punto B (El éxito que buscamos) debemos saber
              nuestro punto A (Dónde nos encontramos actualmente).
            </li>
            <li className="font-semibold text-sm">
              <strong>
                ✅ Analizaremos en profundidad tu idea de negocio,{' '}
              </strong>{' '}
              para que puedas salir de la sesión teniendo una estrategia clara.
            </li>
            <li className="font-semibold text-sm">
              <strong>✅ Detectarás donde está el cuello de botella </strong>
              que te está impidiendo escalar tu negocio como te gustaría.
            </li>
            <li className="font-semibold text-sm">
              <strong>✅ Te explicaremos cuál es la estrategia </strong>
              que te va a ayudar a aumentar la rentabilidad y el flujo de
              clientes de tu negocio en 2024.
            </li>
            <li className="font-semibold text-sm">
              <strong>✅ Te entregaremos un plan personalizado </strong>
              con los pasos que debes seguir para que puedas aplicarlo en tu
              negocio.
            </li>
          </ul>
          <h3 className="text-[20px] text-center font-black mb-3 tracking-tighter">
            Si eres apto/a, te abrimos la oportunidad de trabajar con nosotros
            para escalar tu negocio.
          </h3>
          <div className="flex">
            <a
              href="https://calendly.com/agenbeauty/elevatusalon?month=2024-02"
              className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] rounded-xl mx-3 my-3 p-2 text-center text-lg shadow-2xl font-normal text-white tracking-tight animate-parpadea"
            >
              Agenda tu sesión ahora y empieza 2024{' '}
              <strong className=" font-extrabold ">
                {' '}
                batiendo récords con tu negocio
              </strong>
            </a>
          </div>
        </div>
        <h2 className="text-center text-4xl px-1 text-pretty font-bold mb-3">
          Nuestro Equipo{' '}
          <span className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] text-transparent bg-clip-text text-center text-5xl text-pretty font-extrabold ">
            Agencia Beauty
          </span>
        </h2>
        <Image
          src={bg}
          alt="Angencia Beauty"
          className="object-cover h-full w-full lg:w-[60%] mb-4"
        ></Image>
        <p className="text-black mx-2 text-left font-semibold text-sm tracking-tighter">
          {' '}
          Agencia Beauty nació en el año 2022 a través del deseo ferviente de 2
          emprendedores entusiastas de cumplir su sueño. Conectar el
          conocimiento con las personas para mejorar el mundo.
        </p>
        <p className="text-black mx-2 text-left font-semibold text-sm tracking-tighter">
          Nelson Mandela dijo:“La educación es el arma más poderosa que puedes
          usar para cambiar el mundo”
        </p>
        <p className="text-black mx-2 text-left font-semibold text-sm tracking-tighter">
          Después de llevar más de 2 años trabajando en diferentes proyectos de
          marketing digital gracias al conocimiento acumulado durante todo este
          tiempo.
        </p>
        <p className="text-black mx-2 text-left font-semibold text-sm tracking-tighter">
          Sentimos la <strong> responsabilidad </strong> de utilizar todo ese
          conocimiento para ayudar a dueños de salones de belleza, a ser más
          visibles y a que puedan dejar una huella mucho más profunda en las
          vidas de las personas a las que impactan a través de sus técnicas y
          estrategias de trabajo.
        </p>
        <div className="flex">
          <a
            href="https://calendly.com/agenbeauty/elevatusalon?month=2024-02"
            className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] rounded-xl mx-3 my-3 p-2 text-center text-lg shadow-2xl font-normal text-white tracking-tight animate-parpadea"
          >
            Agenda tu sesión ahora y empieza 2024{' '}
            <strong className=" font-extrabold ">
              {' '}
              batiendo récords con tu negocio
            </strong>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
