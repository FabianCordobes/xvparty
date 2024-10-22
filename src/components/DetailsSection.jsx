import React from 'react';
import flowerImage from '../assets/marco2.jpg';
import { motion } from 'framer-motion';

const DetailsSection = () => {
  return (
    <div className="pb-20 text-center xl:ml-[15rem] flex flex-col place-items-center" id="details">
      {/* Marco con texto y título animados */}
      <motion.div
        className="mb-[30px] relative h-[100vh] bg-contain bg-center w-[100vw] flex justify-center items-center"
        style={{ backgroundImage: `url(${flowerImage})` }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="max-w-[90%] md:max-w-[60%] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[2rem] md:text-[2.1rem] text-black px-[40px]">
            Hay momentos inolvidables que se atesoran en el corazón para siempre, por esa razón, quiero que compartas conmigo este día tan especial:
          </p>
          <h2 className="text-[2.5rem] md:text-[3rem] text-black font-extrabold mt-4">
            Mis 15 años
          </h2>
        </motion.div>
      </motion.div>

      {/* Marco blanco con borde en la sección de detalles */}
      <motion.div
        className="border-2 border-dashed border-gray-400 bg-white px-8 py-8 max-w-[90%] md:max-w-[60%] rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Título de la sección con animación */}
        <motion.h2
          className="text-[3rem] font-lora mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Detalles del Evento
        </motion.h2>

        {/* Fecha y hora con animación */}
        <motion.div
          className="mb-6 px-4" // Agregamos padding lateral
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-[2rem] font-extrabold">Fecha y Hora</h3>
          <p className="text-[1.5rem]">Viernes, 27 de octubre, 2024 - 21:00 hrs</p>
        </motion.div>

        {/* Ubicación con animación */}
        <motion.div
          className="mb-6 px-4" // Agregamos padding lateral
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-[2rem] font-extrabold">Ubicación</h3>
          <p className="text-[1.5rem]">Eventos Los Dos Pinos, Soler 1037, Pilar, Buenos Aires</p>
        </motion.div>

        {/* Código de vestimenta con animación */}
        <motion.div
          className="mb-6 px-4" // Agregamos padding lateral
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-[2rem] font-extrabold">Código de Vestimenta</h3>
          <p className="text-[1.5rem]">Hombres guapos</p>
          <p className="text-[1.5rem]">Mujeres bellas</p>
        </motion.div>
      </motion.div>

      {/* Mapa de Google Maps con animación */}
      <motion.div
        className="mt-10 mb-10 w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <iframe
          className="w-full h-80"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13159.409216658112!2d-58.8962427!3d-34.4558969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9ce84ef4be61%3A0xb4806e915aa24310!2sLos%20Dos%20Pinos!5e0!3m2!1ses-419!2sar!4v1727848315779!5m2!1ses-419!2sar"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default DetailsSection;
