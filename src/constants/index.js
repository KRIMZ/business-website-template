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
  send, 
  shield, 
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Inicio",
  },
  {
    id: "features",
    title: "Quienes somos",
  },
  {
    id: "product",
    title: "Producto",
  },
  {
    id: "clients",
    title: "Clientes",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Soluciones Personalizadas",
    content:
      "Desarrollamos e integramos tecnología adaptada a las necesidades de tu empresa",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Seguridad y Confianza",
    content:
      "Protegemos tu informacion con estandares y tecnologia de vanguardia.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Resultados",
    content:
      "Impulsamos tu crecimiento con soluciones eficientes, seguras y adaptadas a tus necesidades.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Proyectos Completados",
    value: "120+",
  },
  {
    id: "stats-2",
    title: "Clientes Satisfechos",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transacciones",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Links Útiles",
    links: [
      {
        name: "Inicio",
        action: "anchor",
        target: "home",
      },
      {
        name: "Quienes somos",
        action: "anchor",
        target: "features",
      },
      {
        name: "Producto",
        action: "anchor",
        target: "product",
      },
      {
        name: "Terminos y servicios",
        action: "modal",
        target: "terms",
      },
    ],
  },
  {
    title: "Comunidad",
    links: [
      {
        name: "Ayuda",
        action: "modal",
        target: "help",
      },
      {
        name: "Comunidad",
        action: "anchor",
        target: "clients",
      },
      {
        name: "Sugerencias",
        action: "modal",
        target: "suggestions",
      },
      {
        name: "Noticias",
        action: "page",
        target: "noticias",
      },
    ],
  },
  {
    title: "Socios",
    links: [
      {
        name: "Nuestros socios",
        action: "modal",
        target: "partners",
      },
      {
        name: "Conviertete en socio",
        action: "modal",
        target: "partnerForm",
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

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];