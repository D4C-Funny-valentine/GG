const PATH = Object.freeze({
  LANDING: {
    title: "Landing",
    startup: "startup",
    marketing: "marketing",
  },
  COMPANY: {
    title: "Company",
    about: "about",
  },
  PAGES: {
    title: "Pages",
    carrer: "carrer",
  },
  BLOG: {
    title: "Blog",
    reach_view: "reach_view",
  },
  PORTFOLIO: {
    title: "Portfolio",
    basic: "basic",
    parallax: "parallax",
  },
});

const default_navlinks = [
  "landing",
  "company",
  "pages",
  "blog",
  "portfolio",
];

const dropdown_navlinks = [
  {
    title: PATH.LANDING.title,
    submenu: [
      {
        to: PATH.LANDING.startup,
        title: "Start Up",
      },
      {
        to: PATH.LANDING.marketing,
        title: "Marketing",
      },
    ],
  },
  {
    title: PATH.COMPANY.title,
    submenu: [
      {
        to: PATH.COMPANY.about,
        title: "About",
      },
    ],
  },
  {
    title: PATH.PAGES.title,
    submenu: [
      {
        to: PATH.PAGES.carrer,
        title: "Carrer",
      },
    ],
  },
  {
    title: PATH.BLOG.title,
    submenu: [
      {
        to: PATH.BLOG.reach_view,
        title: "Reach View",
      },
    ],
  },
  {
    title: PATH.PORTFOLIO.title,
    submenu: [
      {
        to: PATH.PORTFOLIO.basic,
        title: "Basic",
      },
      {
        to: PATH.PORTFOLIO.parallax,
        title: "Parallax",
      },
    ],
  },
];

export { PATH, default_navlinks, dropdown_navlinks };
