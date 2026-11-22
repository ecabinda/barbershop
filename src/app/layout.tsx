import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS_INFO } from "@/data/barbershop-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://styleplace.pt"),
  title: "Style Place Barbershop | Barbearia de Excelência em Caldas da Rainha",
  description:
    "Barbearia de referência em Caldas da Rainha, classificada com 5.0 estrelas no Google (1.134 avaliações). Cortes de precisão, tratamento de barba com toalha quente e serviço personalizado.",
  keywords: [
    "Barbearia Caldas da Rainha",
    "Barbeiro Caldas da Rainha",
    "Corte de cabelo masculino Caldas da Rainha",
    "Barba Caldas da Rainha",
    "Style Place Barbershop",
    "Clara Barbershop Caldas",
    "Melhor barbearia Caldas da Rainha",
  ],
  authors: [{ name: "Style Place Barbershop" }],
  creator: "Style Place Barbershop",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://styleplace.pt",
    siteName: "Style Place Barbershop",
    title: "Style Place Barbershop | Caldas da Rainha",
    description:
      "O teu estilo, a nossa assinatura. Experiência de excelência, corte de cabelo e barba em Caldas da Rainha. Avaliação 5.0 no Google com mais de 1.130 clientes satisfeitos.",
    images: [
      {
        url: "/images/storefront.png",
        width: 1200,
        height: 630,
        alt: "Style Place Barbershop Caldas da Rainha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Style Place Barbershop | Caldas da Rainha",
    description: "Barbearia de topo em Caldas da Rainha. 5.0 estrelas no Google (1.134 avaliações).",
    images: ["/images/storefront.png"],
  },
  alternates: {
    canonical: "https://styleplace.pt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: BUSINESS_INFO.name,
    image: "https://styleplace.pt/images/storefront.png",
    "@id": "https://styleplace.pt",
    url: BUSINESS_INFO.website,
    telephone: BUSINESS_INFO.phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua de Vitorino Fróis, n.º 31, Loja 17",
      addressLocality: "Caldas da Rainha",
      postalCode: "2500-256",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.4047222,
      longitude: -9.1388889,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "1134",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <html lang="pt-PT" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-ivory antialiased selection:bg-gold selection:text-background min-h-screen">
        {children}
      </body>
    </html>
  );
}
