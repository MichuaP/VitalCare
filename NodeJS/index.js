const express = require('express'); // Importar express
const bodyParser = require('body-parser'); // Importar body-parser para parsear las peticiones
const cookieParser = require('cookie-parser');
require("dotenv").config();
const cors = require("cors"); // Importar CORS para permitir peticiones de otros dominios
const misrutas = require('./routes/rutas'); // Importar las rutas definidas
const admin = require('firebase-admin');
const serviceAccount = require('./FirebaseService.json'); // Asegúrate de descargar el archivo JSON desde la consola de Firebase
const app = express(); // Crear la instancia del servidor
const port = process.env.PORT || 3000; // Definir el puerto

app.use(cors()); // Permitir CORS
app.use(bodyParser.urlencoded({ extended: false })); // Parsear datos de formulario
app.use(bodyParser.json()); // Parsear datos JSON
app.use(cookieParser())
app.use('/', misrutas); // Usar las rutas definidas

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pruebafirebase-adf04-default-rtdb.firebaseio.com"
});

const db = admin.database();
app.post('/data', async (req, res) => {
    const { nombre, fecha, hora } = req.body;
    if (!nombre || !fecha || !hora) {
        return res.status(400).json({ error: 'Por favor, proporciona nombre, fecha y hora.' });
    }
    try {
        const ref = db.ref('citas');
        const snapshot = await ref.orderByChild('nombrePaciente').equalTo(nombre).once('value');

        let foundRecord = null;
        snapshot.forEach(childSnapshot => {
            const record = childSnapshot.val();
            if (record.fecha === fecha && record.hora === hora) {
                foundRecord = record;
            }
        });

        if (foundRecord) {
            res.status(200).send("Informacion de tu cita\nDoctor/Doctora que te atenderá: " + foundRecord.doctor
                + "\nEspecialidad: " + foundRecord.especialidad + "\nFecha de la cita: " + foundRecord.fecha
                + "\nHora de la cita: " + foundRecord.hora + "\nCosto de la cita: $650\n¡Recuerda llegar puntual a tu cita!\n" +
                "- VitalCare\n")
        } else {
            res.status(404).json({ error: 'Registro no encontrado' });
        }
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
});

app.listen(port, () => {
    console.log(`Servidor ejecucion en http://localhost:${port}`);
});