import { Especialidad, Servicio } from './medico';

export const CSERVICIOS: Servicio[] = [
  {
    nombreServicio: 'Urgencias',
    descripcion:
      'Atención médica de emergencia disponible las 24 horas del día, los 7 días de la semana.',
    costo:
      'El costo de los servicios de urgencias puede variar dependiendo del tratamiento requerido y la gravedad de la situación.',
    img: 'assets/img/urgencias.jpg',
  },
  {
    nombreServicio: 'Consultas generales',
    descripcion:
      'Consulta médica para diagnóstico y tratamiento de diversas condiciones de salud.',
    costo:
      'El costo oscila entre $50 a $200. Varía dependiendo de la duración de la consulta y la complejidad del caso.',
    img: 'assets/img/consulta-general.jpg',
  },
  {
    nombreServicio: 'Atención especializada',
    descripcion:
      'Consulta médica con especialistas en áreas como dermatología, oftalmología, etc.',
    costo:
      'El costo de consulta con especialistas varía según la especialidad y la complejidad del caso. Entre $200 a $800 por consulta.',
    img: 'assets/img/atencion-especializada.jpg',
  },
  {
    nombreServicio: 'Atención preventiva',
    descripcion:
      'Evaluaciones médicas regulares para detectar problemas de salud, junto con vacunaciones para prevenir enfermedades infecciosas.',
    costo:
      'El costo puede ser variable, dependiendo del alcance de los exámenes. La vacunación es completamente gratuita.',
    img: 'assets/img/atencion-preventiva.jpg',
  },
  {
    nombreServicio: 'Servicios de laboratorio',
    descripcion:
      'Análisis de muestras biológicas, diagnóstico por imágenes, etc., para ayudar en el diagnóstico y seguimiento de condiciones médicas.',
    costo:
      'El costo de los exámenes de laboratorio varían según el tipo de prueba realizada. Oscilan entre $250 a $1000 o más.',
    img: 'assets/img/laboratorio.jpg',
  },
  {
    nombreServicio: 'Rehabilitación y terapia',
    descripcion:
      'Programas de rehabilitación física y terapia para recuperarse de lesiones o condiciones médicas. Con plan de tratamiento personalizado.',
    costo:
      'El costo es variable, dependiendo de la duración y tipo de terapia. Puede ser de $600 a $1200 por sesión.',
    img: 'assets/img/rehabilitacion.jpg',
  },
];

export const CESPECIALIDADES: Especialidad[] = [
  {
    nombreEspecialidad: 'Medicina General',
    descripcion: 'Atención primaria de la salud, brindando cuidados médicos continuos y completos a personas de todas las edades y géneros.',
    icono: 'assets/img/icon-estetoscopio.png',
  },
  {
    nombreEspecialidad: 'Oftalmología',
    descripcion: 'Especialidad médica dedicada al diagnóstico y tratamiento de enfermedades oculares y trastornos de la visión.',
    icono: 'assets/img/icon-oftalmología.png',
  },
  {
    nombreEspecialidad: 'Cardiología',
    descripcion: 'Especialidad centrada en el diagnóstico y tratamiento de enfermedades del corazón y del sistema circulatorio.',
    icono: 'assets/img/icon-corazón.png',
  },
  {
    nombreEspecialidad: 'Dermatología',
    descripcion: 'Se ocupa de diagnosticar y tratar enfermedades de la piel, cabello y uñas, así como trastornos relacionados con las mucosas.',
    icono: 'assets/img/icon-dermatología.png',
  },
  {
    nombreEspecialidad: 'Ginecología y Obstetricia',
    descripcion: 'Se centra en la salud del sistema reproductivo femenino, y en el cuidado de la mujer durante el embarazo, parto y posparto.',
    icono: 'assets/img/icon-gynecology.png',
  },
  {
    nombreEspecialidad: 'Neurología',
    descripcion: 'Se ocupa del diagnóstico y tratamiento de enfermedades del sistema nervioso central y periférico.',
    icono: 'assets/img/icon-cerebro.png',
  },
  {
    nombreEspecialidad: 'Pediatría',
    descripcion: 'Se enfoca en la atención médica de niños, desde recién nacidos hasta adolescentes, abordando aspectos preventivos y curativos.',
    icono: 'assets/img/icon-bebé.png',
  },
  {
    nombreEspecialidad: 'Oncología',
    descripcion: 'Se especializa en el diagnóstico y tratamiento del cáncer, abordando diferentes tipos y etapas de la enfermedad.',
    icono: 'assets/img/icon-cáncer.png',
  },
  {
    nombreEspecialidad: 'Ortopedia y Traumatología',
    descripcion: 'Se centra en el diagnóstico, tratamiento y prevención de lesiones y trastornos del sistema musculoesquelético.',
    icono: 'assets/img/icon-traumatismo.png',
  },
  {
    nombreEspecialidad: 'Endocrinología',
    descripcion: 'Se enfoca en el diagnóstico y tratamiento de trastornos hormonales, como diabetes, la tiroides y desórdenes metabólicos.',
    icono: 'assets/img/icon-diabetes.png',
  },
  {
    nombreEspecialidad: 'Psiquiatría',
    descripcion: 'Se encarga del diagnóstico, tratamiento y prevención de trastornos mentales, emocionales y del comportamiento.',
    icono: 'assets/img/icon-salud-mental.png',
  },
  {
    nombreEspecialidad: 'Geriatría',
    descripcion: 'Se centra en la atención médica de personas mayores y en el tratamiento de enfermedades asociadas con el envejecimiento.',
    icono: 'assets/img/icon-anciano.png',
  },
];