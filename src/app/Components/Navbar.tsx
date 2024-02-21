import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/logo.png';

const menuItems = [
  { id: 'home', name: 'Inicio', href: '/' },
  { id: 'services', name: 'Servicios', href: '#servicios' },
  { id: 'projects', name: 'Proyectos', href: '#proyectos' },
  { id: 'contact', name: 'Contacto', href: '#contacto' },
];

function Navbar() {
  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-10
         
        `}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={'/'}>
          <Image src={logo} alt="Agencia Beauty" width={60} />
        </Link>
        <div className=" block md:w-auto bg-black">
          <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0 bg-blue-200">
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
      </div>
    </nav>
  );
}

export default Navbar;
