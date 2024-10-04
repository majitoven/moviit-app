/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.moviitmadrid.com', // El dominio de tu sitio web
  generateRobotsTxt: true, // Opcional: genera un archivo robots.txt automáticamente
  sitemapSize: 7000, // Ajusta el tamaño si tu sitio tiene muchas páginas
  changefreq: 'weekly',
  priority: 0.7,
};
