import HomeOne from "@/components/en/homes/home-one";
import Wrapper from "@/layouts/Wrapper_en";

export const metadata = {
  title: "Moviit Madrid - Apartment Rentals in Madrid",
  description: "At Moviit Madrid, we offer you the best service to find your ideal apartment in the Spanish capital. Discover our wide range of rentals in Madrid, tailored to your needs and budget.",
  keywords: "real estate in Madrid, apartment rentals in Madrid, find apartment in Madrid, apartments for rent in Madrid, cheap apartments Madrid, rentals in Madrid, moving to Madrid, properties in Madrid, Moviit Madrid",
  meta: [
    { name: "keywords", content: "Real Estate, Madrid, Find apartment" },
    { name: "description", content: "At Moviit we find your ideal apartment in Madrid" },
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
  )
}

export default index