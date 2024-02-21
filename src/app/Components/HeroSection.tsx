import Image from 'next/image';
import React from 'react';
import hero from '../../../public/hero.png';
import { heroblur } from '@/lib/hero.blur';
function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] text-pretty mx-auto my-4 flex justify-center items-center overflow-hidden rounded-3xl">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Badalona"
          className="object-cover object-center w-full h-full"
          priority
          blurDataURL={heroblur}
          placeholder="blur"
        ></Image>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="relative text-white z-10 text-center  text-wrap tracking-wide text-3xl lg:text-5xl px-24">
          AGENCIA DE MARKETING DIGITAL
        </h1>
        <p className="relative text-white">
          ESPECIALIZADA EN SALONES DE BELLEZA
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
