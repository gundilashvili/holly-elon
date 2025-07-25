"use client";

import Link from "next/link";
import Image from "next/image";

import { useThemeContext } from "@/context//ThemeContext";

import { menuOneData as data } from "@/data/menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import pumpfunLogo from '@/../public/assets/images/logo/pump-fun.png';

export default function MenuOne() {
  const { toggleMobileMenu } = useThemeContext();
  const [showBox, setShowBox] = useState(false);
  const pathName = usePathname();
  const routePath = pathName == "/" ? pathName : pathName.replace(/^\/+/g, "");
  const [showModal, setShowModal] = useState(false);
  const videoId = "SWz1wbvLpHI";
  const CA = process.env.NEXT_PUBLIC_CA

  useEffect(() => {
    const closeSearch = () => {
      setShowBox(false);
    };

    window.addEventListener("click", closeSearch);

    return () => {
      window.removeEventListener("click", closeSearch);
    };
  }, []);

  const checkActiveMenu = (menu) => {
    if (menu.href == "#" && menu.subMenus && menu.subMenus.length > 0) {
      return menu.subMenus.find((subMenu) => subMenu.href == routePath)
        ? "active"
        : "";
    }

    return routePath == menu.href ? "active" : "";
  };

  const toggleSearchBox = (e) => {
    e.stopPropagation();
    setShowBox(!showBox);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="container nav-container position-absolute top-0 start-50 translate-middle-x lh-1">
      <div className="d-flex align-items-center justify-content-between pt-lg-0 pb-lg-0 pt-4 pb-4">
        <Link href="/" className="main-logo me-lg-5 flex-shrink-0">
          <Image src={data.logo} alt="img" />
        </Link>
        <nav className="navbar-nav m-auto d-lg-inline-block d-none">
          {data.menus && data.menus.length > 0 && (
            <ul className="main-menu d-flex">
              {data.menus.map((menu, index) => (
                <li
                  key={index}
                  className={`menu-item ${menu.subMenus &&
                    menu.subMenus.length > 0 &&
                    "menu-item-has-children"
                    }`}
                >
                  <Link
                    href={menu.href}
                    className={`menu-link ${checkActiveMenu(menu)}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.57373 12.3083H11.4266"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 10.3704C1 5.8656 1.51241 6.18 4.27061 3.728C5.47737 2.7968 7.35509 1 8.97662 1C10.5973 1 12.5126 2.788 13.7302 3.728C16.4884 6.18 17 5.8656 17 10.3704C17 17 15.3651 17 8.99999 17C2.63489 17 1 17 1 10.3704Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{menu.name}</span>
                    {menu.subMenus && menu.subMenus.length > 0 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="6"
                        viewBox="0 0 14 6"
                        fill="none"
                        className="mt-03"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.04953 2.42633C1.8325 1.56584 0.67034 1.2 0.113525 1.2V0C1.07338 0 2.51122 0.534159 3.84003 1.47367C4.86479 2.19822 5.87815 3.19989 6.61353 4.48107C7.3489 3.19989 8.36226 2.19822 9.38702 1.47367C10.7158 0.534159 12.1537 0 13.1135 0V1.2C12.5567 1.2 11.3946 1.56584 10.1775 2.42633C9.03311 3.23547 7.92033 4.42834 7.30175 6H6.61353L6.61353 6L6.61352 6H5.9253C5.30672 4.42834 4.19394 3.23547 3.04953 2.42633Z"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      ""
                    )}
                  </Link>
                  {menu.subMenus && menu.subMenus.length > 0 && (
                    <ul className="sub-menu">
                      {menu.subMenus.map((subMenu, key) => (
                        <li
                          key={key}
                          className={`sub-menu--item ${subMenu.subMenus &&
                            subMenu.subMenus.length > 0 &&
                            "menu-item menu-item-has-children"
                            }`}
                        >
                          <Link
                            href={subMenu.href}
                            className={`sub-menu--link ${routePath == subMenu.href ? "active" : ""
                              }`}
                          >
                            {subMenu.name}
                          </Link>
                          {subMenu.subMenus && subMenu.subMenus.length > 0 && (
                            <ul className="sub-menu">
                              {subMenu.subMenus.map((subMenuItem, i) => (
                                <li key={i} className="sub-menu--item">
                                  <Link
                                    href={subMenuItem.href}
                                    className={`sub-menu--link ${routePath == subMenuItem.href
                                      ? "active"
                                      : ""
                                      }`}
                                  >
                                    {subMenuItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="nav-right-part nav-right-part-desktop d-inline-flex align-item-center ps-md-5 ps-3">

          {!!CA && 2 < 1 ? (
            <button
              className="hl-btn big-btn lh-1 trans-btn fs-18 radius-20 fw-medium flex-shrink-0 text-uppercase btn-inactive"
              onClick={(e) => {
                e.preventDefault()
                const CA = process.env.NEXT_PUBLIC_CA;
                if (CA) {
                  window.open(`https://pump.fun/coin/${CA}`, '_blank');
                }
              }}
            >
              <Image
                src={pumpfunLogo}
                alt="Pump.fun Logo"
                width={24}
                height={24}
                style={{ marginRight: '8px' }}
              />
              <span>Buy on Pump.fun</span>
            </button>

          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="hl-btn big-btn lh-1 btn-base fs-18 fw-bold radius-20 flex-shrink-0 text-uppercase"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="15"
                viewBox="0 0 13 15"
                fill="none"
              >
                <path
                  d="M1 2.66967C1 1.90998 1 1.53013 1.16686 1.31807C1.31227 1.13326 1.53485 1.01765 1.77687 1.00119C2.05461 0.982329 2.39036 1.18772 3.06203 1.59855L10.9592 6.42893C11.542 6.78532 11.8335 6.96359 11.934 7.19025C12.022 7.38826 12.022 7.61173 11.934 7.80974C11.8335 8.0364 11.542 8.21467 10.9592 8.57106L3.06203 13.4014C2.39036 13.8123 2.05461 14.0177 1.77687 13.9988C1.53485 13.9824 1.31227 13.8667 1.16686 13.6819C1 13.4699 1 13.0901 1 12.3304V2.66967Z"
                  fill="currentColor"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>WATCH TRAILER</span>
            </button>
          )}
          <button
            id="navigation-button"
            className="menu-button menu menu_btn d-lg-none border-0 bg-transparent"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M0 0H16V1.77778H0V0ZM0 6.22222H10.6667V8H0V6.22222ZM0 12.4444H16V14.2222H0V12.4444Z"
                fill="#fff"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            minHeight: "100vh",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "800px",
              aspectRatio: "16 / 9",
              backgroundColor: "#000",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 0 20px rgba(255,255,255,0.3)"
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: 24,
                cursor: "pointer"
              }}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>

  );
}
