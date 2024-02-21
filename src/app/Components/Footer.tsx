import Image from 'next/image';
import logo from '../../../public/logo.png';
function Footer() {
  return (
    <footer className="bottom-0 rounded-3xl shadow bg-gradient-to-t from-[#9958cc] to-[#6c71e5] backdrop-blur-lg w-[98%] mx-auto mb-10">
      <div className="w-full mx-autoflex flex-col rounded-3xl p-4 justify-center text-center text-xl">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="Agencia Beauty" height={30} />
        </div>
        <span className="text-sm sm:text-xl sm:text-center text-[#d4a056] dark:text-yellow-200/90">
          © 2024{' '}
          <a href="https://agenciabeauty.com/" className="hover:underline">
            Agencia Beauty.
          </a>
          <br />
          Todos los derechos reservados. <br />
          <span>
            <a className=" underline" href="#">
              Política de privacidad
            </a>
            <span>|</span>
            <a className="underline" href="#">
              {' '}
              Política cookies
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
