const express = require('express'); // Importar express
const bodyParser = require('body-parser'); // Importar body-parser para parsear las peticiones
const cors = require("cors"); // Importar CORS para permitir peticiones de otros dominios
const misrutas = require('./routes/rutas'); // Importar las rutas definidas

const app = express(); // Crear la instancia del servidor
const port = process.env.PORT || 3000; // Definir el puerto

app.use(cors()); // Permitir CORS
app.use(bodyParser.urlencoded({ extended:false })); // Parsear datos de formulario
app.use(bodyParser.json()); // Parsear datos JSON
app.use('/', misrutas); // Usar las rutas definidas

app.listen(port, () => { 
    console.log(`Servidor ejecucion en http://localhost:${port}`); 
})