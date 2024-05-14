const PATH = Object.freeze({
  LANDING: {
    title: "Landing",
    landing : "landing",
  },
  COMPANY: {
    title: "Company",
    company: "company",
  },
  PAGES: {
    title: "Pages",
    pages: "pages",
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


const specialPath = ['/', '/pages', '/blog', '/portfolio'];


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
    title : PATH.PAGES.title,
    to : PATH.PAGES.pages
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
