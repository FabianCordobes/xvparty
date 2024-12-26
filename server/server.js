const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para manejar el formulario
app.post('/rsvp', (req, res) => {
  const { name, attending } = req.body;

  if (!name || !attending) {
    return res.status(400).send('Por favor, completa todos los campos.');
  }

  // Procesar los datos del formulario (puedes guardarlos o enviarlos por email)
  console.log('Formulario recibido:', { name, attending });

  res.status(200).send('Formulario recibido correctamente');
});

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
