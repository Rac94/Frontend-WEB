const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let personas = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/registrar', (req, res) => {
  const { nombre, apellido, correo, cedula, contrasena } = req.body;

  if (personas.length >= 20) {
    res.send('Se ha alcanzado el máximo de personas registradas.');
    return;
  }

  const nuevaPersona = {
    nombre,
    apellido,
    correo,
    cedula,
    contrasena,
  };

  personas.push(nuevaPersona);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Servidor Express funcionando en http://localhost:${port}`);
});

