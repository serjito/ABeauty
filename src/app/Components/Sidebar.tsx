'use client';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';
import { FaHome, FaUsers } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <div className="bg-zinc-900 flex flex-col items-center justify-center px-2 rounded-lg mx-2 my-2">
        <Image src={Logo} alt="AgenciaBeuty" />
      </div>
      <nav className="h-[95vh] flex bg-zinc-900 rounded-lg mx-2 my-2 text-zinc-400">
        <ul className="w-full items-center justify-center my-4 ">
          <li className=" mx-2 cursor-pointer">
            <Link
              href="/"
              className={`w-full flex flex-row items-center justify-center space-x-3 rounded-lg hover:bg-zinc-500 cursor-pointer ${
                isActive('/') ? 'bg-zinc-700 text-white' : ''
              }`}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              >
                <FaHome size={20} />
                <span style={{ marginLeft: '25px', cursor: 'pointer' }}>
                  Inicio
                </span>
              </div>
            </Link>
          </li>
          <li className="mx-2">
            <Link
              href="/Dashboard/registers"
              className={` w-full flex items-center justify-center space-x-3 rounded-lg hover:bg-zinc-500 cursor-pointer ${
                isActive('/Dashboard/registers') ? 'bg-zinc-700 text-white' : ''
              }`}
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginLeft: '10px',
                }}
              >
                <FaUsers size={20} />
                <span style={{ marginLeft: '25px' }}>Usuarios</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
