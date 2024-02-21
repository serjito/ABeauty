import Image from 'next/image';
import bg from '../../../public/bg.webp';

function Intro() {
  return (
    <section className=" w-[95%] max-w-[1200px]  mx-auto my-3 flex flex-col items-center justify-center ">
      <div className="w-[95%] flex flex-col justify-center items-center my-2 mx-auto">
        <h3 className="text-center text-4xl text-black text-pretty font-bold">
          - <strong className="text-black font-black"> ¡Enhorabuena! </strong>
          Aquí tienes lo prometido. Asegúrate de terminar el vídeo…
        </h3>
        <h3 className="text-center text-xl font-bold">
          <strong>
            {' '}
            Supera tu récord de facturación en los próximos 4 meses{' '}
          </strong>
        </h3>

        <iframe
          src="videoIntro.mp4"
          className=" w-full h-[30vh] rounded-md "
        ></iframe>

        <h3 className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] text-transparent bg-clip-text text-center text-3xl px-1 my-2 text-pretty font-bold">
          IMPORTANTE MIRA EL VÍDEO HASTA EL FINAL
        </h3>
        <p className="text-center font-bold text-xl">
          *Al finalizar este vídeo,{' '}
          <strong>
            {' '}
            podrás acceder de forma GRATUITA a un plan personalizado{' '}
          </strong>
          para que puedas multiplicar tu facturación en 2024
        </p>
        <h4 className="text-3xl text-center my-3">
          <strong>¿Estás preparado para </strong>escalar tu negocio?
        </h4>
        <h2 className="text-4xl text-center text-pretty font-semibold">
          Agenda tu sesión ahora y empieza 2024{' '}
          <strong className=" font-black">
            {' '}
            batiendo récords con tu negocio
          </strong>
        </h2>
        <h3 className="text-4xl text-center font-semibold">
          Rompe el hielo{' '}
          <strong className='font-blaclassName="mx-1 flex flex-col items-center justify-center ml-4 space-y-4"ck'>
            {' '}
            en una primera sesión{' '}
          </strong>{' '}
          sin compromiso
        </h3>
        <ul className="mx-1 flex flex-col items-center justify-center ml-4 mb-3 space-y-4">
          <li className="font-semibold text-lg">
            <strong>
              ✅ Comprenderás a la perfección cuál es la situación actual de tu
              proyecto.
            </strong>{' '}
            Para llegar a un punto B (El éxito que buscamos) debemos saber
            nuestro punto A (Dónde nos encontramos actualmente). Solo de esa
            manera podemos determinar qué pasos debemos seguir para avanzar
            hacia nuestros objetivos.
          </li>
          <li className="font-semibold text-lg">
            <strong>✅ Analizaremos en profundidad tu idea de negocio, </strong>{' '}
            para que puedas salir de la sesión teniendo una estrategia clara.
          </li>
          <li className="font-semibold text-lg">
            <strong>✅ Detectarás donde está el cuello de botella</strong>
            que te está impidiendo escalar tu negocio como te gustaría.
          </li>
          <li className="font-semibold text-lg">
            <strong>✅ Te explicaremos cuál es la estrategia</strong>
            que te va a ayudar a aumentar la rentabilidad y el flujo de clientes
            de tu negocio en 2024.
          </li>
          <li className="font-semibold text-lg">
            <strong>✅ Te entregaremos un plan personalizado</strong>
            con los pasos que debes seguir para que puedas aplicarlo en tu
            negocio.
          </li>
        </ul>
        <h3 className="text-2xl text-center font-black mb-3">
          Si eres apto/a, te abrimos la oportunidad de trabajar con nosotros
          para escalar tu negocio.
        </h3>
        <p className="text-xl font-bold">
          Si vemos que podemos ayudarte a aplicar toda esta estrategia dentro de
          tu empresa,
          <strong>
            {' '}
            te explicaremos cómo trabajamos con nuestros clientes
          </strong>{' '}
          para que puedas delegar toda la ejecución de la misma y puedas
          alcanzar tus objetivos de una forma mucho más rápida.
        </p>
        <p className="font-bold text-xl text-center">
          ¿Estás preparado para <strong> escalar tu negocio?</strong>
        </p>
        <a className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] rounded-xl mx-3 p-2 text-center text-xl shadow-2xl text-white">
          Agenda tu sesión ahora y empieza 2024 batiendo récords con tu negocio
        </a>
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
        <p className="text-black font-bold mx-4 text-xl text-left">
          {' '}
          Agencia Beauty nació en el año 2022 a través del deseo ferviente de 2
          emprendedores entusiastas de cumplir su sueño. Conectar el
          conocimiento con las personas para mejorar el mundo.
        </p>
        <p className="text-black font-bold mx-4 text-xl text-left">
          Nelson Mandela dijo:“La educación es el arma más poderosa que puedes
          usar para cambiar el mundo”
        </p>
        <p className="text-black font-bold mx-4 text-xl text-left">
          Después de llevar más de 2 años trabajando en diferentes proyectos de
          marketing digital gracias al conocimiento acumulado durante todo este
          tiempo,sentimos la <strong> responsabilidad </strong> de utilizar todo
          ese conocimiento para ayudar a dueños de salones de belleza, a ser más
          visibles y a que puedan dejar una huella mucho más profunda en las
          vidas de las personas a las que impactan a través de sus técnicas y
          estrategias de trabajo.
        </p>
      </div>
    </section>
  );
}

export default Intro;
