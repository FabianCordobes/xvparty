import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-12-28T20:00:00');
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

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-[1rem] text-center xl:ml-[15rem]">
      <h2 className="text-[3rem] font-lora mb-10">Cuenta Regresiva</h2>
      <div className="flex justify-center space-x-10 text-4xl font-bold">
        <div>
          <span className="block">{timeLeft.days || '0'}</span>
          <span className="text-lg">Días</span>
        </div>
        <div>
          <span className="block">{timeLeft.hours || '0'}</span>
          <span className="text-lg">Horas</span>
        </div>
        <div>
          <span className="block">{timeLeft.minutes || '0'}</span>
          <span className="text-lg">Minutos</span>
        </div>
        <div>
          <span className="block">{timeLeft.seconds || '0'}</span>
          <span className="text-lg">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
