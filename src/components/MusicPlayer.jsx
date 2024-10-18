import React, { useState } from 'react';
import { Howl } from 'howler';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicPlayer = () => {
  // Crear instancia de Howler
  const sound = new Howl({
    src: ['/path-to-your-audio-file.mp3'], // Ruta del archivo de audio
    autoplay: true, // Comienza a reproducirse al cargar
    loop: true, // Repetir en bucle
    volume: 0.5, // Volumen inicial (0 a 1)
  });

  // Estado para controlar si el audio está muteado o no
  const [isMuted, setIsMuted] = useState(false);

  // Función para manejar el mute/unmute
  const toggleMute = () => {
    if (isMuted) {
      sound.mute(false); // Activar sonido
    } else {
      sound.mute(true); // Silenciar
    }
    setIsMuted(!isMuted); // Actualizar estado
  };

  return (
    <div className="fixed bottom-[7rem] right-[2rem] xl:bottom-8 xl:right-12 z-50">
      {/* Botón de mute/unmute */}
      <button
        onClick={toggleMute}
        className="bg-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
      >
        {isMuted ? (
          <FaVolumeMute className="text-2xl" />
        ) : (
          <FaVolumeUp className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
