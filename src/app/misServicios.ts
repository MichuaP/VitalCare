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
    informacion: 'Se conoce como medicina general al primer nivel de atención médica que realiza procedimientos sencillos y habitualmente se realiza en consultas ambulatorias. La medicina general no requiere de especialización, es decir, cualquier médico antes de realizar el MIR sería un médico general. Es común que se confunda la medicina general con la medicina de familia, sin embargo, la medicina de familia requiere un período de especialización de cuatro años.',
    img: 'assets/img/especialidades/medicinaGral.jpg',
    patologias: 'Una de las dudas más frecuentes está relacionada con las patologías tratables por la medicina general. En las consultas de medicina general, como ya se ha explicado, se trata un espectro de enfermedades muy amplio. Algunas de las consultas más comunes están relacionadas con infecciones que puedan requerir de un tratamiento antibiótico, patologías leves que no requieran la derivación a un especialista, así como, enfermedades del aparato respiratorio. En muchas ocasiones, la medicina general es la encargada de tratar a pacientes con enfermedades crónicas. En estos casos, se realizan controles y revisiones de manera periódicas, así como, se brinda apoyo emocional y psicológico al paciente, con el objetivo de minimizar los efectos de su patología en su día a día.',
    img2: 'assets/img/especialidades/medicinaGral2.jpg',
    acudir: 'El paciente deberá acudir a la consulta de medicina general ante la aparición de cualquier tipo de sintomatología que provoque dolor o afecte a sus actividades cotidianas, ya que, será el médico general el que realice la primera valoración y realice la prescripción para el especialista adecuado. Otro de los motivos que pueden llevar al paciente a visitar a un médico general, puede ser la necesidad de un volante de prescripción para un especialista. De esta forma, será el médico general quién lo realice. Por último, ante la aparición de sintomatología relacionada con alteraciones psíquicas o anónimas que afecten al bienestar del paciente, se deberá pedir cita para una consulta de medicina general.',
  },
  {
    nombreEspecialidad: 'Oftalmología',
    descripcion: 'Especialidad médica dedicada al diagnóstico y tratamiento de enfermedades oculares y trastornos de la visión.',
    icono: 'assets/img/icon-oftalmología.png',
    informacion: 'La oftalmología es una rama especializada de la medicina que se dedica al estudio, diagnóstico y tratamiento de las enfermedades y trastornos relacionados con los ojos y el sistema visual. Los oftalmólogos son médicos especializados en esta área y están capacitados para manejar una amplia variedad de problemas oculares, desde los más simples hasta los más complejos.',
    img: 'assets/img/especialidades/oftalmologia.jpg',
    patologias: 'La oftalmología aborda una amplia gama de condiciones oculares y problemas de visión. Algunas de las patologías más comunes que trata incluyen errores refractivos como miopía, hipermetropía y astigmatismo, enfermedades oculares degenerativas como la degeneración macular relacionada con la edad (DMAE), enfermedades del nervio óptico como el glaucoma, cataratas, conjuntivitis, retinopatía diabética, oftalmopatía tiroidea, estrabismo, traumatismos oculares y problemas de visión en niños como el ojo vago (ambliopía) o errores refractivos no corregidos. Estos son solo algunos ejemplos, ya que la oftalmología trata una amplia variedad de condiciones que afectan a la salud ocular y la visión.',
    img2: 'assets/img/especialidades/oftalmologia2.jpg',
    acudir: 'Es recomendable acudir a un oftalmólogo en varias situaciones, que incluyen cambios repentinos en la visión, borrosidad, puntos ciegos o destellos de luz, pérdida parcial o total de la visión, dolor ocular persistente o malestar, irritación ocular o sensibilidad a la luz, presencia de secreciones oculares anormales, antecedentes familiares de enfermedades oculares, necesidad de corrección visual con gafas o lentes de contacto, y exámenes de rutina para mantener la salud ocular, especialmente a medida que envejeces. Es importante buscar atención oftalmológica ante cualquier síntoma ocular preocupante o para realizar chequeos regulares de la salud visual, especialmente si tienes factores de riesgo o antecedentes familiares de enfermedades oculares.',
  },
  {
    nombreEspecialidad: 'Cardiología',
    descripcion: 'Especialidad centrada en el diagnóstico y tratamiento de enfermedades del corazón y del sistema circulatorio.',
    icono: 'assets/img/icon-corazón.png',
    informacion: 'La cardiología es la rama de la medicina que se especializa en el estudio, diagnóstico y tratamiento de las enfermedades relacionadas con el corazón y el sistema cardiovascular. Los cardiólogos son médicos especializados en esta área y están capacitados para manejar una amplia variedad de trastornos cardíacos, desde los más comunes hasta los más complejos.',
    img: 'assets/img/especialidades/cardiologia.jpg',
    patologias: 'La cardiología aborda una amplia gama de condiciones cardíacas y trastornos del sistema circulatorio. Algunas de las patologías más comunes que trata incluyen enfermedad coronaria, insuficiencia cardíaca, arritmias cardíacas, enfermedades de las válvulas cardíacas, cardiomiopatías, endocarditis, enfermedades del pericardio, accidentes cerebrovasculares, trombosis venosa profunda (TVP) y embolia pulmonar. Estos son solo algunos ejemplos, ya que la cardiología trata una amplia variedad de condiciones que afectan al corazón y al sistema circulatorio.',
    img2: 'assets/img/especialidades/cardiologia2.jpg',
    acudir: 'Es recomendable acudir a un cardiólogo en varias situaciones, que incluyen dolor en el pecho, dificultad para respirar, palpitaciones cardíacas, hinchazón en las piernas, mareos frecuentes, presión arterial alta, antecedentes familiares de enfermedades cardíacas, diabetes u otras condiciones que aumenten el riesgo cardiovascular, y necesidad de evaluación cardíaca antes de procedimientos quirúrgicos o programas de ejercicio vigoroso. Es importante buscar atención cardiológica ante cualquier síntoma cardíaco preocupante o para realizar chequeos regulares de la salud cardiovascular, especialmente si tienes factores de riesgo o antecedentes familiares de enfermedades cardíacas.',
  },
  {
    nombreEspecialidad: 'Dermatología',
    descripcion: 'Se ocupa de diagnosticar y tratar enfermedades de la piel, cabello y uñas, así como trastornos relacionados con las mucosas.',
    icono: 'assets/img/icon-dermatología.png',
    informacion: 'La dermatología es la rama de la medicina que se especializa en el estudio, diagnóstico y tratamiento de las enfermedades de la piel, cabello, uñas y membranas mucosas. Los dermatólogos son médicos especializados en esta área y están capacitados para manejar una amplia variedad de trastornos dermatológicos, desde los más comunes hasta los más complejos.',
    img: 'assets/img/especialidades/dermatologia.jpg',
    patologias: 'La dermatología aborda una amplia gama de condiciones de la piel y trastornos relacionados. Algunas de las patologías más comunes que trata incluyen acné, dermatitis, psoriasis, eczema, infecciones fúngicas de la piel, rosácea, melanoma y otros tipos de cáncer de piel, verrugas, dermatosis autoinmunes y enfermedades de transmisión sexual que afectan la piel. Estos son solo algunos ejemplos, ya que la dermatología trata una amplia variedad de condiciones que afectan a la piel, cabello, uñas y membranas mucosas.',
    img2: 'assets/img/especialidades/dermatologia2.jpg',
    acudir: 'Es recomendable acudir a un dermatólogo en varias situaciones, que incluyen erupciones cutáneas persistentes o inexplicables, cambios en lunares o manchas en la piel, picazón intensa o dolor en la piel, acné grave o resistente al tratamiento, pérdida de cabello repentina o parches calvos, problemas de las uñas, sospecha de infecciones de la piel y prevención y detección temprana del cáncer de piel. En resumen, es importante buscar atención dermatológica ante cualquier síntoma cutáneo preocupante o para realizar chequeos regulares de la salud de la piel, especialmente si tienes factores de riesgo o antecedentes familiares de enfermedades dermatológicas.',
  },
  {
    nombreEspecialidad: 'Ginecología y Obstetricia',
    descripcion: 'Se centra en la salud del sistema reproductivo femenino, y en el cuidado de la mujer durante el embarazo, parto y posparto.',
    icono: 'assets/img/icon-gynecology.png',
    informacion: 'La ginecología y obstetricia es la especialidad médica que se encarga del cuidado de la salud reproductiva de la mujer, así como del embarazo, parto y puerperio. Los ginecólogos y obstetras son médicos especializados en esta área y están capacitados para manejar una amplia variedad de condiciones relacionadas con el sistema reproductivo femenino.',
    img: 'assets/img/especialidades/ginecologia.jpg',
    patologias: 'La ginecología y obstetricia aborda una amplia gama de condiciones y problemas relacionados con la salud de la mujer. Algunas de las patologías más comunes que trata incluyen trastornos menstruales, infecciones vaginales, enfermedades de transmisión sexual (ETS), trastornos del suelo pélvico, miomas uterinos, endometriosis, cáncer ginecológico, infertilidad, embarazo de alto riesgo, atención prenatal, parto y atención postparto. Estos son solo algunos ejemplos, ya que la ginecología y obstetricia trata una amplia variedad de condiciones que afectan a la salud reproductiva de la mujer, desde la adolescencia hasta la menopausia.',
    img2: 'assets/img/especialidades/ginecologia2.jpg',
    acudir: 'Es recomendable acudir a un ginecólogo u obstetra en varias situaciones, que incluyen problemas menstruales persistentes o preocupantes, dolor pélvico crónico o agudo, síntomas de infecciones vaginales o de transmisión sexual, planificación familiar y anticoncepción, control del embarazo, desde la confirmación hasta el seguimiento prenatal, atención durante el parto y el puerperio, y detección temprana y tratamiento de enfermedades ginecológicas o complicaciones del embarazo. Es importante buscar atención ginecológica y obstétrica ante cualquier síntoma o preocupación relacionada con la salud reproductiva de la mujer, así como para realizar controles regulares de la salud ginecológica y prenatal, especialmente si estás planificando un embarazo o tienes factores de riesgo para ciertas condiciones ginecológicas.',
  },
  {
    nombreEspecialidad: 'Neurología',
    descripcion: 'Se ocupa del diagnóstico y tratamiento de enfermedades del sistema nervioso central y periférico.',
    icono: 'assets/img/icon-cerebro.png',
    informacion: 'La neurología es la especialidad médica que se dedica al estudio, diagnóstico y tratamiento de las enfermedades del sistema nervioso central y periférico. Los neurólogos son médicos especializados en esta área y están capacitados para manejar una amplia variedad de trastornos neurológicos, desde los más comunes hasta los más complejos.',
    img: 'assets/img/especialidades/neurologia.jpg',
    patologias: 'La neurología aborda una amplia gama de condiciones neurológicas y trastornos relacionados. Algunas de las patologías más comunes que trata incluyen accidente cerebrovascular (ACV) o ictus, migraña y otros tipos de cefaleas, epilepsia, enfermedades neurodegenerativas como la enfermedad de Alzheimer y la enfermedad de Parkinson, neuropatías periféricas, esclerosis lateral amiotrófica (ELA), trastornos del sueño, traumatismos craneoencefálicos, trastornos del movimiento y trastornos del sistema nervioso autónomo. Estos son solo algunos ejemplos, ya que la neurología trata una amplia variedad de condiciones que afectan al sistema nervioso en su conjunto.',
    img2: 'assets/img/especialidades/neurologia2.jpg',
    acudir: 'Es recomendable acudir a un neurólogo en varias situaciones, que incluyen síntomas neurológicos persistentes o preocupantes, como dolores de cabeza graves o recurrentes, mareos, entumecimiento, hormigueo, debilidad muscular, convulsiones, cambios en la memoria o el estado de ánimo, dificultades para moverse o hablar, problemas de sueño graves o cualquier otro síntoma que afecte el funcionamiento del sistema nervioso. Es importante buscar atención neurológica ante cualquier síntoma neurológico preocupante o para realizar evaluaciones especializadas de condiciones neurológicas específicas.',
  },
  {
    nombreEspecialidad: 'Pediatría',
    descripcion: 'Se enfoca en la atención médica de niños, desde recién nacidos hasta adolescentes, abordando aspectos preventivos y curativos.',
    icono: 'assets/img/icon-bebé.png',
    informacion: 'La pediatría es la rama de la medicina que se especializa en el cuidado de la salud de los niños, desde el nacimiento hasta la adolescencia. Los pediatras son médicos especializados en esta área y están capacitados para diagnosticar, tratar y prevenir una amplia variedad de enfermedades y afecciones pediátricas.',
    img: 'assets/img/especialidades/pediatria.jpg',
    patologias: 'La pediatría aborda una amplia gama de condiciones de salud que afectan a los niños. Algunas de las patologías más comunes que trata incluyen infecciones respiratorias, infecciones del oído, enfermedades gastrointestinales, alergias alimentarias, trastornos del crecimiento y desarrollo, enfermedades infecciosas, problemas de la piel, problemas de salud mental, lesiones y traumatismos, y vacunación.',
    img2: 'assets/img/especialidades/pediatria2.jpg',
    acudir: 'Es recomendable acudir a un pediatra en varias situaciones, que incluyen exámenes de rutina y chequeos de desarrollo, vacunación según el calendario de vacunación recomendado, síntomas persistentes o preocupantes, necesidad de orientación sobre la alimentación, el sueño y otros aspectos del cuidado del niño, problemas de crecimiento o desarrollo, lesiones o accidentes, y consejos sobre salud y prevención de enfermedades. Es importante buscar atención pediátrica para garantizar la salud y el bienestar de los niños y adolescentes, así como para recibir orientación y consejos sobre su cuidado y desarrollo.',
  },
  {
    nombreEspecialidad: 'Oncología',
    descripcion: 'Se especializa en el diagnóstico y tratamiento del cáncer, abordando diferentes tipos y etapas de la enfermedad.',
    icono: 'assets/img/icon-cáncer.png',
    informacion: 'La oncología es la especialidad médica que se dedica al estudio, diagnóstico y tratamiento del cáncer. Los oncólogos son médicos especializados en esta área y están capacitados para manejar una amplia variedad de tumores malignos y benignos, así como para coordinar el cuidado integral del paciente con cáncer.',
    img: 'assets/img/especialidades/oncologia.jpg',
    patologias: 'La oncología aborda una amplia gama de tipos y subtipos de cáncer, así como sus etapas y variantes genéticas. Algunos de los cánceres más comunes que trata incluyen cáncer de pulmón, cáncer de mama, cáncer colorrectal, cáncer de próstata, cáncer de piel (melanoma y carcinoma de células basales y escamosas), cáncer de vejiga, cáncer de ovario, cáncer de páncreas, cáncer de tiroides, cáncer de riñón, linfoma no Hodgkin y leucemia. Además, la oncología también aborda cánceres menos comunes y pediátricos, así como tumores raros.',
    img2: 'assets/img/especialidades/oncologia2.jpg',
    acudir: 'Es recomendable acudir a un oncólogo en varias situaciones, que incluyen diagnóstico de cáncer confirmado o sospechado, necesidad de evaluación de un tumor o masa sospechosa, tratamiento del cáncer, seguimiento y vigilancia después del tratamiento del cáncer, asesoramiento genético para evaluar el riesgo de cáncer hereditario, participación en ensayos clínicos para acceder a tratamientos experimentales, y atención paliativa y cuidados de apoyo para pacientes con cáncer avanzado.',
  },
  {
    nombreEspecialidad: 'Ortopedia y Traumatología',
    descripcion: 'Se centra en el diagnóstico, tratamiento y prevención de lesiones y trastornos del sistema musculoesquelético.',
    icono: 'assets/img/icon-traumatismo.png',
    informacion: 'La ortopedia y traumatología es la especialidad médica que se dedica al estudio, diagnóstico, tratamiento y rehabilitación de las lesiones y enfermedades del sistema musculoesquelético. Los ortopedistas y traumatólogos son médicos especializados en esta área y están capacitados para manejar una amplia variedad de afecciones relacionadas con los huesos, articulaciones, músculos, tendones y ligamentos.',
    img: 'assets/img/especialidades/ortopedia.jpg',
    patologias: 'La ortopedia y traumatología aborda una amplia gama de condiciones musculoesqueléticas. Algunas de las patologías más comunes que trata incluyen fracturas óseas, luxaciones articulares, lesiones de los tejidos blandos, enfermedades degenerativas de las articulaciones, problemas de la columna vertebral, lesiones deportivas, malformaciones congénitas y tumores óseos y tejidos blandos.',
    img2: 'assets/img/especialidades/ortopedia2.jpg',
    acudir: 'Es recomendable acudir a un ortopedista o traumatólogo en varias situaciones, que incluyen lesiones musculoesqueléticas agudas, dolor persistente en las articulaciones o músculos, dificultad para mover una articulación o soportar peso, deformidades óseas, problemas de la columna vertebral y necesidad de evaluación ortopédica para cirugía o tratamiento conservador. La ortopedia y traumatología es fundamental para el manejo de lesiones y enfermedades del sistema musculoesquelético, y es importante buscar atención especializada en esta área ante cualquier síntoma o problema relacionado.',
  },
  {
    nombreEspecialidad: 'Endocrinología',
    descripcion: 'Se enfoca en el diagnóstico y tratamiento de trastornos hormonales, como diabetes, la tiroides y desórdenes metabólicos.',
    icono: 'assets/img/icon-diabetes.png',
    informacion: 'La endocrinología es la especialidad médica que se dedica al estudio, diagnóstico y tratamiento de las enfermedades relacionadas con las glándulas endocrinas y los desequilibrios hormonales. Los endocrinólogos son médicos especializados en esta área y están capacitados para manejar una amplia variedad de trastornos hormonales y metabólicos.',
    img: 'assets/img/especialidades/endocrinologia.jpg',
    patologias: 'La endocrinología aborda una amplia gama de condiciones relacionadas con el sistema endocrino. Algunas de las patologías más comunes que trata incluyen diabetes mellitus, hipotiroidismo, hipertiroidismo, trastornos de la glándula suprarrenal, trastornos del eje hipotálamo-hipofisario, trastornos del metabolismo óseo, trastornos del metabolismo lipídico, y trastornos del sistema reproductivo.',
    img2: 'assets/img/especialidades/endocrinologia2.jpeg',
    acudir: 'Es recomendable acudir a un endocrinólogo en varias situaciones, que incluyen síntomas de desequilibrios hormonales como cambios en el peso corporal, cambios en el metabolismo, fatiga persistente, problemas de la glándula tiroides, trastornos menstruales o de la fertilidad, diabetes mellitus, y osteoporosis. Además, es importante consultar a un endocrinólogo para el manejo integral de enfermedades crónicas como la diabetes y para recibir orientación sobre cambios en el estilo de vida y terapias hormonales. La endocrinología es fundamental para el diagnóstico y tratamiento de trastornos hormonales y metabólicos, y es importante buscar atención especializada en esta área ante cualquier síntoma o problema relacionado con el sistema endocrino.',
  },
  {
    nombreEspecialidad: 'Psiquiatría',
    descripcion: 'Se encarga del diagnóstico, tratamiento y prevención de trastornos mentales, emocionales y del comportamiento.',
    icono: 'assets/img/icon-salud-mental.png',
    informacion: 'La psiquiatría es la especialidad médica que se encarga del estudio, diagnóstico, tratamiento y prevención de los trastornos mentales, emocionales y del comportamiento. Los psiquiatras son médicos especializados en esta área y están capacitados para abordar una amplia variedad de problemas de salud mental, desde trastornos comunes hasta enfermedades mentales graves.',
    img: 'assets/img/especialidades/psiquiatria.jpg',
    patologias: 'La psiquiatría aborda una amplia gama de trastornos mentales y emocionales. Algunas de las patologías más comunes que trata incluyen trastornos del estado de ánimo, trastornos de ansiedad, trastornos psicóticos, trastornos de la personalidad, trastornos alimenticios, trastornos del sueño, trastorno por déficit de atención e hiperactividad (TDAH), trastornos del espectro autista (TEA) y trastornos relacionados con el consumo de sustancias.',
    img2: 'assets/img/especialidades/psiquiatria2.jpg',
    acudir: 'Es recomendable acudir a un psiquiatra en varias situaciones, que incluyen síntomas persistentes de tristeza, ansiedad, cambios en el comportamiento o el estado de ánimo, dificultades para funcionar en la vida diaria, problemas interpersonales o familiares relacionados con la salud mental, pensamientos suicidas o autolesiones, y necesidad de evaluación y tratamiento de trastornos mentales diagnosticados. La psiquiatría es fundamental para el cuidado integral de la salud mental y es importante buscar atención especializada en esta área ante cualquier síntoma o preocupación relacionada con la salud mental.',
  },
  {
    nombreEspecialidad: 'Geriatría',
    descripcion: 'Se centra en la atención médica de personas mayores y en el tratamiento de enfermedades asociadas con el envejecimiento.',
    icono: 'assets/img/icon-anciano.png',
    informacion: 'La geriatría es la rama de la medicina que se enfoca en el cuidado de la salud de las personas mayores. Los geriatras son médicos especializados en esta área y están capacitados para diagnosticar, tratar y prevenir una variedad de condiciones médicas y problemas de salud específicos de la población anciana.',
    img: 'assets/img/especialidades/geriatria.jpeg',
    patologias: 'La geriatría aborda una amplia gama de condiciones médicas y problemas de salud asociados con el envejecimiento. Algunas de las patologías más comunes que trata incluyen enfermedades crónicas como la hipertensión arterial, la diabetes mellitus, la enfermedad cardiovascular, la osteoartritis y la enfermedad pulmonar obstructiva crónica (EPOC); trastornos cognitivos como la demencia, incluyendo la enfermedad de Alzheimer y la demencia vascular; trastornos del estado de ánimo como la depresión y la ansiedad; caídas y fragilidad; incontinencia urinaria y fecal; polifarmacia y manejo de medicamentos; y cuidados paliativos y atención al final de la vida.',
    img2: 'assets/img/especialidades/geriatria2.jpg',
    acudir: 'Es recomendable acudir a un geriatra en varias situaciones, que incluyen cambios en la función física o cognitiva, problemas de equilibrio o movilidad, dificultades con actividades de la vida diaria, manejo de enfermedades crónicas, preocupaciones sobre la memoria o el estado de ánimo, cuidado de la salud preventivo y atención integral en la etapa final de la vida. La geriatría es fundamental para el cuidado de la salud de las personas mayores y es importante buscar atención especializada en esta área para abordar las necesidades médicas y de bienestar específicas de la población anciana.',
  },
];