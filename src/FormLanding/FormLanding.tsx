import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactLandingForm() {
  const [state, handleSubmit] = useForm("mbjenbgg");

  if (state.succeeded) {
    return <p className="text-2xl font-sans text-center mb-8">Pronto recibirás un mensaje en tu correo electrónico</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-300 rounded-lg p-4">
      <label htmlFor="firstName" className="block mb-2 text-lg font-semibold">
        Nombres:
      </label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Escriba su nombre completo por favor."
        required
      />
      <ValidationError
        prefix="First Name"
        field="firstName"
        errors={state.errors}
        className="text-red-500"
      />

      <label htmlFor="lastName" className="block mt-4 mb-2 text-lg font-semibold">
        Apellidos:
      </label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        placeholder="Escriba sus apellidos por favor."
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        required
      />
      <ValidationError
        prefix="Last Name"
        field="lastName"
        errors={state.errors}
        className="text-red-500"
      />

      <label htmlFor="email" className="block mt-4 mb-2 text-lg font-semibold">
        Correo Electrónico
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Por este medio lo contactaremos."
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-red-500"
      />

      <label htmlFor="phone" className="block mt-4 mb-2 text-lg font-semibold">
        Número de Teléfono:
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Escriba su número de teléfono por favor."
        required
      />
      <ValidationError
        prefix="Phone Number"
        field="phone"
        errors={state.errors}
        className="text-red-500"
      />

      <label htmlFor="plan" className="block mt-4 mb-2 text-lg font-semibold">
        Plan:
      </label>
      <select
        id="plan"
        name="plan"
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        required
      >
        <option value="">Seleccione Landing Page</option>
        <option value="LandingPage">Landing Page</option>
      </select>
      <ValidationError
        prefix="Plan"
        field="plan"
        errors={state.errors}
        className="text-red-500"
      />

      <label htmlFor="message" className="block mt-4 mb-2 text-lg font-semibold">
        Mensaje:
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Escriba alguna duda o inquietud."
        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        required
      ></textarea>
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="text-red-500"
      />

      {state.errors.length > 0 && (
        <p className="text-red-500 text-sm mt-4">
          Por favor, complete todos los campos obligatorios.
        </p>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-600 transition-colors duration-300"
      >
        Enviar
      </button>
    </form>
  );
}

function LandingPageF() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Complete los datos y escriba su mensaje</h1>
        <ContactLandingForm />
      </div>
    </div>
  );
}

export default LandingPageF;
