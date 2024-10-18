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
    <div className="pb-20 text-center xl:ml-[15rem] flex flex-col items-center mb-[6rem]" id="calendar">
      <h2 className="text-4xl font-lora mb-10">Agrega el Evento a tu Calendario</h2>
      <div className="space-y-6 lg:w-[22rem] flex flex-col">
        {/* Enlace para Google Calendar */}
        <a
          href={googleCalendarLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Agregar a Google Calendar
        </a>

        {/* Botón para iCal */}
        <button
          onClick={handleDownloadICal}
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
        >
          Descargar para iCal/Outlook
        </button>
      </div>
    </div>
  );
};

export default CalendarIntegration;
