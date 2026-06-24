const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo desde Express');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

app.get('/usuario', (req, res) => {
  const usuario = {
    id: 1,
    nombre: 'Juan',
    rol: 'Administrador'
  };

  res.json(usuario);
});
