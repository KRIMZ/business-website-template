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
  { id: 'home', title: 'Inicio' },
  { id: 'hardware', title: 'Hardware' },
  { id: 'software', title: 'Software' },
  { id: 'licenses', title: 'Licencias' },
  { id: 'peripherals', title: 'Periféricos' },
  { id: 'technology', title: 'Tecnología' },
];

export const productosVenta = [
  // Hardware
  {
    id: 'hw-1',
    name: 'Monitor UltraWide 34"',
    category: 'hardware',
    price: 580,
    brand: 'LG',
    icon: '🖥️',
    popularity: 9,
    specs: ['3440x1440p', '100Hz', 'USB-C'],
    isRecommended: true,
  },
  {
    id: 'hw-2',
    name: 'PC Gamer RGB',
    category: 'hardware',
    price: 1200,
    brand: 'ASUS',
    icon: '🎮',
    popularity: 8,
    specs: ['RTX 4060', 'i7-13700K', '32GB RAM'],
    isRecommended: true,
  },
  {
    id: 'hw-3',
    name: 'Laptop ThinkPad T14',
    category: 'hardware',
    price: 950,
    brand: 'Lenovo',
    icon: '💻',
    popularity: 7,
    specs: ['i7-12Gen', '16GB RAM', '512GB SSD'],
  },
  {
    id: 'hw-4',
    name: 'Servidor HP ProLiant',
    category: 'hardware',
    price: 3500,
    brand: 'HP',
    icon: '⚙️',
    popularity: 6,
    specs: ['2x Xeon', '128GB RAM', 'Redundancia RAID'],
    isRecommended: true,
  },
  // Software
  {
    id: 'sw-1',
    name: 'Microsoft Office 365',
    category: 'software',
    price: 69,
    brand: 'Microsoft',
    icon: '📄',
    popularity: 10,
    specs: ['Cloud', '5 Dispositivos', '1TB OneDrive'],
    isRecommended: true,
  },
  {
    id: 'sw-2',
    name: 'Adobe Creative Cloud',
    category: 'software',
    price: 79,
    brand: 'Adobe',
    icon: '🎨',
    popularity: 9,
    specs: ['Photoshop', 'Illustrator', 'Premiere'],
  },
  {
    id: 'sw-3',
    name: 'JetBrains IntelliJ IDEA',
    category: 'software',
    price: 199,
    brand: 'JetBrains',
    icon: '💾',
    popularity: 8,
    specs: ['IDE Java', 'Kotlin', 'Python'],
  },
  {
    id: 'sw-4',
    name: 'AutoCAD 2024',
    category: 'software',
    price: 580,
    brand: 'Autodesk',
    icon: '📐',
    popularity: 7,
    specs: ['2D/3D', 'Cloud', 'Collab Tools'],
  },
  // Licencias
  {
    id: 'lic-1',
    name: 'Windows 11 Pro',
    category: 'licenses',
    price: 199,
    brand: 'Microsoft',
    icon: '🪟',
    popularity: 10,
    specs: ['Perpetua', 'Licencia Individual'],
    isRecommended: true,
  },
  {
    id: 'lic-2',
    name: 'Kaspersky Total Security',
    category: 'licenses',
    price: 89,
    brand: 'Kaspersky',
    icon: '🛡️',
    popularity: 8,
    specs: ['5 Dispositivos', 'Anual', 'VPN Incluido'],
  },
  {
    id: 'lic-3',
    name: 'SAP Business One',
    category: 'licenses',
    price: 2000,
    brand: 'SAP',
    icon: '📊',
    popularity: 7,
    specs: ['ERP', 'Soporte 24/7', 'Training'],
    isRecommended: true,
  },
  {
    id: 'lic-4',
    name: 'VMware vSphere',
    category: 'licenses',
    price: 1500,
    brand: 'VMware',
    icon: '☁️',
    popularity: 6,
    specs: ['Virtualización', 'Enterprise', 'HA'],
  },
  // Periféricos
  {
    id: 'per-1',
    name: 'Teclado Mecánico RGB',
    category: 'peripherals',
    price: 149,
    brand: 'Corsair',
    icon: '⌨️',
    popularity: 9,
    specs: ['Cherry MX', 'RGB', 'USB-C'],
    isRecommended: true,
  },
  {
    id: 'per-2',
    name: 'Mouse Logitech MX Master',
    category: 'peripherals',
    price: 99,
    brand: 'Logitech',
    icon: '🖱️',
    popularity: 8,
    specs: ['Inalámbrico', 'Multi-dispositivo', 'Carga USB'],
  },
  {
    id: 'per-3',
    name: 'Webcam Logitech 4K',
    category: 'peripherals',
    price: 199,
    brand: 'Logitech',
    icon: '📹',
    popularity: 7,
    specs: ['4K UHD', 'Auto Focus', 'Micrófono'],
  },
  {
    id: 'per-4',
    name: 'Hub USB-C 7 en 1',
    category: 'peripherals',
    price: 79,
    brand: 'Anker',
    icon: '🔌',
    popularity: 6,
    specs: ['7 Puertos', '100W PD', 'Aluminio'],
  },
  // Tecnología General
  {
    id: 'tech-1',
    name: 'Dispositivo Firewall Cisco',
    category: 'technology',
    price: 1800,
    brand: 'Cisco',
    icon: '🔒',
    popularity: 8,
    specs: ['Seguridad', 'Rendimiento', 'Enterprise'],
    isRecommended: true,
  },
  {
    id: 'tech-2',
    name: 'Switch PoE 48 Puertos',
    category: 'technology',
    price: 950,
    brand: 'Netgear',
    icon: '🔗',
    popularity: 7,
    specs: ['Gigabit', 'PoE', 'Managed'],
  },
  {
    id: 'tech-3',
    name: 'Router Wi-Fi 6E',
    category: 'technology',
    price: 350,
    brand: 'ASUS',
    icon: '📡',
    popularity: 9,
    specs: ['Wi-Fi 6E', 'Mesh', '12 Stream'],
  },
  {
    id: 'tech-4',
    name: 'NAS 8 Bahías Synology',
    category: 'technology',
    price: 1200,
    brand: 'Synology',
    icon: '💾',
    popularity: 8,
    specs: ['RAID', 'Backup', 'Snapshots'],
  },
];

export const categoriasVenta = [
  { id: 'hardware', label: 'Hardware', icon: '🖥️' },
  { id: 'software', label: 'Software', icon: '💾' },
  { id: 'licenses', label: 'Licencias', icon: '📜' },
  { id: 'peripherals', label: 'Periféricos', icon: '⌨️' },
  { id: 'technology', label: 'Tecnología', icon: '📡' },
];