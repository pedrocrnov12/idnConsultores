import React from 'react';
import LandingPageGallery from '../LandingPages/landing';
import { Hero2 } from '../Barra/Barra';

const LandingPage: React.FC = () => {
  const landingPagesData = [
    {
      id: 1,
      name: 'Funcionalidades',
      image: '/metal.png',
      characteristics: 'Titulo',
    },
    {
      id: 1,
      name: '',
      image: '/metal.png',
      characteristics: 'Imagen o video',
    },
   
    {
      id: 2,
      name: ' ',
      image: '/alvaro.png',
      characteristics: 'Descripccion',
    },
    {
      id: 2,
      name: ' ',
      image: '/alvaro.png',
      characteristics: 'Beneficios o Caracteristicas',
    },
  
    {
      id: 2,
      name: ' ',
      image: '/elemetic.png',
      characteristics: 'Formulario con boton de llamado de accion',
    },
    {
      id: 2,
      name: ' ',
      image: '/elemetic.png',
      characteristics: 'Link a redes sociales',
    },
   
    {
      id: 2,
      name: ' ',
      image: '/koba.png',
      characteristics: 'Logo del cliente con acceso a su pagina web',
    },
    {
      id: 2,
      name: ' ',
      image: '/koba.png',
      characteristics: 'Aviso de privacidad',
    },
  
    {
      id: 2,
      name: ' ',
      image: '/santa.png',
      characteristics: 'Responsivo',
    },
    {
      id: 2,
      name: ' Servicios',
      image: '/santa.png',
      characteristics: 'Soporte tecnico',
    },
 
    {
      id: 2,
      name: 'Precio ',
      image: '/santa.png',
      characteristics: '$1500',
    },
    // Agrega más objetos de landing pages según sea necesario
  ];

  return (
    <div className="">
      <Hero2 />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LandingPageGallery landingPages={landingPagesData} />
      </div>
    </div>
  );
};

export default LandingPage;
