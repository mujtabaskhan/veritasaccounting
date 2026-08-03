/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isNotHomeOrExpertise = pathname !== "/" && pathname !== "/expertise";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isMobileExpertiseOpen, setIsMobileExpertiseOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollPositionRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);
  const wasScrolledBeforeExpertiseRef = useRef<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileExpertiseOpen(false);
  };

  const toggleMobileExpertise = () => {
    setIsMobileExpertiseOpen(!isMobileExpertiseOpen);
  };

  const handleExpertiseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }

    setIsExpertiseOpen(true);
  };

  const handleExpertiseLeave = (e: React.MouseEvent) => {
    // Check where the mouse is moving to
    const relatedTarget = e.relatedTarget as HTMLElement;

    // If no related target (moving completely outside), close expertise
    if (!relatedTarget) {
      const delay = wasScrolledBeforeExpertiseRef.current ? 400 : 300;
      leaveTimeoutRef.current = setTimeout(() => {
        setIsExpertiseOpen(false);
      }, delay);
      return;
    }

    // Check if moving to expertise-related areas (keep open)
    const isMovingToExpertiseArea =
      relatedTarget.closest(".expertise-content") ||
      relatedTarget.closest('[href="/expertise"]');

    if (isMovingToExpertiseArea) {
      // Don't close if moving to expertise content or expertise link
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
        leaveTimeoutRef.current = null;
      }
      return;
    }

    // Check if moving to other nav links (close smoothly)
    const isMovingToOtherNavLink =
      relatedTarget.closest(".nav-link") &&
      !relatedTarget.closest('[href="/expertise"]');

    if (isMovingToOtherNavLink) {
      // Close when moving to other links, but with a delay for smoothness
      const delay = wasScrolledBeforeExpertiseRef.current ? 300 : 200;
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
      leaveTimeoutRef.current = setTimeout(() => {
        setIsExpertiseOpen(false);
      }, delay);
      return;
    }

    // Close expertise when moving away from navbar area
    // Use longer delay when scrolled to allow smoother transitions
    const delay = wasScrolledBeforeExpertiseRef.current ? 400 : 300;
    leaveTimeoutRef.current = setTimeout(() => {
      setIsExpertiseOpen(false);
    }, delay);
  };

  useEffect(() => {
    if (isExpertiseOpen) {
      // Store current scroll position BEFORE any changes
      const currentScroll = window.scrollY;
      scrollPositionRef.current = currentScroll;
      // Store whether we were scrolled before expertise opened
      wasScrolledBeforeExpertiseRef.current = isScrolled;

      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Apply styles immediately but sync with animation
      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScroll}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.transition = "none";

      // Prevent any smooth scrolling during the lock
      document.documentElement.style.scrollBehavior = "auto";
    } else {
      // Restore body scroll smoothly
      const scrollY = scrollPositionRef.current;

      // Use requestAnimationFrame for smoother restoration
      requestAnimationFrame(() => {
        // Remove fixed positioning
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        document.body.style.transition = "";
        document.documentElement.style.scrollBehavior = "";

        // Restore scroll position after layout is updated
        requestAnimationFrame(() => {
          window.scrollTo({
            top: scrollY,
            behavior: "auto",
          });

          // Reset the stored scroll state after scroll is restored
          // Use a small delay to ensure scroll handler runs first
          setTimeout(() => {
            wasScrolledBeforeExpertiseRef.current = false;
          }, 100);
        });
      });
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.transition = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, [isExpertiseOpen]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // If expertise is open, don't update isScrolled (preserve the state from before expertise opened)
      if (isExpertiseOpen) {
        // Keep the stored scroll state
        setIsScrolled(wasScrolledBeforeExpertiseRef.current);

        return;
      }

      // Disable scroll animations on screens below 1024px (max-lg)
      if (window.innerWidth < 1024) {
        const scrolled = window.scrollY > 50;
        setIsNavbarVisible(true);
        setIsCollapsed(false);
        setIsScrolled(scrolled);

        return;
      }

      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollYRef.current;
      const scrolled = currentScrollY > 50;

      setIsScrolled(scrolled);

      // If at top, show full navbar
      if (currentScrollY < 50) {
        setIsNavbarVisible(true);
        setIsCollapsed(false);
      } else {
        // Scrolling down - hide navbar
        if (scrollDifference > 2) {
          setIsNavbarVisible(false);
        }
        // Scrolling up - show collapsed navbar (more sensitive threshold)
        else if (scrollDifference < -1) {
          setIsNavbarVisible(true);
          setIsCollapsed(true);
        }
        // If scroll difference is very small or zero but we're scrolled, maintain current state
        else if (Math.abs(scrollDifference) <= 1 && currentScrollY > 50) {
          // Keep navbar visible if already visible, or show it if it was hidden
          if (!isNavbarVisible) {
            setIsNavbarVisible(true);
            setIsCollapsed(true);
          }
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    const handleResize = () => {
      // Reset navbar state on resize
      if (window.innerWidth < 1024) {
        setIsNavbarVisible(true);
        setIsCollapsed(false);
      }
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    handleScroll(); // Check initial scroll position
    lastScrollYRef.current = window.scrollY;

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isExpertiseOpen]);

  const expertiseItems = [
    { label: "Accounting", href: "/services#accounting" },
    { label: "Tax Services", href: "/services#tax" },
    { label: "Payroll Services", href: "/services#payroll" },
    { label: "Audit & Compliance Support", href: "/services#compliance" },
    { label: "Business Advisory", href: "/services#advisory" },
    { label: "Business Administration", href: "/services#administration" },
    { label: "CFO Services", href: "/services#cfo-services" },
  ];

  // Check if a nav link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Logo and social icons always visible
  const logoClassName =
    "transition-all duration-300 overflow-hidden w-auto opacity-100 pointer-events-auto";

  const socialLinksClassName =
    "max-lg:hidden flex gap-10 items-center transition-all duration-300 overflow-hidden w-auto opacity-100 pointer-events-auto";

  // No force hide classes needed
  const logoForceHideClass = "";
  const socialForceHideClass = "";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] max-lg:transition-none transition-transform duration-300 max-lg:z-[6] ${
          isNotHomeOrExpertise ? "max-lg:relative max-lg:bg-white" : ""
        } ${
          isNavbarVisible
            ? "translate-y-0"
            : "-translate-y-full max-lg:translate-y-0"
        }`}
      >
        <div
          className="backdrop-overlay"
          onClick={() => setIsExpertiseOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100vh",
            minHeight: "100vh",
            zIndex: 999,
            opacity: isExpertiseOpen ? 1 : 0,
            visibility: isExpertiseOpen ? "visible" : "hidden",
            pointerEvents: isExpertiseOpen ? "auto" : "none",
            background: isExpertiseOpen
              ? "linear-gradient(135deg, rgba(35, 32, 97, 0.25) 0%, rgba(35, 32, 97, 0.2) 100%)"
              : "transparent",
            backdropFilter: isExpertiseOpen
              ? "blur(30px) saturate(190%)"
              : "none",
            WebkitBackdropFilter: isExpertiseOpen
              ? "blur(30px) saturate(190%)"
              : "none",
            transition: isExpertiseOpen
              ? "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, visibility 0s linear 0.1s, backdrop-filter 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s"
              : "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s linear 0.4s, backdrop-filter 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: "translateZ(0)",
            willChange: "opacity, visibility, backdrop-filter",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
        <div
          className={`relative navbar-container ${
            isExpertiseOpen ? "navbar-expanded" : ""
          } ${isScrolled && !isExpertiseOpen ? "navbar-scrolled" : ""} ${
            isCollapsed ? "navbar-collapsed" : ""
          }`}
        >
          <div
            className={`expertise-bg ${
              isExpertiseOpen ? "expertise-bg-open" : "expertise-bg-closed"
            }`}
          />
          <div
            className={`max-w-7xl mx-auto py-14 max-sm:pb-8 px-10 max-sm:px-6 relative z-[200] ${
              isNotHomeOrExpertise ? "max-sm:px-4" : "max-sm:px-6"
            }`}
          >
            <div
              className={`flex items-center transition-all duration-300 max-lg:justify-between  ${
                isScrolled && !isExpertiseOpen
                  ? "justify-between"
                  : isScrolled && isExpertiseOpen
                  ? "justify-between"
                  : "justify-between"
              }`}
            >
              <Link
                href="/"
                className={`${logoClassName} ${logoForceHideClass}`.trim()}
              >
                <div className="relative w-[300px] h-[80px] max-md:w-[270px] max-md:h-[72px] max-lg:w-[250px] max-lg:h-[67px]">
                  <Image
                    src={isExpertiseOpen ? "/logo-white.png" : "/logo.png"}
                    alt="logo"
                    width={1000}
                    height={1000}
                    priority
                    className="w-full h-full object-contain transition-opacity duration-300"
                  />
                </div>
              </Link>

              <div
                className={`navbar-bg max-lg:hidden flex items-center gap-6 px-4 py-3 rounded-[50px] text-[15px] transition-all duration-300 border border-[#027C99] ${
                  isExpertiseOpen
                    ? "text-white border-white bg-white/10"
                    : isScrolled
                    ? "text-[#232061] bg-white/80"
                    : "text-[#232061] bg-[#FFFFFF4D]"
                }`}
                style={{
                  border: `1px soliid ${
                    isExpertiseOpen ? "#FFFFFF" : "#027C99"
                  }`,
                }}
              >
                <Link
                  href="/"
                  className={`nav-link relative group h-max px-3 py-1 hover:rounded-full flex items-center justify-center rounded-full ${
                    isActive("/")
                      ? isExpertiseOpen
                        ? "bg-white/20 text-white"
                        : "bg-[#027C99] text-white"
                      : isExpertiseOpen
                      ? "hover:bg-white/20 hover:text-white"
                      : "hover:bg-[#B8DDE5]"
                  }`}
                >
                  Home
                </Link>

                <div
                  className="relative"
                  onMouseEnter={handleExpertiseEnter}
                  onMouseLeave={handleExpertiseLeave}
                >
                  <Link
                    href="/expertise"
                    className={`nav-link relative group h-max px-3 py-1 hover:rounded-full flex items-center justify-center rounded-full ${
                      isActive("/expertise") || pathname.startsWith("/services")
                        ? isExpertiseOpen
                          ? "bg-white/20 text-white"
                          : "bg-[#027C99] text-white"
                        : isExpertiseOpen
                        ? "hover:bg-white/20 hover:text-white"
                        : "hover:bg-[#B8DDE5]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      Expertise{" "}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-mt-1"
                      >
                        <path
                          d="M10.5477 4.43302L11.4392 5.32537L6.58042 10.1858C6.50257 10.2641 6.40999 10.3263 6.30801 10.3687C6.20604 10.4112 6.09668 10.433 5.98622 10.433C5.87577 10.433 5.76641 10.4112 5.66443 10.3687C5.56246 10.3263 5.46988 10.2641 5.39202 10.1858L0.530762 5.32537L1.42227 4.43386L5.98496 8.99571L10.5477 4.43302Z"
                          fill={isExpertiseOpen ? "#FFFFFF" : "#232061"}
                        />
                      </svg>
                    </span>
                  </Link>
                </div>

                <Link
                  href="/careers"
                  className={`nav-link relative group h-max px-3 py-1 hover:rounded-full flex items-center justify-center rounded-full ${
                    isActive("/careers")
                      ? isExpertiseOpen
                        ? "bg-white/20 text-white"
                        : "bg-[#027C99] text-white"
                      : isExpertiseOpen
                      ? "hover:bg-white/20 hover:text-white"
                      : "hover:bg-[#B8DDE5]"
                  }`}
                >
                  Careers
                </Link>

                <Link
                  href="/team"
                  className={`nav-link relative group h-max px-3 py-1 hover:rounded-full flex items-center justify-center rounded-full ${
                    isActive("/team")
                      ? isExpertiseOpen
                        ? "bg-white/20 text-white"
                        : "bg-[#027C99] text-white"
                      : isExpertiseOpen
                      ? "hover:bg-white/20 hover:text-white"
                      : "hover:bg-[#B8DDE5]"
                  }`}
                >
                  Team
                </Link>

                <Link
                  href="/faq"
                  className={`nav-link relative group h-max px-3 py-1 hover:rounded-full flex items-center justify-center rounded-full ${
                    isActive("/faq")
                      ? isExpertiseOpen
                        ? "bg-white/20 text-white"
                        : "bg-[#027C99] text-white"
                      : isExpertiseOpen
                      ? "hover:bg-white/20 hover:text-white"
                      : "hover:bg-[#B8DDE5]"
                  }`}
                >
                  FAQ
                </Link>
              </div>

              <div
                className={`${socialLinksClassName} ${socialForceHideClass}`.trim()}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300 cursor-pointer"
                >
                  <path
                    d="M19.3333 10C21.2561 10 23.1002 10.7902 24.4598 12.1967C25.8195 13.6032 26.5833 15.5109 26.5833 17.5V26.25H21.75V17.5C21.75 16.837 21.4953 16.2011 21.0421 15.7322C20.5889 15.2634 19.9742 15 19.3333 15C18.6924 15 18.0777 15.2634 17.6245 15.7322C17.1712 16.2011 16.9166 16.837 16.9166 17.5V26.25H12.0833V17.5C12.0833 15.5109 12.8471 13.6032 14.2068 12.1967C15.5664 10.7902 17.4105 10 19.3333 10Z"
                    stroke={isExpertiseOpen ? "#FFFFFF" : "#232061"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.24996 11.25H2.41663V26.25H7.24996V11.25Z"
                    stroke={isExpertiseOpen ? "#FFFFFF" : "#232061"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.83329 7.5C6.16798 7.5 7.24996 6.38071 7.24996 5C7.24996 3.61929 6.16798 2.5 4.83329 2.5C3.4986 2.5 2.41663 3.61929 2.41663 5C2.41663 6.38071 3.4986 7.5 4.83329 7.5Z"
                    stroke={isExpertiseOpen ? "#FFFFFF" : "#232061"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-colors duration-300 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/veritas_accounting/",
                      "_blank",
                    )
                  }
                >
                  <path
                    d="M21.1458 7.85425H21.1579M8.45829 2.41675H20.5416C23.8783 2.41675 26.5833 5.12169 26.5833 8.45841V20.5417C26.5833 23.8785 23.8783 26.5834 20.5416 26.5834H8.45829C5.12157 26.5834 2.41663 23.8785 2.41663 20.5417V8.45841C2.41663 5.12169 5.12157 2.41675 8.45829 2.41675ZM19.3333 13.7388C19.4824 14.7445 19.3106 15.7715 18.8424 16.6739C18.3742 17.5763 17.6333 18.308 16.7253 18.7651C15.8172 19.2222 14.7881 19.3813 13.7844 19.2198C12.7807 19.0582 11.8534 18.5843 11.1346 17.8655C10.4157 17.1466 9.9418 16.2194 9.78029 15.2157C9.61878 14.212 9.77787 13.1829 10.2349 12.2748C10.692 11.3667 11.4238 10.6259 12.3261 10.1576C13.2285 9.6894 14.2556 9.51763 15.2612 9.66675C16.287 9.81886 17.2367 10.2968 17.9699 11.0301C18.7032 11.7634 19.1812 12.713 19.3333 13.7388Z"
                    stroke={isExpertiseOpen ? "#FFFFFF" : "#232061"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="max-lg:block hidden relative">
                <button
                  onClick={toggleMenu}
                  className="flex flex-col gap-1 py-2 px-4 z-50 relative border border-[#A6C9E2] rounded-[50px] bg-[#FFFFFF4D] cursor-pointer"
                  aria-label="Toggle menu"
                >
                  <span
                    className={`w-5 h-0.5 bg-[#232061] transition-all duration-300 origin-center ${
                      isMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                    }`}
                  />
                  <span
                    className={`w-5 h-0.5 bg-[#232061] transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`w-5 h-0.5 bg-[#232061] transition-all duration-300 origin-center ${
                      isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute right-0 top-full mt-2 bg-white rounded-3xl p-6 w-[280px] shadow-2xl z-50 transition-all duration-300 max-h-[420px] overflow-y-auto ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col gap-4 mb-10">
                    <Link
                      href="/"
                      onClick={closeMenu}
                      className={`text-center font-normal py-3 px-4 rounded-[35px] text-base ${
                        isActive("/")
                          ? "bg-[#027C99] text-white"
                          : "text-[#232061] bg-[#F6F6F6]"
                      }`}
                    >
                      Home
                    </Link>
                    <div className="flex flex-col">
                      <button
                        onClick={toggleMobileExpertise}
                        className={`text-center font-normal py-3 px-4 rounded-[35px] text-base flex items-center justify-center gap-2 ${
                          isActive("/expertise") ||
                          pathname.startsWith("/services")
                            ? "bg-[#027C99] text-white"
                            : "text-[#232061] bg-[#F6F6F6]"
                        }`}
                      >
                        Expertise
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isMobileExpertiseOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`transition-all duration-300 ${
                          isMobileExpertiseOpen
                            ? "max-h-96 opacity-100 overflow-y-auto mobile-expertise-dropdown"
                            : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        <div className="flex flex-col gap-2 pl-4 pt-2">
                          {expertiseItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMenu}
                              className="text-center text-[#232061] font-normal py-2 px-4 rounded-[25px] bg-[#E8E8E8] text-sm"
                            >
                              {item.label}
                            </Link>
                          ))}
                          <Link
                            href="/expertise"
                            onClick={closeMenu}
                            className="text-center font-medium py-2 px-4 rounded-[25px] bg-[#232061] text-white text-sm"
                          >
                            View More Services
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/careers"
                      onClick={closeMenu}
                      className={`text-center font-normal py-3 px-4 rounded-[35px] text-base ${
                        isActive("/careers")
                          ? "bg-[#027C99] text-white"
                          : "text-[#232061] bg-[#F6F6F6]"
                      }`}
                    >
                      Careers
                    </Link>
                    <Link
                      href="/team"
                      onClick={closeMenu}
                      className={`text-center font-normal py-3 px-4 rounded-[35px] text-base ${
                        isActive("/team")
                          ? "bg-[#027C99] text-white"
                          : "text-[#232061] bg-[#F6F6F6]"
                      }`}
                    >
                      Team
                    </Link>
                    <Link
                      href="/faq"
                      onClick={closeMenu}
                      className={`text-center font-normal py-3 px-4 rounded-[35px] text-base ${
                        isActive("/faq")
                          ? "bg-[#027C99] text-white"
                          : "text-[#232061] bg-[#F6F6F6]"
                      }`}
                    >
                      FAQ
                    </Link>
                  </div>

                  <div className="flex gap-6 items-center justify-center">
                    <Image
                      src="linkedin.svg"
                      alt="linkedin"
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                    <Image
                      src="instagram.svg"
                      alt="instagram"
                      width={20}
                      height={20}
                      className="cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/veritas_accounting/",
                          "_blank",
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {(isMounted || isExpertiseOpen) && (
            <div
              className={`expertise-content max-lg:hidden ${
                isExpertiseOpen ? "expertise-open" : "expertise-closed"
              } ${!isMounted ? "expertise-no-transition" : ""}`}
              onMouseEnter={handleExpertiseEnter}
              onMouseLeave={handleExpertiseLeave}
              style={
                !isExpertiseOpen
                  ? {
                      visibility: "hidden",
                      maxHeight: "0",
                      height: "0",
                      opacity: "0",
                    }
                  : undefined
              }
            >
              <div className="max-w-7xl mx-auto px-4 max-sm:px-10">
                <div className="border-t border-white/20 pt-8 pb-8">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {expertiseItems.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group/item dropdown-item"
                        data-index={index}
                      >
                        <div className="relative overflow-hidden">
                          <div className="relative h-14 flex items-center mb-3">
                            <span className="inline-block text-lg font-medium transition-all duration-500 ease-out text-white group-hover/item:scale-105">
                              {item.label}
                            </span>
                          </div>
                          <p className="text-sm text-white/60 mt-2 transition-all duration-500 ease-out group-hover/item:text-white/90">
                            Explore our {item.label.toLowerCase()} services
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="flex justify-center pt-4 border-t border-white/10">
                    <Link
                      href="/expertise"
                      className="view-more-btn group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105"
                    >
                      <span>View More Services</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <style jsx>{`
        /* iOS Safari sticky positioning fixes */
        @supports (-webkit-touch-callout: none) {
          /* iOS Safari specific fixes */
          div[class*="sticky"] {
            -webkit-transform: translateZ(0) !important;
            transform: translateZ(0) !important;
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
            will-change: transform !important;
            -webkit-perspective: 1000px;
            perspective: 1000px;
          }
        }

        .navbar-container {
          position: relative;
          z-index: 10000;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transition: box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.3s ease-in-out;
          will-change: box-shadow;
          overflow: visible;
          isolation: isolate;
          min-height: auto;
          height: auto;
        }

        .navbar-expanded {
          transform: translateZ(0);
        }

        .navbar-collapsed .navbar-bg {
          background: white;
        }

        /* When expertise is open, override collapsed styles */
        .navbar-expanded.navbar-collapsed .navbar-bg {
          background: rgba(255, 255, 255, 0.1) !important;
          color: white !important;
          border-color: white !important;
        }

        .navbar-expanded.navbar-collapsed .navbar-bg .nav-link {
          color: white !important;
        }

        .navbar-expanded.navbar-collapsed .navbar-bg .nav-link > span > span {
          color: white !important;
        }

        .expertise-bg {
          position: absolute;
          top: -20px;
          left: 0;
          right: 0;
          background-color: #232061;
          z-index: 10;
          clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          transition: clip-path 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            height 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: clip-path, height;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          height: 100%;
        }

        .expertise-bg-open {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          height: calc(100% + 500px);
        }

        .expertise-bg-closed {
          clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          height: 100%;
          transition: clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced dropdown content with smoother animations */
        .expertise-content {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          width: 100%;
          max-height: 0;
          height: 0;
          overflow: hidden;
          opacity: 0;
          transform: translate3d(0, -15px, 0);
          visibility: hidden;
          transition: max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.08s,
            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.08s,
            visibility 0s linear 0.6s;
          will-change: max-height, opacity, transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          pointer-events: none;
          z-index: 10001;
          background-color: transparent;
          margin: 0;
          padding: 0;
        }

        .expertise-content > div {
          background-color: transparent;
        }

        .expertise-open {
          max-height: 500px !important;
          height: auto !important;
          opacity: 1 !important;
          transform: translate3d(0, 0, 0) !important;
          pointer-events: auto !important;
          visibility: visible !important;
          transition: max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.08s,
            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.08s,
            visibility 0s linear 0s !important;
        }

        .expertise-closed {
          max-height: 0 !important;
          height: 0 !important;
          opacity: 0;
          transform: translate3d(0, -15px, 0);
          pointer-events: none;
          visibility: hidden;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .expertise-no-transition {
          transition: none !important;
        }

        .dropdown-item {
          opacity: 0;
        }
        .expertise-open .dropdown-item {
          opacity: 1;
        }

        /* Refined item animations with staggered timing */
        .dropdown-item > div {
          opacity: 0;
          transform: translate3d(0, 12px, 0);
          will-change: opacity, transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .expertise-open .dropdown-item[data-index="0"] > div {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.12s,
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.12s;
        }
        .expertise-open .dropdown-item[data-index="1"] > div {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.18s,
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.18s;
        }
        .expertise-open .dropdown-item[data-index="2"] > div {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.24s,
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.24s;
        }

        .dropdown-item p {
          opacity: 0;
          transform: translate3d(0, 12px, 0);
          will-change: opacity, transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .expertise-open .dropdown-item[data-index="0"] p {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.18s,
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.18s;
        }
        .expertise-open .dropdown-item[data-index="1"] p {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.24s,
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.24s;
        }
        .expertise-open .dropdown-item[data-index="2"] p {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s,
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }

        /* Apple-like dropdown item hover effects */
        .dropdown-item {
          position: relative;
          padding: 1.25rem 1rem;
          border-radius: 0.75rem;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }

        .dropdown-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .dropdown-item:hover::before {
          opacity: 1;
        }

        .dropdown-item:hover {
          transform: translateY(-1px) scale(1.01);
        }

        .dropdown-item:active {
          transform: translateY(0) scale(0.99);
          transition: all 0.15s ease-out;
        }

        /* Smooth text transitions */
        .dropdown-item span {
          display: inline-block;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(1);
        }

        .dropdown-item:hover span {
          filter: brightness(1.15);
        }

        .dropdown-item p {
          transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          filter: brightness(1);
        }

        .dropdown-item:hover p {
          filter: brightness(1.2);
        }

        /* Button animation delay when dropdown opens */
        .view-more-btn {
          opacity: 0;
          transform: translateY(10px);
        }

        .expertise-open .view-more-btn {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }

        .expertise-closed .view-more-btn {
          opacity: 0;
          transform: translateY(10px);
          animation: none;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .expertise-closed .dropdown-item > div,
        .expertise-closed .dropdown-item p {
          opacity: 0;
          transform: translate3d(0, 12px, 0);
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link {
          transition: color 0.25s ease-in-out,
            background-color 0.25s ease-in-out, transform 0.25s ease-in-out;
          will-change: transform, background-color, color;
          overflow: visible !important;
          position: relative;
          z-index: 1;
          color: inherit;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .navbar-expanded .nav-link {
          color: white !important;
        }

        .navbar-expanded .nav-link > span > span {
          color: white !important;
        }

        .nav-link > span {
          overflow: hidden !important;
          display: block;
          position: relative;
        }

        .nav-link > span > span {
          overflow: visible !important;
          white-space: nowrap;
          display: block;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          will-change: opacity, transform;
        }

        .nav-link > span > span:first-child,
        .nav-link > span > span:last-child {
          overflow: visible !important;
        }

        .nav-link:hover {
          transform: scale(1.03) translateZ(0);
          z-index: 10;
        }

        /* Ensure parent nav container doesn't clip */
        .navbar-container > div > div:first-of-type {
          overflow: visible !important;
        }

        /* Enhanced backdrop blur with blue tint for Apple-like effect */
        .backdrop-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(
            135deg,
            rgba(35, 32, 97, 0.2) 0%,
            rgba(35, 32, 97, 0.15) 100%
          );
          backdrop-filter: blur(30px) saturate(190%);
          -webkit-backdrop-filter: blur(30px) saturate(190%);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            visibility 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0s;
          transform: translateZ(0);
          will-change: opacity, visibility;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .backdrop-open {
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            visibility 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0s;
          z-index: 999;
        }

        .backdrop-closed {
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            visibility 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0s;
        }

        /* Mobile expertise dropdown scrollbar styling */
        .mobile-expertise-dropdown {
          scrollbar-width: thin;
          scrollbar-color: rgba(35, 32, 97, 0.3) transparent;
        }

        .mobile-expertise-dropdown::-webkit-scrollbar {
          width: 6px;
        }

        .mobile-expertise-dropdown::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }

        .mobile-expertise-dropdown::-webkit-scrollbar-thumb {
          background-color: rgba(35, 32, 97, 0.3);
          border-radius: 10px;
        }

        .mobile-expertise-dropdown::-webkit-scrollbar-thumb:hover {
          background-color: rgba(35, 32, 97, 0.5);
        }

        /* Force hide logo and social links when scrolled */
        .force-hide-logo {
          display: none !important;
          visibility: hidden !important;
          width: 0 !important;
          opacity: 0 !important;
          pointer-events: none !important;
          overflow: hidden !important;
        }

        .force-hide-social {
          display: none !important;
          visibility: hidden !important;
          width: 0 !important;
          opacity: 0 !important;
          pointer-events: none !important;
          overflow: hidden !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;
