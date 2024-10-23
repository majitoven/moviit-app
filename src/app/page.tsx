import HomeOne from "@/components/homes/home-one";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Moviit Madrid - Alquiler de Apartamentos en Madrid",
  description: "En Moviit Madrid, te ofrecemos el mejor servicio para encontrar tu apartamento ideal en la capital española. Descubre nuestra amplia oferta de alquileres en Madrid, ajustados a tus necesidades y presupuesto.",
  keywords: "inmobiliaria en Madrid, alquiler de apartamentos en Madrid, buscar piso en Madrid, pisos en alquiler Madrid, apartamentos baratos Madrid, alquileres Madrid, mudanza a Madrid, inmuebles en Madrid, moviit Madrid",
  meta: [
    { name: "keywords", content: "Inmobiliaria, Madrid, Buscar piso" },
    { name: "description", content: "En Moviit encontramos tu apartamento ideal en Madrid" },
    { property: "og:site_name", content: "Moviit Madrid" },
    { property: "og:url", content: "https://www.moviitmadrid.com" },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Moviit Madrid" },
    { property: "og:image", content: "/images/assets/ogg.png" },
    { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
    { name: "theme-color", content: "#0D1A1C" },
    { name: "msapplication-navbutton-color", content: "#0D1A1C" },
    { name: "apple-mobile-web-app-status-bar-style", content: "#0D1A1C" },
    { rel: "canonical", href: "https://www.moviitmadrid.com" }, // Canonical tag here
  ],
};

const index = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default index;
