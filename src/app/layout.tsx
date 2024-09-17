'use client'
import "../styles/index.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const isDev = process.env.NODE_ENV === 'development';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Moviit Madrid",
    "url": "https://www.moviitmadrid.com",
    "logo": "https://www.moviitmadrid.com/images/logo.png",
    "sameAs": [
      "https://www.instagram.com/moviitt/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madrid",
      "addressCountry": "ES"
    },
    "description": "En Moviit encontramos tu apartamento ideal en Madrid."
  };

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="keywords" content="Inmobiliaria, Madrid, Buscar piso" />
        <meta name="description" content="En Moviit encontramos tu apartamento ideal en Madrid" />
        <meta property="og:site_name" content="Moviit Madrid" />
        <meta property="og:url" content="https://www.moviitmadrid.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Moviit Madrid" />
        <meta property="og:image" content="/images/assets/ogg.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0D1A1C" />
        <meta name="msapplication-navbutton-color" content="#0D1A1C" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0D1A1C" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200..700&display=swap" rel="stylesheet" />

        {/* Inject structured data using dangerouslySetInnerHTML */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="main-page-wrapper">
          <Provider store={store}>
            {children}
          </Provider>
        </div>
      </body>
    </html>
  )
}
