import React from 'react';
import { useSpring, animated } from 'react-spring';
import Carru from '../carrouselcard.tsx/carcard';
const Consultoría: React.FC = () => {
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });
  const textAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500, config: { duration: 1000 } });

  return (
    <div className="flex flex-col items-center">
      <div
        style={{ backgroundColor: '#BCA1A1', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem', borderRadius: '8px' }}
        className="w-full shadow-lg"
      >
        <animated.h1 className="text-center text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-black" style={{ fontFamily: 'Lato', ...titleAnimation }}>
          Consultoria Estrategica
        </animated.h1>
      </div>
      <div className="flex flex-col md:flex-row mt-6 items-center"> {/* Ajusta el valor del margen superior según tus necesidades */}
        <div className="w-full md:w-1/2">
          <animated.p className="text-center md:text- text-lg lg:text-xl xl:text-2xl text-gray-800 mt-6 md:mt-0 mx-2 " style={textAnimation}>
            Asesoramos y capacitamos a los dueños de negocios para guiarlos en la profesionalización de sus empresas. Esto será posible a través de un consultor experto que impartirá y personalizará el contenido de los talleres para que el conocimiento se aplique a la realidad de tu negocio.
          </animated.p>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img src="/1.jpg" alt="Foto" className="mx-auto rounded-lg shadow-lg" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

      </div>
      <div>
        <Carru></Carru>
      </div>
    </div>
  );
};

export default Consultoría;
