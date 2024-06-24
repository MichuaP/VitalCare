const nodemailer = require('nodemailer');

const enviarCorreo = (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const asunto = req.body.asunto;
    const mensaje = req.body.mensaje;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'vitalcareclinicas@gmail.com',
            pass: 'kfnc kowc uzgg gljm'
        }
    });

    const mailOptions = {
        from: 'vitalcareclinicas@gmail.com',
        to: email,
        subject: `${asunto}`,
        html: `
            <h2>Información de tu cita en VitalCare</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Información de la cita:<br></strong> ${mensaje}</p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('--------------------');
            console.log(error);
            res.status(500).json({ message: 'Error al enviar el correo' });
        } else {
            console.log('--------------------');
            console.log('Correo enviado:', info.response);
            console.log('--------------------');
            // Imprimir los datos en la consola
            console.log('Datos recibidos del formulario:');
            console.log('Nombre:', nombre);
            console.log('Email:', email);
            console.log('Teléfono:', telefono);
            console.log('Asunto:', asunto);
            console.log('Mensaje:', mensaje);
            console.log('--------------------');
            
            res.status(200).json({
                message: 'Correo enviado correctamente',
                datosFormulario: {
                    nombre: nombre,
                    email: email,
                    telefono: telefono,
                    asunto: asunto,
                    mensaje: mensaje
                }
            });
        }
    });
};

module.exports = { enviarCorreo };
