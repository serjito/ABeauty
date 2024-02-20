import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';
import { FaHome, FaUsers } from 'react-icons/fa';

function Sidebar() {
  return (
    <>
      <div className="bg-zinc-900 flex flex-col items-center justify-center px-2 rounded-lg mx-2 my-2">
        <Image src={Logo} alt="AgenciaBeuty" />
      </div>
      <nav className="h-full flex bg-zinc-900 rounded-lg mx-2 my-2 text-zinc-400">
        <ul className="w-full items-center justify-center my-4 ">
          <li className=" mx-2">
            <Link
              href="/"
              className="bg-zinc-700 w-full flex flex-row items-center justify-center space-x-3 rounded-lg border border-black/10 shadow-inner shadow-white/10 hover:bg-zinc-500 cursor-pointer"
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaHome size={20} />
                <span style={{ marginLeft: '5px' }}>Inicio</span>
              </div>
            </Link>
          </li>
          <li className="mx-2">
            <Link
              href="/Dashboard/registers"
              className="bg-zinc-700 w-full flex items-center justify-center space-x-3 rounded-lg border border-black/10 shadow-inner shadow-white/10 hover:bg-zinc-500 cursor-pointer"
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaUsers size={20} />
                <span style={{ marginLeft: '5px' }}>Usuarios</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
