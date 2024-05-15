const PATH = Object.freeze({
  LANDING: {
    title: "Landing",
    landing : "landing",
  },
  COMPANY: {
    title: "Company",
    company: "company",
  },
  CARRER: {
    title: "Carrer",
    carrer: "carrer",
  },
  BLOG: {
    title: "Blog",
    blog: "blog",
  },
  PORTFOLIO: {
    title: "Portfolio",
    portfolio: "portfolio",
  },
});


const specialPath = ['', '/carrer', '/blog', '/portfolio'];


const navLinks = [
  {
    title : PATH.LANDING.title,
    to: PATH.LANDING.landing
  },
  {
    title : PATH.COMPANY.title,
    to: PATH.COMPANY.company
  },
  {
    title : PATH.CARRER.title,
    to : PATH.CARRER.carrer
  },
  {
    title : PATH.BLOG.title,
    to: PATH.BLOG.blog
  },
  {
    title : PATH.PORTFOLIO.title,
    to : PATH.PORTFOLIO.portfolio
  }
]


export { PATH, navLinks, specialPath };
