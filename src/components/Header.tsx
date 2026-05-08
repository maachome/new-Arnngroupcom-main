import { ChevronDown, Menu } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const arnnLogo = 'https://res.cloudinary.com/djnxf36jq/image/upload/v1772000146/arnn_omu8nl.png';
const arnnLogoScrolled = "https://res.cloudinary.com/djnxf36jq/image/upload/v1777382900/white_font_arnngroup_logo_xmhwev.png";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] =
    useState(false);
  const isServicePage =
    location.pathname.startsWith("/services/");
  const isAboutOrContactPage =
    location.pathname === "/about-us" || location.pathname === "/contact";
  const activeServiceSlug = isServicePage
    ? location.pathname.replace("/services/", "").split("/")[0]
    : "";

  // Close the mobile sheet whenever the route changes.
  // This prevents the Radix Dialog overlay from getting "stuck" after navigation.
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const handleMobileNav = useCallback(
    (to: string) => (e: React.MouseEvent) => {
      // Close first, then navigate. Prevents Radix Dialog from getting stuck
      // when navigation interrupts the close/unmount animation.
      e.preventDefault();
      setIsMobileMenuOpen(false);
      setIsMobileServicesOpen(false);
      window.setTimeout(() => navigate(to), 0);
    },
    [navigate],
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state
      setIsScrolled(isServicePage || isAboutOrContactPage ? currentScrollY > 0 : currentScrollY > 50);

      // Determine scroll direction
      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100
      ) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [isAboutOrContactPage, isServicePage, lastScrollY]);

  // Check if we're on contact page or about-us page at top of scroll
  const isContactPageAtTop = (location.pathname === "/contact" || location.pathname === "/about-us") && !isScrolled;
  const isAboutPageAtTop = location.pathname === "/about-us" && !isScrolled;
  const serviceHeaderBase = isScrolled
    ? "bg-[#2d3e5f] text-white shadow-lg"
    : isAboutPageAtTop
      ? "bg-transparent text-white"
      : isAboutOrContactPage
      ? "bg-transparent text-black"
      : "bg-transparent text-white";
  const serviceHeaderLink = isAboutPageAtTop
    ? "text-white font-normal tracking-[0.18em] [text-shadow:0_1px_10px_rgba(0,0,0,0.28)] hover:text-white transition-colors"
    : isAboutOrContactPage && !isScrolled
    ? "text-black font-normal tracking-[0.18em] hover:text-black transition-colors"
    : "text-white font-normal tracking-[0.18em] [text-shadow:0_1px_10px_rgba(0,0,0,0.28)] hover:text-white transition-colors";
  const serviceHeaderActiveBorder = "border-[#b78a2f]";
  const serviceDropdownShell = "bg-[#2d3e5f] rounded-lg shadow-xl border border-white/10 overflow-hidden";
  const serviceDropdownItem = "group block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0";
  const serviceDropdownItemActive = "bg-white/10";
  const serviceMobileSheet = "w-full bg-[#2d3e5f] text-white border-l border-white/10";
  const serviceMobileItem = "px-4 py-3 text-sm tracking-wide hover:bg-white/10 hover:text-white transition-colors rounded-lg";
  const serviceMobileActive = "bg-white/10 text-white";
  const serviceMobileSubItem = "px-4 py-2 text-sm tracking-wide hover:bg-white/10 hover:text-white transition-colors rounded-lg";
  const useCollapsedHeader = isServicePage || isAboutOrContactPage;
  const isCollapsedHeader = useCollapsedHeader && isScrolled && !isVisible;
  const currentLogo = isCollapsedHeader
    ? arnnLogo
    : isAboutPageAtTop
      ? arnnLogoScrolled
    : isServicePage || isScrolled
      ? arnnLogoScrolled
      : arnnLogo;

  return (
    <header
      className={`fixed left-0 right-0 z-50 px-8 flex-shrink-0 transition-all duration-500 ${isCollapsedHeader ? "top-0 h-7 py-0" : isVisible ? "top-0 py-3" : "-top-32 py-3"
        } ${isServicePage || isAboutOrContactPage
          ? serviceHeaderBase
          : isScrolled
            ? "bg-[#2d3e5f] text-white shadow-lg"
            : `bg-transparent ${location.pathname === "/" || isContactPageAtTop ? "text-gray-900" : "text-white"}`
        }`}
    >
      <div className={`max-w-[1400px] mx-auto flex items-center ${isCollapsedHeader ? "relative h-full justify-center items-end" : "justify-between"} ${isScrolled && !isCollapsedHeader ? "min-h-[60px]" : ""}`}>
        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center gap-3 hover:opacity-80 transition-opacity ${isCollapsedHeader ? "absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 h-10 w-10 justify-center rounded-full" : ""}`}
          style={
            isCollapsedHeader
              ? {
                  background: "#ffffff",
                  boxShadow:
                    "0 18px 40px rgba(15, 23, 42, 0.22), 0 8px 18px rgba(183, 138, 47, 0.22), 0 2px 6px rgba(255, 255, 255, 0.65) inset",
                }
              : undefined
          }
        >
          <img
            src={currentLogo}
            alt="ARNN GROUP"
            className="site-logo"
            style={
              isCollapsedHeader
                ? { height: "24px", width: "auto" }
                : isScrolled
                  ? { height: "60px", width: "auto" }
                  : undefined
            }
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile/tablet */}
        {!isCollapsedHeader && (
          <nav className={`hidden lg:flex items-center gap-8 mr-[0px] mb-[0px] ml-[0px] ${isScrolled ? "mt-0 lg:mt-0" : "lg:-mt-8 mt-[-60px]"}`}>
            <Link
              to="/"
            className={`${isServicePage ? "text-xl" : "text-xl"} hover:opacity-80 transition-opacity ${isServicePage || isAboutOrContactPage ? serviceHeaderLink : "tracking-[0.16em]"} ${location.pathname === "/"
              ? `border-b-2 ${isServicePage ? serviceHeaderActiveBorder : isScrolled ? "border-white" : "border-gray-900"}`
              : ""
              }`}
            >
              HOME
            </Link>

            <Link
              to="/about-us"
            className={`${isServicePage ? "text-xl" : "text-xl"} hover:opacity-80 transition-opacity ${isServicePage || isAboutOrContactPage ? serviceHeaderLink : "tracking-[0.16em]"} ${location.pathname === "/about-us"
              ? `border-b-2 ${isServicePage ? serviceHeaderActiveBorder : isScrolled || location.pathname !== "/about-us" ? "border-white" : "border-gray-900"}`
              : ""
              }`}
            >
              ABOUT US
            </Link>

            {/* Our Businesses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 ${isServicePage ? "text-xl" : "text-xl"} hover:opacity-80 transition-opacity ${isServicePage || isAboutOrContactPage ? serviceHeaderLink : "tracking-[0.16em]"} ${isServicePage
                  ? `border-b-2 ${serviceHeaderActiveBorder}`
                  : ""
                  }`}
              >
                OUR BUSINESSES
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className={isServicePage ? serviceDropdownShell : "bg-[#2d3e5f] rounded-lg shadow-xl border border-white/10 overflow-hidden"}>
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        onClick={() => setIsServicesOpen(false)}
                        className={isServicePage ? `${serviceDropdownItem} ${activeServiceSlug === service.slug ? serviceDropdownItemActive : ""}` : "block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"}
                      >
                        {isServicePage ? (
                          <div className="flex items-center justify-between gap-4">
                            <div className={`font-semibold tracking-[0.01em] transition-colors ${activeServiceSlug === service.slug ? "text-white" : "text-white"}`}>
                              {service.title}
                            </div>
                            <span className={`h-2 w-2 rounded-full bg-white/70 transition-opacity ${activeServiceSlug === service.slug ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                          </div>
                        ) : (
                          <div className="font-semibold">
                            {service.title}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`${isServicePage ? "text-xl" : "text-xl"} hover:opacity-80 transition-opacity ${isServicePage || isAboutOrContactPage ? serviceHeaderLink : "tracking-[0.16em]"} ${location.pathname === "/contact"
                ? `border-b-2 ${isServicePage ? serviceHeaderActiveBorder : isScrolled || location.pathname !== "/contact" ? "border-white" : "border-gray-900"}`
                : ""
                }`}
            >
              CONTACT
            </Link>
          </nav>
        )}

        {/* Mobile/Tablet Burger Menu - Visible on mobile/tablet only */}
        <Sheet
          key={location.pathname}
          open={isMobileMenuOpen}
          onOpenChange={(open) => {
            setIsMobileMenuOpen(open);
            if (!open) setIsMobileServicesOpen(false);
          }}
        >
          <SheetTrigger asChild>
            <button
              className={`lg:hidden p-2 hover:opacity-80 transition-opacity ${isCollapsedHeader ? "invisible" : ""}`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className={isServicePage ? serviceMobileSheet : "w-full bg-[#2d3e5f] text-white border-l border-white/10"}
          >
            <SheetHeader>
              <SheetTitle className={`${isServicePage ? "text-white" : "text-white"} text-left`}>
                <img
                  src={currentLogo}
                  alt="ARNN GROUP"
                  className="h-16 w-auto"
                />
              </SheetTitle>
              <SheetDescription className="sr-only">
                Navigation menu
              </SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-1 mt-8">
              <SheetClose asChild>
                <Link
                  to="/"
                  onClick={handleMobileNav("/")}
                  className={`${isServicePage ? serviceMobileItem : "px-4 py-3 text-xl tracking-wide hover:bg-white/10 transition-colors rounded-lg"} ${location.pathname === "/" ? isServicePage ? serviceMobileActive : "bg-white/10" : ""
                    }`}
                >
                  HOME
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  to="/about-us"
                  onClick={handleMobileNav("/about-us")}
                  className={`${isServicePage ? serviceMobileItem : "px-4 py-3 text-xl tracking-wide hover:bg-white/10 transition-colors rounded-lg"} ${location.pathname === "/about-us"
                    ? isServicePage ? serviceMobileActive : "bg-white/10"
                    : ""
                    }`}
                >
                  ABOUT US
                </Link>
              </SheetClose>

              {/* Mobile Our Businesses Accordion */}
              <div className="flex flex-col">
                <button
                  onClick={() =>
                    setIsMobileServicesOpen(
                      !isMobileServicesOpen,
                    )
                  }
                  className={`${isServicePage ? `flex items-center justify-between ${serviceMobileItem}` : "flex items-center justify-between px-4 py-3 text-xl tracking-wide hover:bg-white/10 transition-colors rounded-lg"} ${isServicePage ? serviceMobileActive : ""
                    }`}
                >
                  OUR BUSINESSES
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile Business Categories Submenu */}
                {isMobileServicesOpen && (
                  <div className="flex flex-col ml-4 mt-1">
                    {servicesData.map((service) => (
                      <SheetClose asChild key={service.id}>
                        <Link
                          to={`/services/${service.slug}`}
                          onClick={handleMobileNav(
                            `/services/${service.slug}`,
                          )}
                          className={isServicePage ? `${serviceMobileSubItem} ${activeServiceSlug === service.slug ? serviceMobileActive : ""}` : "px-4 py-2 text-xl tracking-wide hover:bg-white/10 transition-colors rounded-lg"}
                        >
                          {service.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                )}
              </div>

              <SheetClose asChild>
                <Link
                  to="/contact"
                  onClick={handleMobileNav("/contact")}
                  className={`${isServicePage ? serviceMobileItem : "px-4 py-3 text-xl tracking-wide hover:bg-white/10 transition-colors rounded-lg"} ${location.pathname === "/contact"
                    ? isServicePage ? serviceMobileActive : "bg-white/10"
                    : ""
                    }`}
                >
                  CONTACT
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
