import { motion, useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

interface WorksCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

function WorksCard({ image, title, description }: WorksCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div
      ref={ref}
      className="relative col-span-2 row-span-1 rounded-xl max-w-[700px] border border-black/10 shadow-inner shadow-white/10 overflow-hidden transition group"
    >
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.3, delay: 0.4 }}
        className={`absolute bottom-0 top-0 z-10 h-full w-full bg-cover bg-center`}
      >
        <Image
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        ></Image>
      </motion.div>
      <div className="absolute z-20 flex h-full bg-gradient-to-t from-black w-full select-none flex-col justify-end gap-1 px-4 uppercase">
        <h2 className="mb-4 text-md md:text-xl lg:text-lg xl:text-2xl font-extrabold tracking-tighter uppercase text-[#d4a056] shadow-3xl">
          {title}
        </h2>
      </div>

      <div className="absolute z-30 h-full w-full flex justify-center items-center translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-[#9958cc]/70 to-[#6c71e5]/70 transition-transform duration-200">
        <p className="p-5 text-xl md:text-xl tracking-tighter text-center text-white font-extrabold">
          {description}
        </p>
      </div>
    </div>
  );
}

export default WorksCard;
