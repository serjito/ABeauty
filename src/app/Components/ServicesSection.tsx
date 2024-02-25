import user from '../../../public/user.svg';
import users from '../../../public/users.svg';
import world from '../../../public/world.svg';
import instagram from '../../../public/instagram.svg';
import google from '../../../public/google-icon.svg';
import megaphone from '../../../public/megaphone.svg';
import seo from '../../../public/seo.svg';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    title: 'Coaching',
    image: user,
    description:
      'Servicio de coaching personalizado para llevar tu salón de belleza a un nivel superior en la industria.',
  },
  {
    title: 'Branding',
    image: users,
    description:
      'Desarrollo de una identidad de marca sólida para destacar tu salón.',
  },
  {
    title: 'Sitio Web',
    image: world,
    description:
      'Diseño y desarrollo de sitios web elegantes y funcionales para destacar la presencia en línea de tu salón.',
  },
  {
    title: 'Publicidad digital',
    image: megaphone,
    description:
      'Creamos tus campañas publicitarias digitales personalizadas para impulsar la notoriedad y atraer nuevos clientes.',
  },
  {
    title: 'Redes Sociales',
    image: instagram,
    description:
      'Estrategias de gestión en redes sociales para aumentar la visibilidad y atraer a tu audiencia.',
  },
  {
    title: 'SEO',
    image: seo,
    description:
      'Optimización para motores de búsqueda (SEO) para mejorar la visibilidad en línea y atraer tráfico relevante.',
  },
  {
    title: 'Captación de clientes',
    image: users,
    description: 'Servicio al cliente para conseguir clientes potenciales.',
  },
  {
    title: 'Optimización de perfil',
    image: google,
    description:
      'Optimizamos el perfil de tu negocio, para generar nuevos clientes.',
  },
];
function ServicesSection() {
  return (
    <section
      id="services"
      className="w-[96%] justify-center mx-auto items-center px-4 my-8"
    >
      <div className="w-full mx-auto">
        <div className="text-center">
          <h2 className=" text-3xl font-extrabold text-gray-700 tracking-tight">
            Nuestros servicios
          </h2>
          <p className=" mt-4 text-xl text-gray-600 font-semibold tracking-tight">
            Ofrecemos una variedad de servicios
          </p>
        </div>
        <div className=" w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
