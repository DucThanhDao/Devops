'use client';
import React, { FC, useState, useRef, useEffect, EventHandler } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { usePathname } from 'next/navigation';
import Dropdown from './Dropdown';
// import { LanguageSwitch } from './LanguageSwitch';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { getPublicUrl } from '@/common/util/util';
type PageProps = {
  isTextLight?: boolean;
};
export const Navbarr: FC<PageProps> = ({ isTextLight }) => {
  const [scroll, setScroll] = useState(0);
  const [screenWidth, setScreenWidth] = useState(1000);
  const pathname = usePathname();
  const mainRoute = pathname ? pathname.split('/')[1] : '';
  const [expanded, setExpanded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const t = useTranslations('navbar');

  const handleScroll: EventHandler<any> = () => {
    setScroll(window.scrollY);
  };

  const handleScreenWidth: EventHandler<any> = () => {
    setScreenWidth(window.innerWidth);
  };

  const handleCloseNavbar = () => {
    setExpanded(false);
  };

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavItemClick = () => {
    if (screenWidth <= 991) {
      setExpanded(false);
    }
  };

  const handleDropdownToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleServicesDropdownToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowServicesDropdown(!showServicesDropdown);
  };

  const handleMouseEnter = () => {
    if (screenWidth > 991) {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    }
    setShowDropdown(true);
    setShowServicesDropdown(false);
  };

  const handleServicesMouseEnter = () => {
    if (screenWidth > 991) {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    }
    setShowServicesDropdown(true);
    setShowDropdown(false);
  };

  const handleMouseLeave = () => {
    if (screenWidth > 991) {
      hoverTimeout.current = setTimeout(() => {
        // setIsHovering(false);
        setShowDropdown(false);
      }, 300);
    }
  };

  const handleServicesMouseLeave = () => {
    if (screenWidth > 991) {
      hoverTimeout.current = setTimeout(() => {
        setShowServicesDropdown(false);
      }, 300);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      servicesDropdownRef.current &&
      !servicesDropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
      setShowServicesDropdown(false);
    }
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScreenWidth);
    // document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScreenWidth);
      // document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Navbar
        expand="lg"
        fixed="top"
        className={`cta border-lg-none navbar-expand-lg navbar-light fixed-top align-items-start ${
          scroll >= 45 || isTextLight || screenWidth <= 991
            ? 'bg-light'
            : 'bg-transparent shadow-none'
        } px-2 ${expanded && screenWidth <= 991 ? 'h-100 ' : ''}`}
        expanded={expanded}
      >
        <div className="overflow-md-hidden w-100 px-0 px-lg-2 h-100 d-flex flex-column flex-lg-row">
          <div className="d-flex flex-row align-items-center w-100 w-lg-10">
            <Link href="/" className="px-2 px-lg-0">
              <img
                src={getPublicUrl('/assets/img/dayone-logo.svg')}
                alt="logo-company"
                height={'40'}
              ></img>
            </Link>
            <Link
              className="ms-auto d-inline-block d-lg-none"
              href="/contact-us"
              onClick={() => {
                handleCloseNavbar();
                setShowDropdown(false);
              }}
            >
              <span
                className={`btn text-uppercase custom-span rounded px-4 py-2  ${
                  scroll >= 45 || isTextLight || screenWidth <= 991
                    ? 'btn-primary text-white my-0'
                    : 'btn-white text-primary my-0'
                }`}
                style={{ fontSize: '14px !important' }}
              >
                {t('button')}
              </span>
            </Link>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="fas fa-bars fa-lg text-primary"
              onClick={handleNavbarToggle}
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <Nav className="me-2 ms-auto ">
              {/* SERVICES SECTION */}
              <Nav.Item
                className={`header-cta align-items-center position-relative ${
                  showServicesDropdown ? 'dropdown-active no-hover' : ''
                }`}
                onMouseEnter={screenWidth > 991 ? handleServicesMouseEnter : undefined}
                onMouseLeave={screenWidth > 991 ? handleServicesMouseLeave : undefined}
                onClick={screenWidth <= 991 ? handleServicesDropdownToggle : undefined}
              >
                <span
                  className={`nav-link text-uppercase nav-link px-0 px-lg-3 d-flex flex-row justify-content-between justify-content-lg-start align-items-center gap-1 ${
                    scroll >= 45 || isTextLight || screenWidth <= 991 ? '' : 'text-light'
                  } ${mainRoute == 'services' ? 'tab-active' : ''}`}
                >
                  {t('services')}{' '}
                  <i
                    className={`fas fa-angle-down ${
                      showServicesDropdown ? 'rotate-icon' : 'reset-icon'
                    }`}
                    onClick={handleServicesDropdownToggle}
                  ></i>
                </span>
                {showServicesDropdown && (
                  <div
                    className="dropdown-wrapper"
                    ref={servicesDropdownRef}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Dropdown handleNavItemClick={handleNavItemClick} type="services" />
                  </div>
                )}
              </Nav.Item>

              {/* INDUSTRIES SECTION */}
              <Nav.Item
                className={`header-cta align-items-center position-relative ${
                  showDropdown ? 'dropdown-active no-hover' : ''
                }`}
                onMouseEnter={screenWidth > 991 ? handleMouseEnter : undefined}
                onMouseLeave={screenWidth > 991 ? handleMouseLeave : undefined}
                onClick={screenWidth <= 991 ? handleDropdownToggle : undefined}
              >
                <span
                  className={`nav-link text-uppercase nav-link px-0 px-lg-3  d-flex flex-row justify-content-between justify-content-lg-start align-items-center gap-1  ${
                    scroll >= 45 || isTextLight || screenWidth <= 991 ? '' : 'text-light'
                  } ${mainRoute == 'industries' ? 'tab-active' : ''}`}
                >
                  {t('industries')}{' '}
                  <i
                    className={`fas fa-angle-down ${showDropdown ? 'rotate-icon' : 'reset-icon'}`}
                    onClick={handleDropdownToggle}
                  ></i>
                </span>
                {showDropdown && (
                  <div
                    className="dropdown-wrapper"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Dropdown handleNavItemClick={handleNavItemClick} type="industries" />
                  </div>
                )}
              </Nav.Item>
              <Nav.Item className="header-cta d-flex align-items-center position-relative">
                <Link
                  href="/portfolio"
                  className={`nav-link text-uppercase nav-link px-0 px-lg-3 ${
                    scroll >= 45 || isTextLight || screenWidth <= 991 ? '' : 'text-light'
                  } ${mainRoute == 'portfolio' ? 'tab-active' : ''}`}
                  onClick={() => setShowDropdown(false)}
                >
                  {t('ourWorks')}
                </Link>
              </Nav.Item>
              <Nav.Item className="header-cta d-flex align-items-center">
                <Link
                  href="/career"
                  className={`nav-link text-uppercase nav-link px-0 px-lg-3 ${
                    scroll >= 45 || isTextLight || screenWidth <= 991 ? '' : 'text-light'
                  } ${mainRoute == 'career' ? 'tab-active' : ''}`}
                  onClick={() => setShowDropdown(false)}
                >
                  {t('career')}
                </Link>
              </Nav.Item>
              <Nav.Item className="header-cta d-flex align-items-center">
                <Link
                  href="/about-us"
                  className={`nav-link text-uppercase nav-link px-0 px-lg-3 ${
                    scroll >= 45 || isTextLight || screenWidth <= 991 ? '' : 'text-light'
                  } ${mainRoute == 'about-us' ? 'tab-active' : ''}`}
                  onClick={() => setShowDropdown(false)}
                >
                  {t('aboutUs')}
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  className="d-none d-lg-inline-block"
                  href="/contact-us"
                  onClick={() => {
                    handleNavbarToggle();
                    setShowDropdown(false);
                  }}
                >
                  <span
                    className={`btn text-uppercase custom-span rounded px-4 py-2  ${
                      scroll >= 45 || isTextLight || screenWidth <= 991
                        ? 'btn-primary text-white my-0'
                        : 'btn-white text-primary my-0'
                    }`}
                    style={{ fontSize: '14px !important' }}
                  >
                    Contact Us
                  </span>
                </Link>
                {/* REMOVE CHOOSE LANGUAGE SECTION */}
                {/* <div className="d-block d-lg-none header-cta py-3 py-lg-0">
                  <LanguageSwitch
                    className={` ${
                      scroll >= 45 || isTextLight || screenWidth <= 991 ? '' : 'text-light'
                    } `}
                  />
                </div> */}
              </Nav.Item>
            </Nav>
            {/* REMOVE CHOOSE LANGUAGE SECTION */}
            {/* <LanguageSwitch
              className={`d-none d-lg-inline-block ${
                scroll >= 45 || isTextLight || screenWidth <= 991 ? '' : 'text-light'
              } `}
            /> */}
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};
