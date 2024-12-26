import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Para el scroll suave
import { FaHome, FaInfoCircle, FaCalendarAlt, FaEnvelopeOpen } from 'react-icons/fa';
import MusicPlayer from './MusicPlayer';

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-4 z-50 m-4 rounded-lg xl:max-w-[80vw] xl:ml-[9rem]">
      <div className="flex justify-around items-center">
        {/* Home */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          onSetActive={() => handleSetActive('home')}
          className={`flex flex-col items-center cursor-pointer ${
            activeSection === 'home' ? 'text-pink-600' : 'text-gray-400'
          }`}
        >
          <FaHome className="text-2xl" />
          <span
            className={`mt-1 ${
              activeSection === 'home' ? 'border-b-2 border-pink-600' : ''
            }`}
          >
            Inicio
          </span>
        </Link>

        {/* Detalles */}
        <Link
          to="details"
          smooth={true}
          duration={500}
          spy={true}
          onSetActive={() => handleSetActive('details')}
          className={`flex flex-col items-center cursor-pointer ${
            activeSection === 'details' ? 'text-pink-600' : 'text-gray-400'
          }`}
        >
          <FaInfoCircle className="text-2xl" />
          <span
            className={`mt-1 ${
              activeSection === 'details' ? 'border-b-2 border-pink-600' : ''
            }`}
          >
            Detalles
          </span>
        </Link>

         {/* RSVP */}
         <Link
          to="rsvp"
          smooth={true}
          duration={500}
          spy={true}
          onSetActive={() => handleSetActive('rsvp')}
          className={`flex flex-col items-center cursor-pointer ${
            activeSection === 'rsvp' ? 'text-pink-600' : 'text-gray-400'
          }`}
        >
          <FaEnvelopeOpen className="text-2xl" />
          <span
            className={`mt-1 ${
              activeSection === 'rsvp' ? 'border-b-2 border-pink-600' : ''
            }`}
          >
            Asistencia
          </span>
        </Link>


        <MusicPlayer />

      </div>
    </nav>
  );
};

export default NavigationBar;
