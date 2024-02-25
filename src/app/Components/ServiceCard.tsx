'use client';
import { motion, useInView } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react';
interface ServiceCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}
function ServiceCard({ title, description, image }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      transition={{ duration: 0.3, delay: 0.4 }}
      className="rounded-lg shadow-xl planet-backgorud-1 cursor-pointer p-4 gap-4"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-md bg-indigo-500 p-2">
        <Image
          src={image}
          alt={description}
          loading="lazy"
          className="w-[100%] brightness-0 invert"
        />
      </div>
      <h3 className="mt-4 text-2xl font-bold text-gray-700 tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-lg text-white font-bold tracking-tight">
        {description}
      </p>
    </motion.div>
  );
}

export default ServiceCard;
