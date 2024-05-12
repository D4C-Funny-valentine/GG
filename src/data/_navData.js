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

const default_navlinks = [
  "landing",
  "company",
  "pages",
  "blog",
  "portfolio",
];

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

export { PATH, default_navlinks, dropdown_navlinks, navLinks };
