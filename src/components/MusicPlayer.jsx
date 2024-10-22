import React, { useState } from 'react';
import { Howl } from 'howler';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [sound, setSound] = useState(null);

  // Función para inicializar y reproducir el audio
  const playMusic = () => {
    if (!sound) {
      const music = new Howl({
        src: ['/assets/laflor.mp3'], // Ruta del archivo de audio
        autoplay: true, // Comienza a reproducirse al hacer clic
        loop: true, // Repetir en bucle
        volume: 0.5, // Volumen inicial (0 a 1)
      });

      setSound(music);
      music.play(); // Iniciar la reproducción del audio
    }
  };

  // Función para manejar el mute/unmute
  const toggleMute = () => {
    if (sound) {
      if (isMuted) {
        sound.mute(false); // Activar sonido
      } else {
        sound.mute(true); // Silenciar
      }
      setIsMuted(!isMuted); // Actualizar estado
    } else {
      playMusic(); // Iniciar música en caso de que no se haya iniciado
      setIsMuted(false); // Asegurar que no esté muteado al iniciar
    }
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
