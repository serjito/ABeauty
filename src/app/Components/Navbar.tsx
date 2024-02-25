'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/logo.png';
import { LuMenuSquare } from 'react-icons/lu';
import { MdClose } from 'react-icons/md';

const menuItems = [
  { id: 'home', name: 'Inicio', href: '/' },
  { id: 'projects', name: 'Ofrecemos', href: '#projects' },
  { id: 'services', name: 'Servicios', href: '#services' },
  { id: 'contact', name: 'Contacto', href: '#contact' },
];

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <nav
        className={`
      fixed top-0 left-0 right-0 z-40 justify-around
      flex flex-row items-center h-20 py-2 rounded-lg
         
        `}
      >
        <div className="relative bg-black/80 w-full h-full py-2 mx-1 rounded-3xl items-center justify-center"></div>
        <div className=" absolute flex flex-row items-center justify-around md:justify-stretch w-full h-full px-1">
          <div className=" justify-start w-full ml-3 md:ml-8">
            <Link href={'/'}>
              <Image src={logo} alt="Agencia Beauty" width={50} />
            </Link>
          </div>
          <div className="hidden md:flex md:flex-col md:w-auto md:justify-center md:items-center">
            <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-4 text-sm text-white mx-8">
              {menuItems.map(item => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-[#d4a056]"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="md:hidden flex items-center px-2 cursor-pointer">
            <LuMenuSquare
              size={45}
              onClick={() => setShowMobileMenu(true)}
              className={`text-[#d4a056] text-4xl transition ${
                showMobileMenu ? 'hidden' : ''
              }`}
            />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${
          showMobileMenu ? 'translate-x-0' : 'translate-x-full'
        } bg-gradient-to-t from-[#9958cc] to-[#6c71e5] w-[80%] h-[95vh] my-2 fixed top-0 right-0 overflow-hidden grid content-center border-2 border-white rounded-lg transition-transform duration-500 z-40`}
      >
        {' '}
        <MdClose
          className=" absolute top-3 right-12  text-[#d4a056] rounded-lg col-span-1 col-start-4 text-4xl -mx-8 cursor-pointer transition rotate-180"
          onClick={() => setShowMobileMenu(false)}
        />
        <div className="w-full gap-2 flex flex-col justify-center items-center text-xl h-[calc(100vh - 56px)] overflow-y-auto ">
          {menuItems.map(item => (
            <Link
              key={item.id}
              href={item.href}
              className="text-center text-3xl text-white hover:bg-white/30 rounded-xl px-6"
              onClick={() => setShowMobileMenu(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
