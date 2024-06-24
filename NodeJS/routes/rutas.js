const express = require("express");
const router = express.Router();
// Importar el archivo que se encarga de enviar correos
const correo = require("../correo"); 
const cita = require("../cita");
// Definir la ruta para enviar correos
router.post("/enviar-correo", correo.enviarCorreo); 
router.post("/enviar-cita", cita.enviarCorreo); 
module.exports = router;