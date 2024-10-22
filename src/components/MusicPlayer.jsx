import React, { useState, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Estado para saber si está sonando
  const [audio] = useState(new Audio('/public/laflor.mp3')); // Crear el elemento de audio
 

  // Función para pausar y reanudar la reproducción
  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause(); // Pausar si está sonando
    } else {
      audio.play(); // Reanudar si está pausado
    }
    setIsPlaying(!isPlaying); // Cambiar el estado de reproducción
  };

  return (
    <div className="fixed bottom-[7rem] right-[2rem] xl:bottom-8 xl:right-12 z-50">
      {/* Botón de play/pause */}
      <button
        onClick={togglePlayPause}
        className="bg-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
      >
        {isPlaying ? (
          <FaVolumeUp className="text-2xl" />
        ) : (
          <FaVolumeMute className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
