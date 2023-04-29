const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Horizon",
    path: "/horizon",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Activities",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "2018-2019",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "2019-2020",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "2020-2021",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Committee",
    path: "/",
    newTab: false,
  },
];
export default menuData;
