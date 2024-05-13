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
    basic: "basic",
    parallax: "parallax",
  },
});


const specialPath = ['/', '/pages', '/blog', '/basic'];


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
    submenu : [
      {
        title : 'Basic',
        to : PATH.PORTFOLIO.basic
      },
      {
        title: 'Parallax',
        to : PATH.PORTFOLIO.parallax
      }
    ]
  }
]


export { PATH, navLinks, specialPath };
