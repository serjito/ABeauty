'use client';
import dynamic from 'next/dynamic';

const achievementsList = [
  {
    prefix: '+',
    metric: 'Años de experiencia',
    value: '10 ',
  },
  {
    prefix: '+',
    metric: 'Proyectos',
    value: '500 ',
  },
  {
    prefix: '+',
    metric: 'Clientes',
    value: '1000',
  },
];

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  { ssr: false }
);
function Achievements() {
  return (
    <section className="w-[96%] justify-center mx-auto items-center px-4">
      <div className=" w-full py-1  rounded-lg ">
        <div
          className="bg-gradient-to-t from-[#9958cc] to-[#6c71e5] shadow-lg shadow-black rounded-md py-3 px-17 flex flex-col
        md:flex-row items-center justify-between "
        >
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4"
              >
                <h2 className="text-white text-3xl font-bold tracking-tighter flex flex-row">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="es"
                    className="text-white text-3xl font-bold"
                    transitions={index => ({
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                      duration: index + 0.8,
                    })}
                  />
                </h2>
                <p className="text[#ADB7BE] text-2xl font-bold text-white tracking-tighter">
                  {achievement.metric}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
