import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-12-27T21:00:00');
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-[1rem] text-center xl:ml-[15rem]">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[3rem] font-lora mb-10">Cuenta Regresiva</h2>
      </motion.div>

      <div className="flex justify-center space-x-4 text-4xl font-bold ">
        {/* Días */}
        <motion.div
          className="bg-white shadow-md border border-gray-300 p-4 rounded-lg text-black"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="block">{timeLeft.days || '0'}</span>
          <span className="text-lg">Días</span>
        </motion.div>

        {/* Horas */}
        <motion.div
          className="bg-white shadow-md border border-gray-300 p-4 rounded-lg text-black"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="block">{timeLeft.hours || '0'}</span>
          <span className="text-lg">Horas</span>
        </motion.div>

        {/* Minutos */}
        <motion.div
          className="bg-white shadow-md border border-gray-300 p-4 rounded-lg text-black"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="block">{timeLeft.minutes || '0'}</span>
          <span className="text-lg">Minutos</span>
        </motion.div>

        {/* Segundos */}
        <motion.div
          className="bg-white shadow-md border border-gray-300 p-4 rounded-lg text-black"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="block">{timeLeft.seconds || '0'}</span>
          <span className="text-lg">Segundos</span>
        </motion.div>
      </div>
    </div>
  );
};

export default CountdownTimer;
