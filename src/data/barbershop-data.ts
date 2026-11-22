export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  indicativePrice?: string;
  iconName: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface BarberItem {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  languages: string[];
  specialties: string[];
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: "espaço" | "equipa" | "trabalhos";
  caption: string;
}

export const BUSINESS_INFO = {
  name: "Style Place Barbershop",
  tagline: "O Teu Estilo. A Nossa Assinatura.",
  subtagline:
    "Mais do que um corte. Uma experiência de cuidado, detalhe e confiança no coração das Caldas da Rainha.",
  address: {
    street: "Rua de Vitorino Fróis, n.º 31, Loja 17",
    postalCode: "2500-256",
    city: "Caldas da Rainha",
    country: "Portugal",
    full: "Rua de Vitorino Fróis, n.º 31, Loja 17, 2500-256 Caldas da Rainha, Portugal",
  },
  phone: "+351 925 194 001",
  phoneRaw: "351925194001",
  email: "contacto@styleplace.pt",
  website: "https://styleplace.pt",
  googleRating: 5.0,
  googleReviewCount: 1134,
  googleMapsUrl:
    "https://maps.google.com/?q=Style+Place+Barbershop+Rua+de+Vitorino+Frois+31+Loja+17+Caldas+da+Rainha",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.457813735165!2d-9.1388889!3d39.4047222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18a562efad2791%3A0x64b86e0c65377f72!2sR.+de+Vitorino+Fr%C3%B3is+31%2C+2500-256+Caldas+da+Rainha!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt",
  freshaUrl: "https://www.fresha.com",
  schedule: [
    { day: "Segunda-feira", hours: "10:00 – 20:00", status: "open" },
    { day: "Terça-feira", hours: "10:00 – 20:00", status: "open" },
    { day: "Quarta-feira", hours: "10:00 – 20:00", status: "open" },
    { day: "Quinta-feira", hours: "10:00 – 20:00", status: "open" },
    { day: "Sexta-feira", hours: "10:00 – 20:00", status: "open" },
    { day: "Sábado", hours: "10:00 – 16:00", status: "open" },
    { day: "Domingo", hours: "Encerrado", status: "closed" },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "corte-cabelo",
    title: "Corte de Cabelo Personalizado",
    subtitle: "Precisão & Visagismo",
    description:
      "Consulta detalhada de estilo, corte com técnicas modernas de tesoura e máquina, lavagem refrescante e styling final com produtos de alta gama.",
    duration: "40 - 50 min",
    indicativePrice: "Consulte na marcação",
    iconName: "Scissors",
    features: [
      "Análise de formato de rosto e textura",
      "Lavagem com massagem capilar",
      "Finalização com pomadas premium",
    ],
  },
  {
    id: "tratamento-barba",
    title: "Tratamento & Aparar de Barba",
    subtitle: "Ritual Tradicional",
    description:
      "Aparar e alinhamento milimétrico dos contornos com navalha clássica, aplicação de toalha quente aromática e hidratação com óleos essenciais.",
    duration: "30 - 40 min",
    indicativePrice: "Consulte na marcação",
    iconName: "Sparkles",
    features: [
      "Toalha quente com óleos essenciais",
      "Definição perfeita dos contornos",
      "Bálsamo hidratante para pele e barba",
    ],
  },
  {
    id: "combo-signature",
    title: "Corte + Barba Signature",
    subtitle: "A Experiência Completa",
    description:
      "O serviço completo de renovação pessoal da Style Place: corte sob medida, ritual clássico de barba, toalha quente e cuidados de pele e cabelo.",
    duration: "60 - 75 min",
    indicativePrice: "Consulte na marcação",
    iconName: "Crown",
    features: [
      "Experiência completa e relaxante",
      "Cuidado capilar e facial integrado",
      "Atendimento exclusivo e detalhado",
    ],
  },
  {
    id: "acabamentos-detalhes",
    title: "Acabamentos & Contornos",
    subtitle: "Manutenção & Detalhe",
    description:
      "Serviço rápido para manter o corte impecável: limpeza de pescoço, definição das costeletas e têmporas, e revitalização de contornos.",
    duration: "20 - 25 min",
    indicativePrice: "Consulte na marcação",
    iconName: "Flame",
    features: [
      "Ideal entre cortes completos",
      "Acabamento limpo à navalha",
      "Aplicação de loção pós-barba",
    ],
  },
];

export const BARBERS: BarberItem[] = [
  {
    id: "clara",
    name: "Clara",
    role: "Especialista em Corte & Visagismo",
    description:
      "Altamente referenciada pelos clientes pela sua simpatia, precisão impecável nos cortes e comunicação fluente em Inglês e Português.",
    image: "/images/barber-clara.png",
    languages: ["Português", "English"],
    specialties: ["Cortes Clássicos & Modernos", "Texturização", "Fade de Precisão"],
  },
  {
    id: "senior-barber",
    name: "Barbeiro Style Place",
    role: "Master Barber & Beard Stylist",
    description:
      "Mestre na arte do barbear tradicional, navalha clássica e styling masculino contemporâneo com foco no conforto e confiança do cliente.",
    image: "/images/barber-chair.png",
    languages: ["Português"],
    specialties: ["Ritual da Toalha Quente", "Modelagem de Barba", "Corte Masculino"],
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Andrea Vassalli",
    role: "Cliente Verificado no Google",
    rating: 5,
    date: "Avaliação Google",
    text: "Espaço muito acolhedor, equipa de excelência, profissionalismo exemplar e uma atenção incrível a cada detalhe do cliente. Recomendo vivamente a todos nas Caldas da Rainha!",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Strontium Dog",
    role: "Cliente Internacional no Google",
    rating: 5,
    date: "Avaliação Google",
    text: "Clara gave an outstanding haircut. Great attention to detail and fluent English communication. Top notch barbershop in Caldas da Rainha, without a doubt!",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Jose Matos",
    role: "Cliente Verificado no Google",
    rating: 5,
    date: "Avaliação Google",
    text: "Profissionalismo, simpatia e qualidade excecional. A Clara e a equipa elevam a fasquia da barbearia. Saio sempre com a máxima confiança no visual.",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Cliente Regular",
    role: "Cliente Local em Caldas da Rainha",
    rating: 5,
    date: "Avaliação Google",
    text: "Ambiente moderno e limpo com iluminação fantástica. Pontualidade rigorosa e atendimento muito simpático. O melhor espaço de grooming da cidade.",
    verified: true,
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: "gal-1",
    src: "/images/storefront.png",
    alt: "Fachada da Style Place Barbershop na Loja 17 em Caldas da Rainha com poste tradicional de barbearia",
    category: "espaço",
    caption: "A nossa entrada na Rua de Vitorino Fróis — Loja 17, Caldas da Rainha",
  },
  {
    id: "gal-2",
    src: "/images/interior.png",
    alt: "Interior moderno da barbearia com iluminação hexagonal de estúdio e cadeiras ergonómicas",
    category: "espaço",
    caption: "Design interior moderno, estações completas e iluminação de precisão",
  },
  {
    id: "gal-3",
    src: "/images/barber-clara.png",
    alt: "Clara, barbeira e cabeleireira especialista na Style Place Barbershop",
    category: "equipa",
    caption: "Clara — reconhecida pelo profissionalismo e atenção a cada cliente",
  },
  {
    id: "gal-4",
    src: "/images/barber-chair.png",
    alt: "Profissional da Style Place pronto para o atendimento na cadeira de barbearia",
    category: "equipa",
    caption: "Dedicação, hospitalidade e paixão pelo detalhe masculino",
  },
  {
    id: "gal-5",
    src: "/images/haircut-side.png",
    alt: "Corte de cabelo com textura e acabamento lateral personalizado",
    category: "trabalhos",
    caption: "Textura natural, volume e alinhamento de perfil impecável",
  },
  {
    id: "gal-6",
    src: "/images/haircut-back.png",
    alt: "Acabamento posterior de corte de cabelo masculino com graduação perfeita",
    category: "trabalhos",
    caption: "Graduação posterior suave e manutenção da linha natural de cabelo",
  },
];
