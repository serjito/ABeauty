'use client';
import grupo from '../../../public/personalizado.jpeg';
import desarrollo from '../../../public/desarrollo.jpeg';
import elevamos from '../../../public/elevamos.jpeg';
import WorksCard from './WorksCard';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const worksData = [
  {
    title: 'ASESORAMIENTO PERSONALIZADO',
    image: grupo,
    description:
      'Servicio de coaching personalizado para llevar tu salón de belleza a un nivel superior en la industria.',
  },
  {
    title: 'DESARROLAMOS TU MARCA',
    image: desarrollo,
    description:
      'Servicio de coaching personalizado para llevar tu salón de belleza a un nivel superior en la industria.',
  },
  {
    title: 'ELEVAMOS TU PRESENCIA DIGITAL',
    image: elevamos,
    description:
      'Servicio de coaching personalizado para llevar tu salón de belleza a un nivel superior en la industria.',
  },
];

function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section
      ref={ref}
      id="projects"
      className={`w-[96%] my-3 flex flex-col justify-center mx-auto items-center px-4  mb-8`}
    >
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="w-full relative grid grid-cols-1 md:grid-cols-6 md:mx-auto lg:grid-cols-6  auto-rows-[20rem] gap-4 mx-auto my-4 backdrop-blur-md rounded-3xl`} "
      >
        <div className="absolute inset-0 bg-transparent opacity-30 z-0 rounded-3xl " />
        {worksData.map((work, index) => (
          <WorksCard
            key={index}
            title={work.title}
            image={work.image}
            description={work.description}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Works;
