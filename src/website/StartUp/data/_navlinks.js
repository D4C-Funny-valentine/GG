import ROUTES from "@config/_routes";

const navLinks = [
  {
    title : 'Landing',
    to: ROUTES.STARTUP.base
  },
  {
    title : 'Company',
    to: ROUTES.STARTUP.company
  },
  {
    title : "Carrer",
    to : ROUTES.STARTUP.carrer
  },
  {
    title : "Blog",
    to: ROUTES.STARTUP.blog
  },
  {
    title : "Portfolio",
    to : ROUTES.STARTUP.portfolio
  }
]

const specialPath = [ROUTES.STARTUP.base, ROUTES.STARTUP.carrer, ROUTES.STARTUP.blog, ROUTES.STARTUP.portfolio]

export { navLinks, specialPath };
