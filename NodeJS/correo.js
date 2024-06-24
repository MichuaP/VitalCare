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
        from: email,
        to: 'vitalcareclinicas@gmail.com',
        subject: 'Nueva Solicitud de Formulario de Contacto',
        html: `
            <h2>Nueva Solicitud de Formulario de Contacto</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Asunto:</strong> ${asunto}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
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
            // Enviar respuesta automática
            const respuestaAutomatica = {
                from: 'vitalcareclinicas@gmail.com',
                to: email,
                subject: '¡Gracias por ponerte en contacto con VitalCare!',
                html: `
                    <h3>Hola <strong>${nombre}</strong> 👋,</h3>
                    <p>Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
                    <p>Saludos,</p>
                    <p>Equipo de VitalCare 😊</p>
                `,
            };

            transporter.sendMail(respuestaAutomatica, (error, info) => {
                if (error) {
                    console.log('Error al enviar respuesta automática:', error);
                } else {
                    console.log('Respuesta automática enviada:', info.response);
                }
            });
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
