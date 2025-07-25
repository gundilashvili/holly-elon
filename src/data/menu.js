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
      name: "Movies",
      href: "#",
      subMenus: [ 
        {
          name: "Trailers",
          href: "trailers",
        },
        {
          name: "Movie List",
          href: "movie-list",
        }, 
      ],
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
