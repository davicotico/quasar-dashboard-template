<script setup lang="ts">
import { type Contact } from 'src/components/models';
//import ContactCard from 'src/components/ContactCard.vue';
import ContactList from 'src/components/ContactList/ContactList.vue';
import { onMounted, ref } from 'vue';

const lista: Contact[] = [
  {
    id: '123456',
    displayName: 'David Tomas Ticona Saravia',
    phone: '1423',
    fotoUrl: '',
    mail: 'dtticona@test.com',
    jobTitle: 'Desarrollador FullStack',
    office: 'Unidad Nacional de Administracion de Sistemas Informaticos y Comunicacion',
  },
  {
    id: '100001',
    displayName: 'María José González Pérez',
    phone: '1011',
    fotoUrl: '',
    mail: 'mariajose.gonzalezperez@emaildepruebas.com',
    jobTitle: 'Analista de Sistemas',
    office: 'Dirección General de Tecnologías de la Información y Comunicaciones',
  },
  {
    id: '100002',
    displayName: 'Juan Carlos Ramírez López',
    phone: '1022',
    fotoUrl: '',
    mail: 'juancarlos.ramirezlopez@emaildepruebas.com',
    jobTitle: 'Ingeniero de Software Senior',
    office: 'Subsecretaría de Innovación Digital y Gobierno Electrónico',
  },
  {
    id: '100003',
    displayName: 'Ana Lucía Fernández',
    phone: '1033',
    fotoUrl: '',
    mail: 'analucia.fernandez@emaildepruebas.com',
    jobTitle: 'Administradora de Bases de Datos',
    office: 'Coordinación de Infraestructura Tecnológica y Data Center',
  },
  {
    id: '100004',
    displayName: 'Luis Fernando Martínez Ríos',
    phone: '1044',
    fotoUrl: '',
    mail: 'luisfernando.martinezrios@emaildepruebas.com',
    jobTitle: 'Arquitecto de Soluciones Cloud',
    office: 'Gerencia de Transformación Digital y Servicios TI',
  },
  {
    id: '100005',
    displayName: 'Laura Valentina Sánchez',
    phone: '1055',
    fotoUrl: '',
    mail: 'laravalentina.sanchez@emaildepruebas.com',
    jobTitle: 'Scrum Master',
    office: 'Departamento de Metodologías Ágiles y Gestión de Proyectos',
  },
  {
    id: '100006',
    displayName: 'Carlos Andrés Torres Medina',
    phone: '1066',
    fotoUrl: '',
    mail: 'carlosandres.torresmedina@emaildepruebas.com',
    jobTitle: 'DevOps Engineer',
    office: 'Unidad de Automatización y Despliegue Continuo',
  },
  {
    id: '100007',
    displayName: 'Diana Patricia Herrera',
    phone: '1077',
    fotoUrl: '',
    mail: 'dianapatricia.herrera@emaildepruebas.com',
    jobTitle: 'UX/UI Designer',
    office: 'Laboratorio de Experiencia de Usuario y Accesibilidad Digital',
  },
  {
    id: '100008',
    displayName: 'Jorge Enrique Castro Jiménez',
    phone: '1088',
    fotoUrl: '',
    mail: 'jorgeenrique.castrojimenez@emaildepruebas.com',
    jobTitle: 'Especialista en Ciberseguridad',
    office: 'Centro de Respuesta a Incidentes Informáticos (CSIRT)',
  },
  {
    id: '100009',
    displayName: 'Paula Andrea Rojas',
    phone: '1099',
    fotoUrl: '',
    mail: 'paulaandrea.rojas@emaildepruebas.com',
    jobTitle: 'Product Owner',
    office: 'Oficina de Gestión de Productos y Servicios Digitales',
  },
  {
    id: '100010',
    displayName: 'Miguel Ángel Mendoza Salazar',
    phone: '1100',
    fotoUrl: '',
    mail: 'miguelangel.mendozasalazar@emaildepruebas.com',
    jobTitle: 'Ingeniero de Datos',
    office: 'Dirección de Analítica Avanzada e Inteligencia Artificial',
  },
  {
    id: '100011',
    displayName: 'Karen Sofía López',
    phone: '1111',
    fotoUrl: '',
    mail: 'karensofia.lopez@emaildepruebas.com',
    jobTitle: 'QA Tester Automatizador',
    office: 'Departamento de Calidad y Aseguramiento de Software',
  },
  {
    id: '100012',
    displayName: 'Andrés Felipe García',
    phone: '1122',
    fotoUrl: '',
    mail: 'andresfelipe.garcia@emaildepruebas.com',
    jobTitle: 'Desarrollador Frontend React',
    office: 'Unidad de Desarrollo de Aplicaciones Web y Móviles',
  },
  {
    id: '100013',
    displayName: 'Sofía Alejandra Ortiz Muñoz',
    phone: '1133',
    fotoUrl: '',
    mail: 'sofiaalejandra.ortizmunoz@emaildepruebas.com',
    jobTitle: 'Project Manager TI',
    office: 'Gerencia de Cartera de Proyectos Tecnológicos Estratégicos',
  },
  {
    id: '100014',
    displayName: 'Cristian David Vargas',
    phone: '1144',
    fotoUrl: '',
    mail: 'cristiandavid.vargas@emaildepruebas.com',
    jobTitle: 'Desarrollador Backend Node.js',
    office: 'Núcleo de Desarrollo de APIs y Microservicios',
  },
  {
    id: '100015',
    displayName: 'Valentina Parra',
    phone: '1155',
    fotoUrl: '',
    mail: 'valentina.parra@emaildepruebas.com',
    jobTitle: 'DBA Oracle/SQL Server',
    office: 'Departamento de Administración de Bases de Datos Corporativas',
  },
  {
    id: '100016',
    displayName: 'David Santiago Agudelo Cardona',
    phone: '1166',
    fotoUrl: '',
    mail: 'davidsantiago.agudelocardona@emaildepruebas.com',
    jobTitle: 'Arquitecto de Software',
    office: 'Dirección de Arquitectura Empresarial y Estandarización Tecnológica',
  },
  {
    id: '100017',
    displayName: 'Natalia Jiménez',
    phone: '1177',
    fotoUrl: '',
    mail: 'natalia.jimenez@emaildepruebas.com',
    jobTitle: 'Technical Writer',
    office: 'Unidad de Documentación Técnica y Gestión del Conocimiento',
  },
  {
    id: '100018',
    displayName: 'Julián Esteban Moreno',
    phone: '1188',
    fotoUrl: '',
    mail: 'julianesteban.moreno@emaildepruebas.com',
    jobTitle: 'Especialista en Redes y Comunicaciones',
    office: 'Coordinación de Infraestructura de Red y Telecomunicaciones',
  },
  {
    id: '100019',
    displayName: 'Camila Andrea Beltrán Ruiz',
    phone: '1199',
    fotoUrl: '',
    mail: 'camilaandrea.beltranruiz@emaildepruebas.com',
    jobTitle: 'Analista de Seguridad Informática',
    office: 'Centro de Monitoreo y Ciberdefensa (CERT- Gubernamental)',
  },
  {
    id: '100020',
    displayName: 'Felipe Restrepo',
    phone: '1200',
    fotoUrl: '',
    mail: 'felipe.restrepo@emaildepruebas.com',
    jobTitle: 'Soporte TI Nivel 3',
    office: 'Mesa de Ayuda y Soporte Técnico Especializado',
  },
  {
    id: '100021',
    displayName: 'Manuel Alejandro Peña',
    phone: '1211',
    fotoUrl: '',
    mail: 'manuelalejandro.pena@emaildepruebas.com',
    jobTitle: 'Especialista en ERP (SAP/Odoo)',
    office: 'Unidad de Sistemas de Planificación de Recursos Empresariales',
  },
  {
    id: '100022',
    displayName: 'Daniela Fernanda Lozano Pineda',
    phone: '1222',
    fotoUrl: '',
    mail: 'danielafernanda.lozanopineda@emaildepruebas.com',
    jobTitle: 'Business Intelligence Analyst',
    office: 'Dirección de Inteligencia de Negocios y Dashboard Corporativo',
  },
  {
    id: '100023',
    displayName: 'Óscar Iván Chacón',
    phone: '1233',
    fotoUrl: '',
    mail: 'oscarivan.chacon@emaildepruebas.com',
    jobTitle: 'Desarrollador FullStack',
    office: 'Unidad Nacional de Administracion de Sistemas Informaticos y Comunicacion',
  },
  {
    id: '100024',
    displayName: 'Gabriela Salazar',
    phone: '1244',
    fotoUrl: '',
    mail: 'gabriela.salazar@emaildepruebas.com',
    jobTitle: 'Cloud Architect (AWS/Azure)',
    office: 'Subdirección de Servicios en la Nube y Virtualización',
  },
  {
    id: '100025',
    displayName: 'Ricardo Andrés Téllez',
    phone: '1255',
    fotoUrl: '',
    mail: 'ricardoandres.tellez@emaildepruebas.com',
    jobTitle: 'Blockchain Developer',
    office: 'Laboratorio de Innovación y Tecnologías Emergentes',
  },
];

const contactos = ref<Contact[]>(lista);
onMounted(() => {
  console.log(contactos);
});
</script>
<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <h3>Contact List</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <contact-list></contact-list>
      </div>
    </div>
  </div>
</template>
