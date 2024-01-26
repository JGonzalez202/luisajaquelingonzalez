import { Component, OnInit } from '@angular/core';
import { DatasetconferencistasService } from './datasetconferencistas.service';

@Component({
  selector: 'app-conferencistas',
  templateUrl: './conferencistas.component.html',
  styleUrls: ['./conferencistas.component.scss'],
})
export class ConferencistasComponent  implements OnInit {
 /* lista_conferencistas =[ {
    imagen : "/assets/Fotosconferencistas/estein.jpeg",
    titulo :"M. EN A.D.N. JUAN MANUEL STEIN CARRILLO",
    horario : "De 12:00:00 hrs. a 18:00:00 hrs.",
    descripcion : "Es ingeniero en sistemas computacionales, Egresado del Tecnológico de Estudios Superiores de Ecatepec, estudió dos maestrías, la primera en Ingeniería en Sistemas Computacionales, y la segunda en Administración y Desarrollo de Negocios con doble titulación por parte de la Universidad del Valle de Toluca (México) y la Universidad Politécnica de Cataluña (España). Realiza actividades de profesor investigador en distintas áreas como son: Inteligencia Artificial, Redes Neuronales Artificiales e Interacción Humano-Computadora, entre otras. Cabe mencionar que actualmente he desarrollado proyectos con Inteligencia Artificial y Redes neuronales integradas en placas embebidas, participando en convocatorias del TecNM, COMECYT y CONAHCYT."
  },
  {
    imagen : "/assets/Fotosconferencistas/Adolfo.jpeg",
    titulo :"DR. ADOLFO MELÉNDEZ RAMÍREZ",
    horario : "De 12:00:00 hrs. a 18:00:00 hrs.",
    descripcion : "Es profesor de tiempo completo en el Tecnológico de Estudios Superiores de Ecatepec, en la División de Ingeniería de Sistemas Computacionales. Además, es el líder del cuerpo académico en inteligencia artificial aplicada, colaborando dentro del Centro de Cooperación Academia-Industria del TESE. Debido a su destacado trabajo, ha recibido reconocimiento como un perfil deseable acreditado por PROMEP."
  },
  {
    imagen : "/assets/Fotosconferencistas/DraGris.jpeg",
    titulo :"",
    horario : "",
    descripcion : ""
  },
  {
    imagen : "/assets/Fotosconferencistas/Franck.jpeg",
    titulo :"MTRO. JUAN FRANCISCO MELÉNDEZ ELIZALDE",
    horario : "De 12:00:00 hrs. a 18:00:00 hrs.",
    descripcion : "De 1987–1993 desempeño dando Mantenimiento de equipo de cómputo e instructor de software de cómputo en general e instalación de Redes en diferentes filiales de IBM y de manera independiente hasta la fecha (más de 30 años). Desde 1992 como Docente en el Tecnológico de Estudios superiores de Ecatepec (TESE) Impartiendo diversas materias como: Ingeniería de Software, Bases de Datos, Teleproceso y Redes, Sistemas Abiertos, Análisis y diseño de sistemas, Sistemas Digitales, Arquitectura de computadoras, Teoría general de sistemas, Software de sistemas, Principios eléctricos y aplicaciones digitales, Física General, Matemáticas Discretas, Sistemas Programables. Desde 2002 como docente en el CECyT #3 “Estanislao Ramírez Ruiz” (Voca 3) impartiendo materias como: Dispositivos electrónicos, Redes Digitales, Instrumentación Electrónica, Programación Visual. Estudios 1987–1992 ESIME-ZAC (Escuela Superior de Ingeniería Mecánica y Eléctrica) IPN. Ingeniero en Comunicaciones y Electrónica. 2000–2002 ESIME-ZAC-SEPI (Escuela Superior de Ingeniería Mecánica y Eléctrica) IPN (Sección de Estudios de Postgrado), MAESTRIA EN INGENIERIA EN SISTEMAS. 2011–2013 UNIVERSIDAD PEDAGÓGICA NACIONAL U.P.N. UNIDAD 092 AJUSCO (CENTRAL), ESPECIALIDAD EN EDUCACIÓN MEDIA SUPERIOR LÍNEA I. COMPETENCIAS DOCENTES. 2021–2022 Centro Interdisciplinario de Innovación y Posgrado, Maestría en Educación y Profesionalización Docente."
  },
  {
    imagen : "/assets/Fotosconferencistas/Organiche.jpeg",
    titulo :"M. EN I.S.C. RUBÉN RAYA DELGADO",
    horario : "De 12:00:00 hrs. a 18:00:00 hrs.",
    descripcion : "Orgullosamente titulado en el Tecnológico de Estudios Superiores de Ecatepec como M.I.S.C. especializado en desarrollo multiplataforma y soluciones tecnológicas avanzadas. Experto en integración de servicios de inteligencia artificial enfocados en la banca, atención a clientes y amplia experiencia en desarrollo de aplicaciones de software. Apasionado por la implementación de soluciones empresariales disruptivas y la integración de tecnologías de IoT de vanguardia para abordar desafíos en la industria de TI. Líder técnico en la empresa NDS Cognitive Labs y profesor de cátedra en el Instituto Tecnológico y de Estudios Superiores de Monterrey campus Santa Fe.    "
  },
  {
    imagen : "/assets/Fotosconferencistas/TM.jpeg",
    titulo :"M. EN I.S.C. RUBÉN RAYA DELGADO",
    horario : "De 12:00:00 hrs. a 18:00:00 hrs.",
    descripcion : "Orgullosamente titulado en el Tecnológico de Estudios Superiores de Ecatepec como M.I.S.C. especializado en desarrollo multiplataforma y soluciones tecnológicas avanzadas. Experto en integración de servicios de inteligencia artificial enfocados en la banca, atención a clientes y amplia experiencia en desarrollo de aplicaciones de software. Apasionado por la implementación de soluciones empresariales disruptivas y la integración de tecnologías de IoT de vanguardia para abordar desafíos en la industria de TI. Líder técnico en la empresa NDS Cognitive Labs y profesor de cátedra en el Instituto Tecnológico y de Estudios Superiores de Monterrey campus Santa Fe.    "
   },
  {
    imagen : "/assets/Fotosconferencistas/TM2.jpeg",
    titulo :"DR. NOÉ VELÁZQUEZ LÓPEZ",
    horario : "De 12:00:00 hrs. a 18:00:00 hrs.",
    descripcion : "Profesor investigador de tiempo completo en el Departamento de Irrigación de la Universidad Autónoma Chapingo y parte del núcleo académico básico del Programa de Posgrado en Ingeniería Agrícola y Uso Integral del Agua (IAUIA). Graduado como Ingeniero Mecánico en Agricultura (2005) por la Universidad Autónoma Chapingo. Cuenta con Maestría en Ingeniería Agrícola con especialización en visión artificial (2008-2010) y Doctorado en Ingeniería Agrícola con especialización en robótica agrícola (2010-2013) por la Universidad de Agricultura de Tokio (TUA). Sus áreas de investigación son automatización y robótica en agricultura. Cuenta con experiencia laboral como investigador en el programa de mecanización agrícola del INIFAP (2013-2014). Es líder del proyecto “robot agricultor” desarrollado en la Universidad Autónoma Chapingo y del cual obtuvo 6 diseños industriales y un modelo de utilidad (2020). Cuenta también con un modelo de utilidad de una sembradora automática de granos pequeños (2021) y un modelo de utilidad de una sembradora de granos medianos (Maíz y frijol), un modelo de utilidad de una clasificadora de granos y una peladora de tuna semiautomática. Todos resultados de tesis tanto de licenciatura como de posgrado de las cuales fungió como director. Es líder del proyecto institucional denominado “Desarrollo de un vehículo terrestre no tripulado para laborares agrícolas (Iniciado en 2018)” y fue responsable técnico del proyecto. “Robotización del manejo integrado de plagas y enfermedades en sistemas de agricultura protegida (2020)”. Financiado por COMECYT."
  },
  {
    imagen : "/assets/Fotosconferencistas/TM3.jpeg",
    titulo :"ING. EDUARDO ANTONIO RODRÍGUEZ ROSADO",
    horario : "De 15:00:00 hrs. a 15:50:00 hrs.",
    descripcion : "Actualmente es director de Tecnología, estoy encargado de las áreas de proyectos, IA, estimaciones, infraestructura y desarrollo de productos, en la cual mi misión es ayudar a crecer a las áreas y desarrollar los equipos con una cultura de alta performance. Fue desarrollador fullstack, miembro de las tribus de mobile, del team de portafolio o ﬁnOps, encargado de la creación de la versión de México de la aplicación mobile de la startup brasileño Creditas y también participe en el desarrollo de microservicios con springboot, Kotlin, con arquitecturas orientadas a eventos y SQRS. Participe en las arquitecturas para México, y en la creación de herramientas para optimizar los procesos."
  },
  {
    imagen : "/assets/Fotosconferencistas/Jacob.jpeg",
    titulo :"DR. FRANCISCO JACOB ÁVILA CAMACHO",
    horario : "De 12:00:00 hrs. a 18:00:00 hrs.",
    descripcion : "Ingeniero en Electrónica y Computación, con Maestría en Ingeniería en Sistemas Computacionales, Maestría en Ciencias en Administración de Negocios y Doctorado en Sistemas Computacionales. Se ha desempeñado en las áreas de desarrollo de software y soluciones tecnológicas, cuenta con más de 18 años de experiencia docente e investigación en las áreas de inteligencia artificial, reconocimiento de patrones, internet de las cosas, diseño de bases de datos, programación y desarrollo web. Actualmente es también Coordinador del Centro de Cooperación Academia Industria del TESE."
  },
  {
    imagen : "/assets/Fotosconferencistas/TM4.jpeg",
    titulo :"ING. LUIS FERNANDO FÉRNANDEZ",
    horario : "De 12:00:00 hrs. a 18:00:00 hrs.",
    descripcion : "Tengo experiencia en tecnologías de la información, con enfoque en desarrollo de front-end. Soy el tipo de persona que aprovecha cada oportunidad para aprender algo nuevo. Por eso disfruto de los desafíos. Me encanta trabajar y colaborar con gente diferente. En Uber & Cornershop se trabajó con React y otras bibliotecas o metodologías como Jest, Enzyme, Sass, BEM, Mock Service Worker, etc. Actualmente estoy trabajando para la empresa Badak en actividades como cambio cultural, programas de capacitación, charlas tecnológicas. Disfruto codificando, así que sigo programando y revisando código."
  },
  {
    imagen : "/assets/Fotosconferencistas/TM5.jpeg",
    titulo :"DR. EMMANUEL TONATIHU JUÁREZ VELÁZQUEZ",
    horario : "De 12:00:00 hrs. a 18:00:00 hrs.",
    descripcion : "El Dr. Emmanuel Tonatihu Juárez Velázquez, es Ingeniero en Electrónica y Comunicaciones, Maestro en Ingeniería en Sistemas Computacionales y Doctor en Comunicaciones y Electrónica. Actualmente se desempeña como profesor investigador y profesor de posgrado en diferentes instituciones educativas. Entre sus principales áreas de de desarrollo se encuentran las redes de computadoras, los sistemas operativos, los sistemas embebidos, la seguridad informática, y la inteligencia artificial."
  },


  ];*/
  lista_conferencistas:any={};
  constructor(private serviciodatos:DatasetconferencistasService) { }

  ngOnInit() {
   this.lista_conferencistas=this.serviciodatos.obtenerdatosConferencistas();
  }

}
