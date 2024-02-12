'use client';
import { useState } from 'react';
import Contact from './Contact';
import Button from './Button';

function Footer() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };
  return (
    <footer className="bottom-0 rounded-3xl shadow bg-gradient-to-t from-[#9958cc] to-[#6c71e5] backdrop-blur-lg w-[98%] mx-auto mb-10">
      <div className="w-full mx-autoflex flex-col rounded-3xl p-4 justify-center text-center text-xl bg-black/30">
        <span className="text-sm sm:text-xl sm:text-center text-yellow-800/90 dark:text-yellow-200/90">
          © 2024{' '}
          <a href="https://agenciabeauty.com/" className="hover:underline">
            Agencia Beauty.
          </a>
          <br />
          Todos los derechos reservados. <br />
          <span>
            <h3 className=" underline">
              E-mail:
              <a href="#">agenciabeauty@genciabeautycompany</a>
            </h3>
          </span>
        </span>
        <div className="flex flex-col justify-center space-y-5 items-center mt-3 py-5 text-md font-medium sm:mt-0">
          <Button onClick={toggleContact} />
        </div>
      </div>
      {showContact && <Contact onClose={toggleContact} />}
    </footer>
  );
}

export default Footer;
