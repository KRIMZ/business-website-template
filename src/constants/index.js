import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  google,
  apple,
} from '../assets'

export const navLinks = [
  { id: 'home', title: 'Inicio' },
  { id: 'about', title: 'Nosotros' },
  { id: 'services', title: 'Servicios' },
  { id: 'products', title: 'Productos' },
  { id: 'providers', title: 'Proveedores' },
  { id: 'team', title: 'Equipo' },
  { id: 'contact', title: 'Contacto' },
];

export const services = [
  {
    id: 'service-1',
    icon: '🖥️',
    title: 'Desarrollo web corporativo',
    description: 'Plataformas, portales y sitios web seguros y escalables para operaciones empresariales.',
  },
  {
    id: 'service-2',
    icon: '🛡️',
    title: 'Ciberseguridad empresarial',
    description: 'Protección de datos, auditorías, detección de riesgos y respuesta ante incidentes.',
  },
  {
    id: 'service-3',
    icon: '💻',
    title: 'PCs empresariales',
    description: 'Configuración, suministro y soporte de equipos de alto rendimiento para grandes empresas.',
  },
  {
    id: 'service-4',
    icon: '📊',
    title: 'SAP y sistemas integrados',
    description: 'Implementación y mantenimiento de soluciones SAP para gestión financiera y operaciones.',
  },
  {
    id: 'service-5',
    icon: '🌐',
    title: 'Redes y conectividad',
    description: 'Diseño, instalación y administración de redes seguras y de alto desempeño.',
  },
  {
    id: 'service-6',
    icon: '⚙️',
    title: 'Automatización y soporte',
    description: 'Integración de procesos y soporte continuo para mantener tu operación sin interrupciones.',
  },
];

export const products = [
  {
    id: 'product-1',
    icon: '🖨️',
    name: 'Estación de trabajo premium',
    description: 'Equipos de alto rendimiento configurados para diseño, desarrollo y análisis de datos.',
  },
  {
    id: 'product-2',
    icon: '🖱️',
    name: 'Paquete de seguridad',
    description: 'Licencias y hardware para proteger redes y equipos con cifrado avanzado.',
  },
  {
    id: 'product-3',
    icon: '📦',
    name: 'Solución SAP completa',
    description: 'Distribución de módulos SAP listos para empresa, con integración y soporte técnico.',
  },
];

export const providerLogos = [
  { name: 'Airbnb', src: airbnb },
  { name: 'Binance', src: binance },
  { name: 'Coinbase', src: coinbase },
  { name: 'Dropbox', src: dropbox },
  { name: 'Google', src: google },
  { name: 'Apple', src: apple },
];

export const team = [
  {
    name: 'Alejandra Rivera',
    role: 'CEO & Estrategia TI',
    summary: 'Lidera proyectos de transformación digital y alianzas tecnológicas.',
    image: people01,
  },
  {
    name: 'Carlos Mendoza',
    role: 'Director de Ciberseguridad',
    summary: 'Especialista en protección de infraestructura y gestión de riesgos.',
    image: people02,
  },
  {
    name: 'Marcela Gómez',
    role: 'Arquitecta de Soluciones',
    summary: 'Diseña redes, SAP y plataformas que escalan sin sacrificar seguridad.',
    image: people03,
  },
];

export const footerLinks = [
  {
    title: "Empresa",
    links: [
      {
        name: "Quiénes somos",
        link: "#about",
      },
      {
        name: "Nuestros servicios",
        link: "#services",
      },
      {
        name: "Nuestro equipo",
        link: "#team",
      },
      {
        name: "Casos de éxito",
        link: "#",
      },
    ],
  },
  {
    title: "Contacto",
    links: [
      {
        name: "Email: hola@successys.com",
        link: "mailto:hola@successys.com",
      },
      {
        name: "Teléfono: +52 55 1234 5678",
        link: "tel:+525512345678",
      },
      {
        name: "CDMX, México",
        link: "#",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Términos y Condiciones",
        link: "#",
      },
      {
        name: "Política de Privacidad",
        link: "#",
      },
      {
        name: "Cookies",
        link: "#",
      },
      {
        name: "Aviso de Privacidad",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const ventasNavLinks = [
  { id: 'homesells', title: 'Inicio' },
  { id: 'hardware', title: 'Hardware' },
  { id: 'software', title: 'Software' },
  { id: 'licenses', title: 'Licencias' },
  { id: 'peripherals', title: 'Periféricos' },
  { id: 'technology', title: 'Tecnología' },
];

export const categoriasVenta = [
  { id: 'hardware', label: 'Hardware', icon: '🖥️' },
  { id: 'software', label: 'Software', icon: '💾' },
  { id: 'licenses', label: 'Licencias', icon: '📜' },
  { id: 'peripherals', label: 'Periféricos', icon: '⌨️' },
  { id: 'technology', label: 'Tecnología', icon: '📡' },
];