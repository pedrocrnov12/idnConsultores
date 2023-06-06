import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  sectionId: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, sectionId }) => {
  const [hovered, setHovered] = useState(false);

  const cardAnimationProps = useSpring({
    transform: hovered ? 'translateY(-10px)' : 'translateY(0px)',
  });

  const buttonAnimationProps = useSpring({
    opacity: hovered ? 1 : 0,
    transform: hovered ? 'translateY(0px)' : 'translateY(10px)',
  });

  return (
    <div
      className={`relative bg-gray-200 shadow-lg rounded-lg p-8 mx-auto ${hovered ? 'bg-gray-300' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <animated.div style={cardAnimationProps}>
        <img src={image} alt={title} className="w-48 h-48 object-cover mx-auto mb-6 " />
        <h3 className="text-2xl font-semibold text-center mb-6">{title}</h3>
        <p className="text-gray-600 text-center mb-10">{description}</p>
      </animated.div>
      <animated.div style={buttonAnimationProps} className="flex justify-center">
        <Link to={sectionId} smooth={true} duration={500}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full">
            Ver más
          </button>
        </Link>
      </animated.div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div id='tic' className="flex justify-center items-center h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          image="/it1.jpg"
          title="Sitios Web"
          description="Liberaremos tú página web institucional, landing page y/o sitio para reportes ciudadanos de acuerdo a los requerimientos de información que necesites."
          sectionId="tic"
        />
        <ServiceCard
          image="/it2.jpeg"
          title="GRP"
          description="Ajustamos el software a la medida de tus procesos para que el sistema se adapte a tí y puedas administrar tu ayuntamiento desde una sola plataforma."
          sectionId="tic"
        />
        <ServiceCard
          image="/it3.jpeg"
          title="Licencias TIC´s"
          description="Te ofrecemos nuestras tecnologías desarrolladas a través de un esquema de Licencia Anual para que puedas disponer de ellas de forma inmediata en tu ayuntamiento."
          sectionId="tic"
        />
      </div>
    </div>
  );
};

export default Home;
