

const infoSpeaker = [
  {
    id: 1,
    name: "Fernando Demaria",
    subtitle: "Deportista tetrapléjico, emprendedor y comunicador",
    photo_url: require('../images/FernandoDemaria.png'),
    description:
      "Fernando Demaria, es un destacado deportista chileno de motocross y enduro, medallista de oro y plata en los mundiales de México y Finlandia. El 2012, a los 19 años de edad, sufrió un grave accidente que lo dejó tetrapléjico a nivel C5, pero eso no fue impedimento para seguir realizando actividades. Actualmente Demaria, es emprendedor, organizando eventos deportivos masivos a lo largo de todo Chile; realiza charlas motivacionales a diversas instituciones y es comunicador con más de 1,2 millones de suscriptores en sus distintas plataformas. Además volvió el deporte extremo corriendo distintas ediciones del Desafio Del Desierto arriba de su buggy adaptado.",
    web: "",
    social: "https://www.linkedin.com/in/fernando-demaria-098299147/",
    time:"18:20 - 18:40"
  },
  {
    id: 2,
    name: "Francisca Andler",
    subtitle: "Actriz, Coach y Comunicadora",
    photo_url: require("../images/FranciscaAndler.png"),
    description:
      "Francisca Andler, hace 18 años que se ha desarrollado en el ámbito de la comunicación, empoderando a líderes, profesionales y ejecutivos en el desarrollo de sus habilidades comunicacionales, a través de diversas experiencias de aprendizaje. Apasionada por la comunicación, estudio actuación, trabajo en teatro y televisión, pero descubrió que su verdadera pasión eran las personas, eso la llevo a estudiar otras dimensiones de la comunicación, como la Programación Neurolinguistica, coaching, liderazgo y negociación. La metodología usada en las experiencias de aprendizaje que diseña, sumada a las herramientas prácticas y finalmente a su energía y pasión por comunicar y empoderar a quienes guía, la han llevado a trabajar con grandes organizaciones, dentro y fuera de Chile.",
    web: "",
    social: "https://www.linkedin.com/in/franandler/",
    time:"09:40  - 10:00"
  },
  {
    id: 3,
    name: "Francisco Ackermann",
    subtitle: "Influencer y Escritor Best Seller Financiero",
    photo_url: require("../images/FranciscoAckermann.png"),
    description:
      "Francisco Ackermann, es un destacado influencer financiero del país impactando a más de 1 millón de personas a través de sus Redes Sociales en un tema considerado árdo como son las finanzas personales. Autor del libro “Con Peras y Finanzas”, Best Seller en 2023 y su nueva obra “Con Peras e Inversiones” qué a pocas semanas de lanzamiento alcanzó el ranking top 10 de ventas en chile. Su pasión por informar en simple sobre ahorro e inversiones, lo ha llevado a crear disitintas instancias donde poder aprender, como su PodCast con el mismo nombre del libro y que llegó al top 3 de programas más escuchados a lo largo del país. Emprendedor y fundador de Finup, primer Streaming de educación financiera del país con una visión de impactar en la vida de 100 millones de personas acercando las finanzas en simple.",
    web: "https://www.finup.cl/",
    social: "https://www.linkedin.com/in/franciscoackermann/",
    time:"10:40 - 11:00"
  },
  {
    id: 4,
    name: "María Paz Valenzuela",
    subtitle: "Montañista, Activista pro detección precoz del cancer de mama",
    photo_url: require("../images/MariaPazValenzuela.png"),
    description:
      "María Paz Valenzuela, montañista. El año 2017 fue diagnosticada con cancer de mama y el 2018 hace cumbre en el Everest llevando la bandera de su expedición “Alto al Cancer”. Desde entonces trabaja en su campaña por la detección precoz del cancer de mama. Actualmente realiza actividades como guía de montaña y charlas relatando su experiencia para concientizar sobre la importancia de la detección precoz.",
    web: "https://www.vertical.cl/",
    social: "https://www.linkedin.com/in/maria-paz-valenzuela-9ba24b73/",
    time:"20:20 - 20:40"
  },
  {
    id: 5,
    name: "Michelle Schnitzer",
    subtitle: "Referente en el mundo Silver",
    photo_url: require("../images/MichelleSchnitzer.png"),
    description:
      "Michelle Schnitzer, 30 años, Ingeniera Comercial con amplia experiencia en el mundo de la tecnología e inteligencia de negocios. Tuvo la suerte de encontrar su propósito de vida, combatir la soledad de las personas mayores, esto la llevó a renunciar a todo y arriesgarse a partir su propia startup, BondUP. Hoy es reconocida en el mundo silver como referente, ha sido ganadora de diversos premios como fundadora visionaria 2023, ganadora desafío emprendedor Banco de Chile Startup Chile, Corfo, ganaron el premio a la Startup con mayor impacto social y han logrado impactar la vida de más de 5.500 personas mayores. Sus ganas de llevar BondUP al mundo y combatir la soledad se destaca en el mundo silver donde busca convertirse en la principal herramienta de conexión y socialización para los mayores del mundo.",
    web: "",
    social: "https://www.linkedin.com/in/michelle-schnitzer/",
    time:"12:50 - 13:10"
  },
  {
    id: 6,
    name: "Thomas Eckschmidt",
    subtitle:
      "Empresario, impulsor del movimiento Capitalismo Consciente y multi-autor",
    photo_url: require('../images/ThomasEckschmidt.png'),
    description:
      "Ex productor rural, licenciado en ingeniería y MBA ejecutivo en finanzas, trabajó en 15 países diferentes, tuvo una carrera corporativa durante 10 años, migró a otra década de consultoría antes de lanzarse como un emprendedor en serie. Como empresario, Thomas recibió 12 premios (innovación, emprendimiento y sostenibilidad), deposito 4 patentes y publicó 24 libros. Thomas lanzó el movimiento Capitalismo Consciente en América Latina, ayuda a capítulos en todo el mundo, certificó a más de 1200 consultores en 23 países y dirige la red más grande de consultores para acelerar el UPGRADE de líderes y sus organizaciones para crear un ecosistema de negocio más consciente.",
    web: "",
    social: "https://www.linkedin.com/in/teckschmidt/",
    time:"17:00 - 17:20"
  },
  {
    id: 7,
    name: "Sofía Tuane",
    subtitle: "Abogada, Coach Ejecutiva y Deportista",
    photo_url: require("../images/SofiaTuane.png"),
    description:
      "Sofía Tuane es abogada y coach ejecutiva; formada en ambas disciplinas en la Pontificia Universidad Católica de Chile. Entre los años 2012 y 2019 se desempeñó como seleccionada nacional de Chile de voleibol indoor y playa, donde pudo desarrollar habilidades de trabajo en equipo y liderazgo. Desde el año 2022 ejerce como abogada, especializándose en derecho corporativo con énfasis en fusiones y adquisiciones, destacando su participación constante en la Fundación Pro Bono, dedicada a la asesoría legal gratuita. Hoy, con su título de coach ejecutiva, realiza asesorías enfocadas en el desarrollo de herramientas que les permitan a sus coachees alcanzar su máximo potencial, tanto en lo profesional como en lo personal. Esta perspectiva que permea todos los aspectos de su vida, es la que la inspira a comunicar una idea poderosa en esta jornada de charlas TEDx.",
    web: "https://sofiatuane.com/",
    social: "https://www.linkedin.com/in/sofia-tuane-foeldes-aa24b313b/",
    time:"17:40 - 18:00"
  },
  {
    id: 8,
    name: "Eduardo Guzmán",
    subtitle: "Creador de Contenido y Activista por la Tartamudez",
    photo_url: require('../images/EduardoGuzman.png'),
    description:
      "Eduardo Guzmán es un reconocido creador de contenido y activista chileno por la tartamudez que ha ganado una amplia audiencia, superando los 300.000 seguidores en total entre TikTok e Instagram, donde es conocido como @holaeedu. Su pasión por educar y visibilizar la tartamudez se refleja en sus videos, donde comparte experiencias personales y brinda información sobre esta condición, a la vez que realiza intervenciones callejeras con el mismo propósito de concientizar. Su impacto va más allá de las redes sociales, logrando apariciones en importantes programas de televisión, medios escritos y encuentros con personalidades del ámbito político. Eduardo busca transmitir un mensaje de apoyo y comprensión, alentando a las personas que tartamudean a no sentirse solas y promoviendo la inclusión de este colectivo en la sociedad. Su dedicación y compromiso lo han convertido en un referente latinoamericano en la lucha por la aceptación y la igualdad de oportunidades para quienes tartamudean.",
    web: "",
    social: "https://www.linkedin.com/in/holaeedu/",
    time:"12:30 - 12:50"
  },
  {
    id: 9,
    name: "Magdalena Martin",
    subtitle: "Emprendedora y Especialista en Felicidad",
    photo_url: require('../images/MagdalenaMartin.png'),
    description:
      "Magdalena Martín es diseñadora de profesión, emprendedora empedernida y psicóloga frustrada. Con un MBA y 8 años de experiencia en marketing corporativo en multinacionales como Philips y Nestlé, en 2014 decidió tomar la desafiante ruta del emprendimiento fundando Regalos Clicker. Hoy, Magdalena se considera una amante de la ciencia de la felicidad. Esta pasión la ha llevado a iniciar diversos emprendimientos en este ámbito, cada uno de ellos diseñado para abordar diferentes aspectos del bienestar humano. Desde programas de capacitación y talleres hasta asesorías personalizadas para empresas, Magdalena utiliza su vasta experiencia emprendedora para inspirar y guiar a otros hacia el éxito y el bienestar personal.",
    web: "",
    social: "https://www.linkedin.com/in/magdalena-martin-cuadrado-4039a930/",
    time:"13:50 - 14:10"
  },
  {
    id: 10,
    name: "Denisse Goldfarb",
    subtitle: "Autora y conferencista internacional",
    photo_url: require("../images/DenisseGoldfarb.png"),
    description:
      "Denisse Goldfarb es autora y conferencista internacional, experta en futuro del trabajo y talento. Trabajó por más de veinte años como ejecutiva en empresas multinacionales con múltiples reconocimientos, hoy se dedica a compartir su conocimiento como académica y consultora en Chile e Iberoamérica. Es Top Voice e instructora de LinkedIn Learning, y profesora en la Pontificia Universidad Católica de Chile. Es CEO & Founder de la consultora The People Future y autora del libro “Con100te de mi futuro”. Es mentora en innovación para startups y en liderazgo femenino para WoomUp.",
    web: "https://www.thepeoplefuture.com/",
    social: "https://www.linkedin.com/in/denissegoldfarb/",
    time:"09:20 - 09:40"
  },
  {
    id: 11,
    name: "Tomás Ffrench-Davis",
    subtitle: "Emprendedor Social",
    photo_url: require('../images/TomasFfrench-Davis.png'),
    description:
      "Tomás Ffrench-Davis es un innovador emprendedor chileno, dedicado a transformar la responsabilidad social empresarial con tecnología. Fundador y CEO de Goodplayers, una plataforma SaaS que conecta empresas con fundaciones para gestionar acciones de impacto social y medioambiental. Con formación en Ingeniería Comercial por la Universidad del Desarrollo y estudios en Babson College, la Escuela de Empresarios de valencia, y Universidad CEU San Pablo, Tomás ha dedicado su vida al emprendimiento. Con tan solo 28 años, ha cofundador más de 5 empresas en 13 años, en donde ha recibido más de 19 premios nacionales e internacionales, incluyendo ser uno de los 100 jóvenes líderes del Mercurio en 2023 y campeón mundial en emprendimientos con foco en los ODS por Babson College en 2021. Tomás ha impactado la vida de más de 13,000 personas y apoyado a 23 fundaciones, inspirando a otros a emprender con propósito y contribuir al bienestar común.",
    web: "https://goodplayers.cl/",
    social: "https://www.linkedin.com/in/tomasffrench-davis/",
    time:"13:30 - 13:50"
  },
  {
    id: 12,
    name: "Rodrigo Silva",
    subtitle: "Creado de Mosaico",
    photo_url: require("../images/RodrigoSilva.png"),
    description:"Rodrigo Ignacio Silva Alfaro es un emprendedor chileno y candidato político. Es cofundador de MOSAICO y de la Fundación la 4ta Ruta, organizaciones enfocadas en el desarrollo social y comunitario. Rodrigo ha sido candidato a senador por la circunscripción 7 en la Región Metropolitana de Chile, representando al Partido de la Gente 'PDG'. Tiene formación en ingeniería civil industrial y filosofía, con estudios en la Pontificia Universidad Católica de Chile y un MBA de la Universidad de Tulane. Además de su carrera política, está activamente involucrado en el ámbito empresarial y filantrópico, buscando generar impacto positivo a través de sus iniciativas​​.",
    web: "",
    social: "https://www.linkedin.com/in/rodrigo-ignacio-silva-alfaro-569661201/",
    time:"10:20 - 10:40"
  },
  {
    id: 13,
    name: "Hussam Sufan",
    subtitle: "Experto en Growth para empresas",
    photo_url: require('../images/HussamSufan.png'),
    description:
      "Hussam Sufan, conocido como Huss, es un destacado profesional con más de 15 años de experiencia en tecnologías y crecimiento empresarial. Ha cofundado comunidades y startups, y ejerce como mentor e inversionista en varias de ellas. Además, es profesor en prestigiosas universidades de negocios en Chile y España. Actualmente, Huss se desempeña como consultor en diversas empresas y sectores, centrándose en la innovación tecnológica, el crecimiento de negocios y la implementación de Inteligencia Artificial para optimizar procesos. Su enfoque integral no solo incluye el ámbito empresarial, sino también su pasión por el yoga y el mindfulness, disciplinas que practica e imparte como instructor. Estas prácticas influyen profundamente en su filosofía de vida y en los proyectos que lidera. Huss busca ahora desarrollar y apoyar iniciativas que integren ambos mundos, el tecnológico y el de la consciencia plena, con el objetivo de construir negocios más conscientes y sostenibles.",
    web: "https://huss.substack.com/",
    social: "https://www.linkedin.com/in/hsufan/",
    time:"13:10 - 13:30"
  },
  {
    id: 14,
    name: "Ramón Kong",
    subtitle: "Speaker Oficial",
    photo_url: require('../images/RamonKong.png'),
    description: "Fundador y CEO de Doctor911, empresa líder en salud preventiva con 50,000+ pacientes. Es Médico especialista en Medicina de Urgencias, Médico cirujano, Licenciado en Medicina y Bachiller en Ciencias Naturales y Exactas U. de Chile. Ha perfeccionado sus habilidades en King's College London (Inglaterra) y Hospital de Base FAMERP (Brasil). Posee Diplomados en Salud Global U.Chile y Medicina intensiva UC. Se destaca su desempeño en hospitales complejos en Santiago, regiones y clínicas privadas (Chile). Desempeñó rol de Asesor Médico para FONASA, división Contraloría (Chile). Actuó como Médico para Presidencia de Chile en gobiernos de Piñera y Bachelet. Durante la pandemia recibió el premio Líder en Salud y Bienestar otorgado por WEF Chile 2020 dada su destaca participación en la educación médica nacional a través de Hospital Digital MINSAL y su rol como comunicador de salud en medios de difusión masivos.",
    web: "",
    social: "https://www.linkedin.com/in/drramonkong/",
    time:"10:00 - 10:20"
  },
  {
    id: 15,
    name: "Marcela Sabat",
    subtitle: "Ex senadora, consultora y comunicadora.",
    photo_url: require('../images/MarcelaSabat.png'),
    description:
      "Marcela Sabat es ex diputada y ex senadora por la Región Metropolitana. Fue Vicepresidenta y Directora de la organización de estados americanos para la equidad de género “Parlamericas”. Fundadora de “Woman & equality solutions”. Actualmente se desempeña como consultora en asuntos públicos y equidad de género en reconocidas empresas y organizaciones. Es directora ejecutiva de Alianza IN Chile, gremio de empresa de apps e innovación. Conductora de radio y columnista. Nombrada mujer G100 Country Chair en políticas públicas por el Women Economic Forum.",
    web: "https://www.instagram.com/womanandequalitys/",
    social: "https://www.linkedin.com/in/marcela-sabat-fern%C3%A1ndez-828128255/",
    time:"19:40 - 20:00"
  },
  {
    id: 16,
    name: "Felipe Sánchez",
    subtitle: "Speaker Oficial",
    photo_url: require("../images/FelipeSanchez.png"),
    description: "Felipe Sánchez Barceló, también conocido como Pipe Sánchez, es un reconocido influencer y creador de contenido chileno. Es conocido principalmente por su popular cuenta de Instagram, donde publica contenido relacionado con viajes y gastronomía, especialmente sándwiches. Ha ganado una considerable cantidad de seguidores gracias a sus reseñas de comida y sus viajes por todo el mundo​ ​.Además de su carrera en redes sociales, Felipe Sánchez también es conocido por ser el fundador de la cadena de restaurantes 'Chicken Love You' en Chile, famosa por sus innovadoras estrategias de marketing y sus eventos únicos, como regalar sándwiches gratis durante un año a los primeros cien clientes en la inauguración de un nuevo loca",
    web: "https://www.chickenloveyou.cl/",
    social: "https://www.linkedin.com/in/felipesanchezbarcelo/",
    time:"18:00 - 18:20"
  },
  {
    id: 17,
    name: "Ignacio De Jourdan",
    subtitle: "Ilusionista del Asombro y la Creatividad",
    photo_url: require('../images/IgnacioDeJourdan.png'),
    description:
      "Ignacio de Jourdan es ilusionista. Desde los seis años, ha vivido inmerso en un mundo de misterios y maravillas.Su pasión por el asombro y el imposible lo ha llevado a ser un artista de la magia de renombre internacional, deslumbrando a audiencias en cruceros, eventos corporativos en diversos países y teatros, además de destacarse en el programa “Sugestiones” de History Channel. Más allá de la fascinación en los escenarios, Ignacio crea espacios de conversación y reflexión que conectan a personas y organizaciones a través del asombro, la creatividad y la alegría. Su misión es renovar la capacidad de asombro, diseñando ilusiones que inspiran nuevas perspectivas y fomentan la comunicación y la colaboración. Es también el creador de MagiaDentro, una innovadora invitación a descubrir el funcionamiento interno de la magia, la sugestión, la ilusión, las comunicaciones y la creatividad.A través de sus ilusiones, busca inspirar nuevas perspectivas y fomentar la comunicación y la colaboración, creando experiencias transformadoras que desafían lo posible.",
    web: "https://dejourdan.com/",
    social: "https://www.linkedin.com/in/ignacio-de-jourdan/",
    time:"17:20 - 17:40"
  },
  {
    id: 18,
    name: "Matias Muchnick",
    subtitle: "Speaker Oficial",
    photo_url: require('../images/MatiasMuchnick.png'),
    description: "Matías Muchnick es el fundador y CEO de NotCo, una empresa internacional de tecnología alimentaria basada en plantas, establecida en Chile. NotCo ha crecido rápidamente y se ha convertido en la marca de tecnología alimentaria de mayor crecimiento en América Latina, alcanzando el estatus de unicornio con una valoración de $1.5 mil millones en 2021. Muchnick ha dirigido un equipo multidisciplinario de científicos, chefs y ingenieros en varios países, desarrollando una inteligencia artificial llamada Giuseppe. Esta tecnología avanzada permite crear productos a base de plantas que imitan el sabor, la cocción y la funcionalidad de sus contrapartes animales, revolucionando así la industria alimentaria. Bajo su liderazgo, NotCo ha recibido inversiones de figuras destacadas como Jeff Bezos y ha expandido su presencia global, incluyendo una oficina en Estados Unidos.Matías Muchnick también es reconocido como un innovador en el campo de la tecnología alimentaria y ha aparecido en medios de comunicación como Bloomberg TV, Forbes, y CNN​ (Forbes Argentina)​​ (SALT | Empowering Big Ideas)​.",
    web: "https://notco.com/cl",
    social: "https://www.linkedin.com/in/mmuchnick/",
    time:"20:40 - 21:00"
  },
  {
    id: 19,
    name: "Ignacio Navarrete",
    subtitle: "Actor, Emprendedor y Abogado",
    photo_url: require('../images/IgnacioNavarrete.png'),
    description:
      "Nacho Navarrete es actor, abogado y emprendedor. Estudió derecho en la Universidad Católica y trabajó como abogado en el estudio Cariola Díez Pérez-Cotapos tras estudiar un año de actuación en la New York University (NYU).Es co-fundador de la startup Mudango.com, del parque de diversiones Escapology, de la empresa de energía solar Rising Sun y de la startup de registro de recuerdos familiares Memoorias.com.Además, es el creador de Notworking: su primera comedia original como dramaturgo, director y actor. Es un monólogo de 40 personajes donde se representa al mundo emprendedor y lo desafiante pero increíble que es sacar adelante un proyecto. Lleva más de 43 funciones en su primer año en el Teatro Mori del Parque Arauco ante más de 13.000 personas, habiendo hecho funciones también en España, México y Perú. Actualmente tiene un podcast en Spotify llamado “Memoorias” donde entrevista a personas que lo inspiran en distintos ámbitos.",
    web: "https://nachonavarrete.webflow.io/",
    social: "https://www.linkedin.com/in/ignacio-navarrete-chile/",
    time:"20:00 - 20:20"
  },
  {
    id: 20,
    name: "Mario Kreutzberger",
    subtitle: "Speaker Oficial",
    photo_url: require('../images/MarioKreutzberger.png'),
    description: "Mario Kreutzberger, conocido como Don Francisco, es un célebre presentador de televisión chileno. Nació el 28 de diciembre de 1940 en Talca, Chile. Es famoso por haber creado y conducido el programa de televisión 'Sábado Gigante',  que se emitió durante 53 años, convirtiéndose en el programa de variedades más longevo del mundo. Don Francisco también es el fundador de la Teletón, un evento benéfico anual en Chile destinado a recaudar fondos para niños con discapacidades. Su impacto en la televisión y en causas sociales es significativo tanto en Chile como a nivel internacional.",
    web: "https://www.teleton.cl/",
    social: "",
    time:"21:00 - 21:20"
  },

];




export default infoSpeaker;

