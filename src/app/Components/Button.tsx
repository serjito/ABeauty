import React from 'react';
import { FaPlay } from 'react-icons/fa';

interface ButtonProps {
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <button
        onClick={onClick}
        type="submit"
        className=" text-white text-3xl w-[70%] sm:w-[40%] font-bold px-8 py-4 flex flex-row justify-center sm:justify-center items-center bg-gradient-to-t from-[#9958cc] to-[#6c71e5] shadow-inner  shadow-white/10 rounded-3xl animate-parpadea"
      >
        <FaPlay size={20} className="mr-12" />
        Entrar
      </button>
    </div>
  );
};

export default Button;
