import React from 'react';

const CalendarIntegration = () => {
  // Datos del evento
  const event = {
    title: "Fiesta de 15 de Catalina",
    description: "Estás invitado a la fiesta de 15 años de Catalina. ¡Te esperamos!",
    location: "Eventos Los Dos Pinos, Soler 1037, Pilar, Buenos Aires",
    startDate: "20241228T200000", // Formato AAAAMMDDTHHMMSS
    endDate: "20241229T050000",   // Formato AAAAMMDDTHHMMSS
  };

  // Enlace para Google Calendar
  const googleCalendarLink = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
    event.title
  )}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(
    event.description
  )}&location=${encodeURIComponent(event.location)}`;

  // Enlace para iCal
  const icalData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${event.startDate}
DTEND:${event.endDate}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

  const handleDownloadICal = () => {
    const blob = new Blob([icalData], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "event.ics"; // Nombre del archivo que se descargará
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
    className="border-2 border-dashed border-gray-400 bg-white px-[20px] py-8 max-w-[90%] md:max-w-[60%] rounded-lg ml-6 mb-28"
    >
    <div className=" text-center xl:ml-[15rem] flex flex-col items-center" id="calendar">
      <h3 className="text-4xl font-lora mb-10">Si está en vos de hacerme un regalo y no sabes que...</h3>
      <h3 className="text-4xl font-lora mb-10">
        Mi cvu es: <span className='text-2xl'>0000003100042872321614</span> 
      </h3>
      <h3 className="text-4xl font-lora mb-10 max-w-xs">
        Mi alias es: <span className='text-4xl'>catalina.2812</span>       </h3>
    </div>
    </div>   
  );
};

export default CalendarIntegration;
