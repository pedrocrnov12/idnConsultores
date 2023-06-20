import React from 'react';
import LandingPageGallery2 from '../Blog/Blog';
import { Hero2 } from '../Barra/Barra';

const Blog: React.FC = () => {
  const landingPagesData = [
    {
      id: 1,
      name: 'Funcionalidades',
      image: '/metal.png',
      characteristics: 'Incio',
    },
    {
      id: 1,
      name: '',
      image: '/metal.png',
      characteristics: 'Menu Temas',
    },
    {
      id: 2,
      name: ' ',
      image: '/metal.png',
      characteristics: 'Contacto y envio al correo',
    },
    {
      id: 2,
      name: ' ',
      image: '/alvaro.png',
      characteristics: 'Link a redes sociales',
    },
    {
      id: 2,
      name: ' ',
      image: '/alvaro.png',
      characteristics: 'Aviso Privacidad',
    },
    {
      id: 2,
      name: ' ',
      image: '/alvaro.png',
      characteristics: 'Responsivo',
    },
    {
      id: 2,
      name: ' ',
      image: '/elemetic.png',
      characteristics: 'Administrador de blog',
    },
    {
      id: 2,
      name: ' ',
      image: '/elemetic.png',
      characteristics: 'Titulo del articulo',
    },
    {
      id: 2,
      name: ' ',
      image: '/elemetic.png',
      characteristics: 'Imagen o video',
    },
    {
      id: 2,
      name: ' ',
      image: '/koba.png',
      characteristics: 'Compartie en redes sociales',
    },
    {
      id: 2,
      name: ' ',
      image: '/koba.png',
      characteristics: 'Descripccion del articulo',
    },
    {
      id: 2,
      name: ' ',
      image: '/koba.png',
      characteristics: 'Descripccion del autori',
    },
    {
      id: 2,
      name: ' ',
      image: '/santa.png',
      characteristics: 'Galeria de blogs',
    },
    {
      id: 2,
      name: ' ',
      image: '/santa.png',
      characteristics: 'Seccion de comentarios',
    },
    {
      id: 2,
      name: 'Servicios ',
      image: '/santa.png',
      characteristics: 'soporte tecnico',
    },
    {
      id: 2,
      name: 'Precio ',
      image: '/santa.png',
      characteristics: '$2200',
    },
    // Agrega más objetos de landing pages según sea necesario
  ];

  return (
    <div className="">
      <Hero2 />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LandingPageGallery2 landingPages={landingPagesData} />
      </div>
    </div>
  );
};

export default Blog;
