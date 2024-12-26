import React, { useState } from 'react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    attending: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica: comprobar si los campos requeridos están completos
    if (!formData.name.trim() || (formData.attending !== 'yes' && formData.attending !== 'no')) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      // Enviar los datos al backend
      const response = await fetch('http://localhost:5000/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true); // Mostrar mensaje de confirmación
      } else {
        alert('Hubo un problema al enviar el formulario.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario.');
    }
  };

  return (
    <div className="py-20 px-8 text-center xl:ml-[15rem] " id="rsvp">
      <h2 className="text-4xl font-lora mb-10">Confirma tu Asistencia</h2>
      {!formSubmitted ? (
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          {/* Nombre completo */}
          <div className="mb-4">
            <label className="block text-lg mb-2">Nombre Completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-slate-100"
              placeholder="Escribe tu nombre"
              required
            />
          </div>

          {/* Asistencia */}
          <div className="mb-4">
            <label className="block text-lg mb-2">¿Asistirás?</label>
            <div className="flex justify-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  onChange={handleChange}
                  className="appearance-none checked:bg-slate-700 bg-gray-200 border border-gray-300 h-4 w-4 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-600"
                  required
                />
                <span className="ml-2">Sí</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  onChange={handleChange}
                  className="appearance-none checked:bg-slate-700 bg-gray-200 border border-gray-300 h-4 w-4 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-600"
                  required
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-300"
          >
            Enviar Confirmación
          </button>
        </form>
      ) : (
        <p className="text-2xl">¡Gracias por confirmar tu asistencia!</p>
      )}
    </div>
  );
};

export default RSVPForm;
