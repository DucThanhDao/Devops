"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from 'next/link';
import { getPublicUrl } from "../util/util";
export const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("footer");

  const [isCheckUnderstand, setIsCheckUnderstand] = useState(true);
  const [cookieHeight, setCookieHeight] = useState(0);
  const [hasShadow, setHasShadow] = useState(true);

  const industries = [
    {
      href: "/portfolio?industries=Artificial%20Intelligent",
      label: t("artificialIntelligent"),
    },
    // { href: "/portfolio?industries=Hospitality", label: t("hospitality") },
    // {
    //   href: "/portfolio?industries=Productivity",
    //   label: t("productivity"),
    // },
    { href: "/portfolio?industries=Education", label: t("education") },
    { href: "/portfolio?industries=Travel", label: t("travel") },
    { href: "/portfolio?industries=Blockchain", label: t("blockchain") },
    { href: "/portfolio?industries=Healthcare", label: t("healthcare") },
    {
      href: "/portfolio?industries=Communication%20services",
      label: t("communicationServices"),
    },
    // {
    //   href: "/portfolio?industries=Food%20%26%20Beverage",
    //   label: t("foodBeverage"),
    // },
    // { href: "/portfolio?industries=Real%20Estate", label: t("realEstate") },

    // {
    //   href: "/portfolio?industries=Consumer%20services",
    //   label: t("consumerServices"),
    // },
  ];

  const services = [
    { href: "/services/web-development", label: t("webDevelopment") },
    { href: "/services/app-development", label: t("appDevelopment") },
    {
      href: "/services/digital-transformation",
      label: t("digitalTransformation"),
    },
    { href: "/services/cyber-security", label: t("cyberSecurity") },
    { href: "/services/cloud-computing", label: t("cloudComputing") },
    { href: "/services/product-strategy", label: t("productStrategy") },
  ];

  const checkScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight + 1;
    const pageHeight = document.documentElement.scrollHeight;
    if (scrollPosition < pageHeight) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  }, []);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
  };

  const updateCookieHeight = useCallback(() => {
    if (ref.current && !isCheckUnderstand) {
      setCookieHeight(ref.current.offsetHeight);
    } else {
      setCookieHeight(0);
    }
  }, [isCheckUnderstand]);

  useEffect(() => {
    if (getCookie("cookie-consent") == "true") {
      setIsCheckUnderstand(true);
    } else {
      setIsCheckUnderstand(false);
      window.addEventListener("scroll", checkScroll);
    }
  }, []);

  useEffect(() => {
    updateCookieHeight();
    window.addEventListener("resize", updateCookieHeight);

    return () => {
      window.removeEventListener("resize", updateCookieHeight);
    };
  }, [updateCookieHeight]);

  const onClick = () => {
    document.cookie = "cookie-consent=true";
    ref.current?.setAttribute("class", `${ref.current?.classList} d-none`);
    setIsCheckUnderstand(true);
    window.removeEventListener("scroll", checkScroll);
  };

  return (
    <div>
      <footer className="app-footer">
        <div
          className="footer-navigation h-100 position-relative overflow-hidden"
          style={{ marginBottom: cookieHeight }}
        >
          {/*<img
            className="position-absolute  d-none d-md-block d-lg-block h-100"
            style={{
              left: 0,
              top: 0,
              zIndex: -1,
              objectFit: "cover",
              width: "100vw",
            }}
            src="/assets/img/footer-2.svg"
            alt="background-footer"
            loading="lazy"
          />*/}
          <svg 
            className="position-absolute d-none d-md-block d-lg-block h-100"
            style={{
              left: 0,
              top: 0,
              zIndex: -1,
              objectFit: "cover",
              width: "100vw",
              height: "100%"
            }}
            width="2865"
            height="800" 
            viewBox="0 0 2865 800"
            fill="none" 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path d="M-156.2 59.2L2865 0V800H-156.2V59.2Z" fill="url(#gradient1)"/>
              <path d="M0 82H2865V800H0V82Z" fill="url(#gradient2)"/>
            </g>
            
            <defs>
              <linearGradient id="gradient1" x1="0" y1="400" x2="2865" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#A8E7FD"/>
                <stop offset="0.845" stopColor="#A3E4FD"/>
                <stop offset="1" stopColor="#7BCDF8"/>
              </linearGradient>
              
              <linearGradient id="gradient2" x1="0" y1="400" x2="2865" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#006EDF"/>
                <stop offset="1" stopColor="#006EDF"/>
              </linearGradient>
              
              <clipPath id="clip0">
                <rect width="2865" height="800" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          {/*<img
            className="position-absolute d-block d-md-none d-lg-none h-100"
            style={{
              top: 0,
              left: 0,
              zIndex: -1,
              objectPosition: "top",
              objectFit: "fill",
            }}
            src="/assets/img/landing/background-footer-responsive-2.svg"
            alt="background-footer-responsive"
            loading="lazy"
          />*/}
          <svg 
            className="position-absolute d-block d-md-none d-lg-none h-100"
            style={{
              left: 0,
              top: 0,
              zIndex: -1,
              objectFit: "cover",
              width: "100vw",
              height: "100%"
            }}
            width="672"
            height="800"
            viewBox="0 0 672 800"
            fill="none" 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_mobile)">
              <path d="M-206 65L672 30V75.2H-206Z" fill="url(#paint0_linear_mobile)"/>
              <path d="M0 70H672V800H0V70Z" fill="url(#paint1_linear_mobile)"/>
            </g>
            
            <defs>
              <linearGradient id="paint0_linear_mobile" x1="0" y1="400" x2="672" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A8E7FD"/>
                <stop offset="0.845" stopColor="#A3E4FD"/>
                <stop offset="1" stopColor="#7BCDF8"/>
              </linearGradient>
              
              <linearGradient id="paint1_linear_mobile" x1="0" y1="400" x2="672" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#006EDF"/>
                <stop offset="1" stopColor="#006EDF"/>
              </linearGradient>
              
              <clipPath id="clip0_mobile">
                <rect width="672" height="800" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div className="container pb-3 pt-9 pt-md-7">
            <div className="row mb-3 mb-md-0 footer-logo">
              <Link href="/">
                <img
                  src={getPublicUrl("/assets/img/landing/dayone-white.svg")}
                  alt="dayone-white"
                  style={{
                    // maxWidth: "245.16px",
                    height: "auto",
                    width: "100%",
                  }}
                />
              </Link>
            </div>
            <div className="row border-bottom">
              <div className="footer-column custom-margin">
                <p className="h4 pb-2" style={{ fontSize: "24px" }}>
                  {t("company")}
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="pb-2" style={{ fontSize: "16px" }}>
                    <a className="text-white" href="/about-us">
                      {t("aboutUs")}
                    </a>
                  </li>
                  <li className="pb-2" style={{ fontSize: "16px" }}>
                    <a className="text-white" href="/career">
                      {t("career")}
                    </a>
                  </li>
                  <li className="pb-2" style={{ fontSize: "16px" }}>
                    <a className="text-white" href="/how-we-work">
                      {t("howWeWork")}
                    </a>
                  </li>
                  {/* <li className="pb-3">
                    <a className="text-white" href="/portfolio">
                      {t("ourworks")}
                    </a>
                  </li>
                  <li className="pb-3">
                    <a className="text-white" href="/#testimonials">
                      {t("testimonials")}
                    </a>
                  </li> */}
                  <li className="pb-3" style={{ fontSize: "16px" }}>
                    <a className="text-white" href="/contact-us">
                      {t("contact")}
                    </a>
                  </li>
                </ul>
                <div className="d-flex flex-row mb-4">
                  <span
                    className="list-inline-item my-1 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://github.com/dayoneteams",
                        "_blank",
                        "noopener noreferrer",
                      )
                    }
                  >
                    <div>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0Z"
                          fill="#231E1B"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.9755 8.19202C11.5719 8.19202 8 11.7639 8 16.1676C8 19.6905 10.2997 22.6752 13.4312 23.7516C13.8226 23.8006 13.9694 23.5559 13.9694 23.3602C13.9694 23.1645 13.9694 22.6752 13.9694 21.9902C11.7676 22.4795 11.2783 20.9137 11.2783 20.9137C10.9358 19.9841 10.3976 19.7394 10.3976 19.7394C9.66361 19.2501 10.4465 19.2501 10.4465 19.2501C11.2294 19.2991 11.6697 20.0819 11.6697 20.0819C12.4037 21.3052 13.5291 20.9627 13.9694 20.7669C14.0183 20.2287 14.263 19.8862 14.4587 19.6905C12.6972 19.4948 10.8379 18.8098 10.8379 15.7272C10.8379 14.8465 11.1315 14.1614 11.6697 13.5743C11.6208 13.4275 11.3272 12.5957 11.7676 11.5192C11.7676 11.5192 12.4526 11.3235 13.9694 12.351C14.6055 12.1553 15.2905 12.1064 15.9755 12.1064C16.6605 12.1064 17.3456 12.2042 17.9817 12.351C19.4985 11.3235 20.1835 11.5192 20.1835 11.5192C20.6239 12.5957 20.3303 13.4275 20.2813 13.6232C20.7706 14.1614 21.1131 14.8954 21.1131 15.7761C21.1131 18.8587 19.2538 19.4948 17.4924 19.6905C17.7859 19.9351 18.0306 20.4244 18.0306 21.1584C18.0306 22.2348 18.0306 23.0666 18.0306 23.3602C18.0306 23.5559 18.1774 23.8006 18.5688 23.7516C21.7492 22.6752 24 19.6905 24 16.1676C23.9511 11.7639 20.3792 8.19202 15.9755 8.19202Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </span>
                  <span
                    className="list-inline-item my-1 cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/dayoneteams",
                        "_blank",
                        "noopener noreferrer",
                      )
                    }
                  >
                    <div>
                      <svg
                        viewBox="0 0 64 64"
                        width={32}
                        height={32}
                        className="social-icon social-icon--linkedin "
                      >
                        <g>
                          <rect
                            width={64}
                            height={64}
                            rx={10}
                            ry={10}
                            fill="#007fb1"
                          />
                        </g>
                        <g>
                          <path
                            d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                  </span>
                </div>
              </div>
              <div className="footer-column custom-margin">
                <p className="h4 pb-2" style={{ fontSize: "24px" }}>
                  {t("industries")}
                </p>
                <ul className="list-unstyled">
                  {industries.map((industry, index) => (
                    <li
                      className="pb-2"
                      key={index}
                      style={{ fontSize: "16px" }}
                    >
                      <a className="text-white" href={industry.href}>
                        {industry.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a className="text-white fw-bold" href={"/portfolio"}>
                      View all
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column  custom-margin">
                <p className="h4 pb-2" style={{ fontSize: "24px" }}>
                  {t("ourServices")}
                </p>
                <ul className="list-unstyled">
                  {services.map((service, index) => (
                    <li
                      className="pb-2"
                      key={index}
                      style={{ fontSize: "16px" }}
                    >
                      <a className="text-white" href={service.href}>
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-column  custom-margin">
                <p className="h4 pb-2" style={{ fontSize: "24px" }}>
                  {t("Connect")}
                </p>
                <ul className="list-unstyled">
                  <li
                    className="pb-2 text-white fw-bold"
                    key={1}
                    style={{ fontSize: "16px" }}
                  >
                    Email
                  </li>
                  <li
                    className="pb-2 text-white"
                    style={{ fontSize: "16px" }}
                    key={2}
                  >
                    contact@dayoneteams.com
                  </li>
                  <li
                    className="pb-2 text-white fw-bold"
                    style={{ fontSize: "16px" }}
                    key={3}
                  >
                    {t("address")}
                  </li>
                  <li
                    className="pb-2 text-white"
                    style={{ fontSize: "16px" }}
                    key={4}
                  >
                    {t("addressDetail")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-3">
              {`${t("copyrightLeft")} 
                    ${new Date().getFullYear()} 
                    ${t("copyrightRight")}`}
            </div>
          </div>
        </div>
        <div
          className={`cookieConsent alert mb-0 col-lg-12 d-flex flex-wrap align-items-center fixed-bottom ${
            isCheckUnderstand && "d-none"
          } ${hasShadow && "custom-shadow"}`}
          ref={ref}
        >
          <div className="content">{t("cookieMessage")}</div>

          <button className="btn btn-sm btn-primary mb-0" onClick={onClick}>
            {t("understand")}
          </button>
        </div>
      </footer>
    </div>
  );
};
