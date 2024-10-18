import flowerImage from '../assets/flower1.png';
import { Link } from 'react-scroll'; // Usaremos para el scroll suave
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center w-[99vw]" style={{ backgroundImage: `url(${flowerImage})` }}>
      {/* Overlay opcional */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido del Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Animación del título */}
        <motion.h1
          className="text-5xl md:text-7xl font-lora mb-4 px-4 lg:px-[20rem] -tracking-tighter"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Recibiste una invitación a la fiesta de
        </motion.h1>

        {/* Animación del nombre */}
        <motion.span
          className="text-[7rem] font-allura"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Catalina
        </motion.span>

        {/* Animación del texto de la fecha */}
        <motion.p
          className="text-[3rem] m:text-3xl mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Viernes, 27 de diciembre, 2024
        </motion.p>

        {/* Animación del botón */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="details"
            smooth={true}
            duration={1000}
            className="inline-block bg-white text-black font-lora font-extrablod px-6 py-3 text-[1.3rem] rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Descubre más
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
