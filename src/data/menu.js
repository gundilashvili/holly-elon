import logo from "@/../public/assets/images/logo.png";

const menuOneData = {
  logo: logo,
  href: "/",
  btnText: "Buy Now",
  menus: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Trailers",
      href: "trailers",
    },
    {
      name: "Movies",
      href: "movie-list",
    },
    {
      name: "Shorts",
      href: "shorts",
    },
  ],
};

const menuTwoData = {
  primaryMenus: [
  ],
};

export { menuOneData, menuTwoData };
