'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster, toast } from 'sonner';
import { z } from 'zod';
import { sendEmail } from '@/libs/sendEmail';
import { BiCheck } from 'react-icons/bi';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Debe contener al menos 1 caracteres' })
    .max(100, { message: 'No debe contener más de 100 caracteres' }),
  telephone: z.number().int(),
  email: z.string().email({
    message: 'Debe contener un email válido',
  }),
  terms: z.boolean().refine(value => value === true, {
    message: 'Debe aceptar los términos y condiciones',
  }),
});

const ContactHome = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (values: z.infer<typeof userSchema>) => {
    try {
      await sendEmail({ ...values });
      toast('Correo enviado correctamente', {
        description: 'Gracias por ponerse en contacto con nosotros',
        icon: <BiCheck style={{ color: 'green', fontSize: '1rem' }} />,
      });
      reset();
    } catch (error) {
      toast.error((error as Error).message);
    }
  };
  return (
    <section
      id="contact"
      className="w-[96%] justify-center mx-auto items-center px-4 my-8"
    >
      <div className="w-full flex flex-col text-center">
        <h2 className=" text-3xl font-extrabold text-gray-700 tracking-tight">
          ¡Pongase en contacto con nosotros!
        </h2>
      </div>
      <div className=" bg-gradient-to-t from-[#9958cc]/70 to-[#6c71e5]/70 w-full md:w-[70%] lg:w-[40%] h-auto flex flex-col items-center justify-center mb-4 bg-gray-700 rounded-md px-1 py-4 mx-auto my-1">
        <form onSubmit={handleSubmit(onSubmit)} className="px-1">
          <label htmlFor="name">Nombre*</label>
          <input
            type="text"
            id="name"
            autoComplete="given-name"
            {...register('name')}
          />{' '}
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
          <label htmlFor="telephone">Teléfono*</label>
          <input
            type="tel"
            id="telephone"
            inputMode="numeric"
            autoComplete="off"
            {...register('telephone', {
              valueAsNumber: true,
              setValueAs: (value: string) => Number(value),
            })}
          />{' '}
          {errors.telephone && (
            <span className="text-red-500 text-xs">
              {errors.telephone?.message}
            </span>
          )}
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">
              {errors.email?.message}
            </span>
          )}
          <div className="flex flex-col justify-center items-center py-3">
            <label htmlFor="terms">Acepto términos y condiciones*</label>
            <input
              type="checkbox"
              id="terms"
              className="ml-2 h-4"
              {...register('terms')}
            />{' '}
            {errors.terms && (
              <span className="text-red-500 text-xs">
                {errors.terms?.message}
              </span>
            )}
          </div>
          <div className="flex justify-center items-center py-1">
            <button
              type="submit"
              className=" text-white text-xl font-bold px-8 py-4 planet-backgorud-1 shadow-inner  shadow-white/10 rounded-3xl"
            >
              Enviar
            </button>
            <Toaster />
          </div>
          <div className="text-white">
            <span>* Campos requeridos</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactHome;
