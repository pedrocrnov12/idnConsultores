import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ContactCard: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const fadeInAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3500 },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar el mensaje de contacto
    console.log('Mensaje enviado');
    // Limpia los campos del formulario después de enviar
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <animated.div style={fadeInAnimation} className="flex flex-col md:flex-row bg-gray-300 p-8 rounded-lg">
      <div className="w-full md:w-1/2 md:pr-8">
        <h3 className="text-2xl font-semibold mb-4">Contacto</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
              Primer Nombre
            </label>
            <input
              type="text"
              id="firstName"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">
              Apellidos
            </label>
            <input
              type="text"
              id="lastName"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full"
              type="submit"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
        <div className="text-gray-600">
          <p>Correo electrónico: info@example.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Dirección: 123 Calle Principal, Ciudad, País</p>
        </div>
      </div>
    </animated.div>
  );
};

export default ContactCard;
