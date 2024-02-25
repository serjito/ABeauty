'use client';
import Image from 'next/image';
import React from 'react';
import hero from '../../../public/hero.webp';
import { heroblur } from '@/lib/hero.blur';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] text-pretty mx-auto flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Marketing digital"
          className="object-cover object-center w-full h-full"
          priority
          blurDataURL={heroblur}
          placeholder="blur"
        ></Image>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#9958cc] to-[#6c71e5]  opacity-40"></div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="relative text-white z-10 text-center font-bold text-wrap tracking-tighter text-3xl lg:text-5xl mx-[0.28rem]">
            AGENCIA DE MARKETING{' '}
            <span className="relative text-white z-10 text-center font-extrabold text-wrap tracking-tighter text-3xl lg:text-5xl p-1">
              <TypeAnimation
                sequence={[
                  'DIGITAL',
                  1000,
                  'CON CREATIVIDAD',
                  1000,
                  'CON PASIÓN',
                  1000,
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="relative text-white text-center font-extrabold tracking-tight">
            ESPECIALIZADA EN SALONES DE BELLEZA
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
