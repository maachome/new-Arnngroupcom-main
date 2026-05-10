import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { servicesData } from "../data/servicesData";

interface BusinessDivision {
  number: string;
  title: string;
  heading: string;
  description: string;
  image: string;
  slug?: string; // Optional slug for service page link
}

const serviceOverviewImageBySlug = new Map(
  servicesData.map((service) => [service.slug, service.overview.image]),
);

const divisions: BusinessDivision[] = [
  {
    number: "1",
    title: "ECONOMIC EMPOWERMENT",
    heading: "Economic Empowerment",
    description:
      "Empowering communities through sustainable business development and financial inclusion initiatives.",
    image: serviceOverviewImageBySlug.get("economic-empowerment") || "",
    slug: "economic-empowerment",
  },
  {
    number: "2",
    title: "REAL ESTATE DEVELOPMENT",
    heading: "Real Estate Development",
    description:
      "Creating innovative and sustainable property solutions that transform communities and elevate living standards.",
    image: serviceOverviewImageBySlug.get("real-estate-development") || "",
    slug: "real-estate-development",
  },
  {
    number: "3",
    title: "FINTECH, CRYPTO & BLOCKCHAIN INNOVATION",
    heading: "Fintech, Crypto & Blockchain Innovation",
    description:
      "Delivering cutting-edge technology solutions that drive digital transformation and innovation.",
    image: serviceOverviewImageBySlug.get("ict") || "",
    slug: "ict",
  },
  {
    number: "4",
    title: "AGRO-AQUACULTURE",
    heading: "Agro-Aquaculture",
    description:
      "Pioneering sustainable farming and aquaculture practices for food security and environmental stewardship.",
    image: serviceOverviewImageBySlug.get("agro-aquaculture") || "",
    slug: "agro-aquaculture",
  },
  {
    number: "5",
    title: "FASHION INDUSTRIES",
    heading: "Fashion Industries",
    description:
      "Creating contemporary fashion and textile solutions that blend tradition with modern design excellence.",
    image: serviceOverviewImageBySlug.get("fashion-industries") || "",
    slug: "fashion-industries",
  },
  {
    number: "6",
    title: "EMPOWERING GLOBAL TALENT",
    heading: "Empowering Global Talent",
    description:
      "Connecting exceptional talent with global opportunities through strategic workforce development programs.",
    image: serviceOverviewImageBySlug.get("empowering-global-talent") || "",
    slug: "empowering-global-talent",
  },
  {
    number: "7",
    title: "HEALTHCARE",
    heading: "Healthcare",
    description:
      "Equipping Healthcare Facilities with world-class Medical Devices and Equipment.",
    image: serviceOverviewImageBySlug.get("healthcare-access") || "",
    slug: "healthcare-access",
  },
  {
    number: "8",
    title: "AGRIFUTURE GLOBAL",
    heading: "AgriFuture Global",
    description:
      "Revolutionizing agriculture through innovative technology and sustainable farming solutions worldwide.",
    image: serviceOverviewImageBySlug.get("food-safety") || "",
    slug: "food-safety",
  },
  {
    number: "9",
    title: "FURNITURE AND FURNISHING SECTORS",
    heading: "Furniture & Furnishing",
    description:
      "Designing and manufacturing premium furniture solutions that combine functionality with aesthetic excellence.",
    image: serviceOverviewImageBySlug.get("luxury-furniture") || "",
    slug: "luxury-furniture",
  },
  {
    number: "10",
    title: "F&B SEGMENTS",
    heading: "Food & Beverage",
    description:
      "Delivering exceptional culinary experiences and innovative food service solutions across diverse markets.",
    image: serviceOverviewImageBySlug.get("fb-segments") || "",
    slug: "fb-segments",
  },
];

export function BusinessSection() {
  const navigate = useNavigate();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);
  const [showContent, setShowContent] = useState<number | null>(
    null,
  );
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(7);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState<
    number | null
  >(null); // Absolute index of expanded card on mobile
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const totalDivisions = divisions.length; // 10
  const maxIndex = totalDivisions - visibleCount; // Dynamic based on screen size
  const autoPlayInterval = 4000; // 4 seconds

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0,
      );
    };
    checkTouchDevice();

    // Cleanup hover timeout on unmount
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Responsive visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3); // Tablet
      } else {
        setVisibleCount(7); // Desktop
      }
    };

    // Set initial value
    updateVisibleCount();

    // Add resize listener
    window.addEventListener("resize", updateVisibleCount);
    return () =>
      window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const timer = setTimeout(() => {
        setShowContent(hoveredIndex);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // Keep previous content briefly so the outgoing animation stays smooth.
      const timer = setTimeout(() => {
        setShowContent(null);
      }, 220);
      return () => clearTimeout(timer);
    }
  }, [hoveredIndex]);

  // Auto-play functionality - loops back to beginning
  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      setCurrentPosition((prev) => {
        // Wrap to beginning when reaching the end
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, maxIndex, autoPlayInterval]);

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentPosition((prev) => {
      // Wrap to end when going back from beginning
      if (prev === 0) return maxIndex;
      return prev - 1;
    });
    // Reset expanded card when navigating
    if (isTouchDevice) {
      setExpandedCardIndex(null);
    }
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentPosition((prev) => {
      // Wrap to beginning when going forward from end
      if (prev >= maxIndex) return 0;
      return prev + 1;
    });
    // Reset expanded card when navigating
    if (isTouchDevice) {
      setExpandedCardIndex(null);
    }
  };

  // Mouse drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    // Don't start dragging on touch devices - they use touch events
    if (isTouchDevice) return;

    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isTouchDevice) return;
    const offset = e.clientX - dragStartX;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Determine direction and move if dragged enough
    const threshold = 100; // pixels
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragOffset(0);
  };

  const handleSectionMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
    setIsPaused(false);
  };

  // Touch drag functionality for mobile
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isTouchDevice) return;
    setIsDragging(true);
    setTouchStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isTouchDevice) return;
    const offset = e.touches[0].clientX - touchStartX;
    setDragOffset(offset);
    // Reset expanded card when dragging on mobile
    if (Math.abs(offset) > 10) {
      setExpandedCardIndex(null);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging || !isTouchDevice) return;
    setIsDragging(false);

    // Determine direction and move if dragged enough
    const threshold = 50; // pixels (smaller threshold for touch)
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragOffset(0);
  };

  // Wheel scroll functionality with throttling
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let isScrolling = false;
    const handleWheel = (e: WheelEvent) => {
      // Only handle vertical scroll to move horizontally
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();

        if (isScrolling) return;
        isScrolling = true;

        if (e.deltaY > 0) {
          // Scrolling down = move right (wrap to beginning at end)
          setCurrentPosition((prev) =>
            prev >= maxIndex ? 0 : prev + 1,
          );
        } else {
          // Scrolling up = move left (wrap to end at beginning)
          setCurrentPosition((prev) =>
            prev === 0 ? maxIndex : prev - 1,
          );
        }

        // Throttle scroll events
        setTimeout(() => {
          isScrolling = false;
        }, 600);
      }
    };

    section.addEventListener("wheel", handleWheel, {
      passive: false,
    });
    return () =>
      section.removeEventListener("wheel", handleWheel);
  }, []);

  // Calculate the translate value
  const slideWidth = 100 / visibleCount; // Each slide takes this % of viewport
  const translateX = -(currentPosition * slideWidth);
  const carouselHeight = "60vh";

  // Get the actual progress for the progress indicator (0 to totalDivisions-1)
  const progressIndex = currentPosition;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: carouselHeight }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleSectionMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Arrows - Bottom Right */}
      <div className="absolute bottom-0 right-4 md:right-6 lg:right-8 translate-y-1/2 z-20 flex gap-2 md:gap-3 lg:gap-4">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="bg-[#2d3e5f] border-2 border-white/30 rounded-lg md:rounded-xl p-2 md:p-3 lg:p-4 transition-all duration-300 hover:bg-[#3d4e6f] hover:border-white/50 hover:scale-105 group"
          aria-label="Previous slides"
        >
          <ArrowUp 
            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:-translate-x-0.5 rotate-[-90deg] text-white"
          />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="bg-[#2d3e5f] border-2 border-white/30 rounded-lg md:rounded-xl p-2 md:p-3 lg:p-4 transition-all duration-300 hover:bg-[#3d4e6f] hover:border-white/50 hover:scale-105 group"
          aria-label="Next slides"
        >
          <ArrowUp 
            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:translate-x-0.5 rotate-90 text-white"
          />
        </button>
      </div>

      {/* Overflow wrapper to clip the visible area */}
      <div className="h-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex h-full"
          style={{
            transform: `translateX(calc(${translateX}% + ${dragOffset}px))`,
            transition: isDragging
              ? "none"
              : "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {divisions.map((division, index) => {
            // Calculate visible range
            const startVisible = currentPosition;
            const endVisible = currentPosition + visibleCount;
            const isVisible =
              index >= startVisible && index < endVisible;
            // Calculate the local index relative to visible divisions
            const localIndex = index - currentPosition;
            const isExpandedCard =
              (isVisible && showContent === localIndex) ||
              (isTouchDevice && expandedCardIndex === index);
            const isEmpoweringGlobalTalent =
              division.slug === "empowering-global-talent";
            const isICTCard = division.slug === "ict";

            // Calculate widths based on hover/expand state
            let cardWidth;

            // Unified width calculation for all devices
            // Use 3:1 ratio - expanded card gets 3 units, others get 1 unit each

            // Mobile/Tablet: expanded card behavior (touch devices)
            if (
              isTouchDevice &&
              expandedCardIndex !== null &&
              isVisible
            ) {
              // Calculate total units: expanded card (3 units) + other cards (1 unit each)
              const totalUnits = 3 + (visibleCount - 1);

              if (expandedCardIndex === index) {
                // Expanded card gets 3 units
                cardWidth = `${(3 / totalUnits) * 100}vw`;
              } else {
                // Other visible cards get 1 unit each
                cardWidth = `${(1 / totalUnits) * 100}vw`;
              }
            }
            // Desktop: hover behavior
            else if (
              hoveredIndex !== null &&
              isVisible &&
              !isTouchDevice
            ) {
              // Calculate total units: hovered card (3 units) + other cards (1 unit each)
              const totalUnits = 3 + (visibleCount - 1);

              if (hoveredIndex === localIndex) {
                // Hovered card gets 3 units
                cardWidth = `${(3 / totalUnits) * 100}vw`;
              } else {
                // Other visible cards get 1 unit each
                cardWidth = `${(1 / totalUnits) * 100}vw`;
              }
            } else {
              // Nothing hovered/expanded: each card is equal width
              cardWidth = `${100 / visibleCount}vw`;
            }

            return (
              <div
                key={`${division.number}-${index}`}
                className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0`}
                style={{
                  width: cardWidth,
                  height: carouselHeight,
                  minHeight: carouselHeight,
                }}
                onMouseEnter={() => {
                  if (!isTouchDevice && isVisible) {
                    // Clear any pending hover timeout
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    // Set new hover with small delay to prevent flickering
                    hoverTimeoutRef.current = setTimeout(() => {
                      setHoveredIndex(localIndex);
                    }, 40);
                  }
                }}
                onMouseLeave={() => {
                  if (!isTouchDevice) {
                    // Clear pending hover timeout
                    if (hoverTimeoutRef.current) {
                      clearTimeout(hoverTimeoutRef.current);
                    }
                    // Reset hover state with slight delay
                    hoverTimeoutRef.current = setTimeout(() => {
                      setHoveredIndex(null);
                    }, 160);
                  }
                }}
                onClick={(e) => {
                  if (!division.slug || !isVisible) return;
                  if (Math.abs(dragOffset) > 8) return;

                  if (isTouchDevice) {
                    e.stopPropagation();

                    // First tap expands, second tap navigates.
                    if (expandedCardIndex === index) {
                      navigate(`/services/${division.slug}`);
                      return;
                    }

                    setExpandedCardIndex(index);
                    setHoveredIndex(localIndex);
                    return;
                  }

                  // Desktop: click anywhere on an expanded/hovered card to navigate.
                  if (
                    showContent === localIndex ||
                    hoveredIndex === localIndex
                  ) {
                    navigate(`/services/${division.slug}`);
                  }
                }}
              >
                {/* Background Image */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
                    (isVisible &&
                      hoveredIndex === localIndex) ||
                    (isTouchDevice &&
                      expandedCardIndex === index)
                      ? "scale-110"
                      : "scale-100"
                  }`}
                  style={{
                    backgroundImage: `url(${division.image})`,
                    filter: "blur(0.6px) brightness(0.94)",
                  }}
                />

                {/* Blue Tint Overlay */}
                <div
                  className="absolute inset-0 transition-colors duration-300"
                  style={{
                    backgroundColor: isExpandedCard
                      ? isEmpoweringGlobalTalent
                        ? "rgba(45, 62, 95, 0.44)"
                        : "rgba(45, 62, 95, 0.36)"
                      : isEmpoweringGlobalTalent
                        ? "rgba(45, 62, 95, 0.54)"
                        : "rgba(45, 62, 95, 0.48)",
                  }}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col text-white font-serif">
                  {/* Default State - Vertical Title and Number */}
                  <div
                    className={`h-full flex flex-col items-center justify-end p-6 pb-12 transition-all duration-500 ease-out ${
                      (isVisible &&
                        showContent === localIndex) ||
                      (isTouchDevice &&
                        expandedCardIndex === index)
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                    }`}
                    style={{
                      background:
                        "linear-gradient(to top, rgba(40, 49, 90, 0.7) 0%, rgba(40, 49, 90, 0.4) 50%, rgba(40, 49, 90, 0.1) 100%)",
                    }}
                  >
                    {/* Vertical Title */}
                    <div
                      className="mb-8 text-l tracking-[0.2em] uppercase"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {division.title}
                    </div>

                    {/* Number */}
                    {/* <div className="text-6xl">{division.number}</div> */}
                  </div>

                  {/* Expanded State - Full Content */}
                  <div
                    className={`absolute inset-0 px-8 py-10 flex flex-col justify-between transition-all duration-500 ease-out ${
                      (isVisible &&
                        showContent === localIndex) ||
                      (isTouchDevice &&
                        expandedCardIndex === index)
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div>
                      {/* Heading - Smooth fade + slide up */}
                      <h3
                        className={`mb-4 business-card-heading ${isICTCard ? "business-card-heading--ict" : ""} transition-all duration-700 ease-out ${
                          (isVisible &&
                            showContent === localIndex) ||
                          (isTouchDevice &&
                            expandedCardIndex === index)
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{
                          lineHeight: "1.3",
                          fontWeight: "400",
                          transitionDelay:
                            (isVisible &&
                              showContent === localIndex) ||
                            (isTouchDevice &&
                              expandedCardIndex === index)
                              ? "100ms"
                              : "0ms",
                        }}
                      >
                        {division.heading}
                      </h3>

                      {/* Description - Smooth fade + slide up with delay */}
                      <p
                        className={`mb-6 max-w-md text-[1rem] md:text-[1.125rem] lg:text-[2.75rem] transition-all duration-700 ease-out ${
                          (isVisible &&
                            showContent === localIndex) ||
                          (isTouchDevice &&
                            expandedCardIndex === index)
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{
                          lineHeight: "1.6",
                          fontWeight: "400",
                          transitionDelay:
                            (isVisible &&
                              showContent === localIndex) ||
                            (isTouchDevice &&
                              expandedCardIndex === index)
                              ? "200ms"
                              : "0ms",
                        }}
                      >
                        {division.description}
                      </p>

                      {/* Learn More - Smooth fade + slide up with more delay */}
                      {division.slug ? (
                        <Link
                          to={`/services/${division.slug}`}
                          className={`flex items-center gap-3 group cursor-pointer transition-all duration-700 ease-out ${
                            (isVisible &&
                              showContent === localIndex) ||
                            (isTouchDevice &&
                              expandedCardIndex === index)
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4"
                          }`}
                          style={{
                            transitionDelay:
                              (isVisible &&
                                showContent === localIndex) ||
                              (isTouchDevice &&
                                expandedCardIndex === index)
                                ? "300ms"
                                : "0ms",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: "400",
                              letterSpacing: "0.1em",
                            }}
                          >
                            LEARN MORE
                          </span>
                          <ArrowUp 
                            className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-[15px] rotate-90 text-white"
                          />
                        </Link>
                      ) : (
                        <div
                          className={`flex items-center gap-3 opacity-50 cursor-not-allowed transition-all duration-700 ease-out ${
                            (isVisible &&
                              showContent === localIndex) ||
                            (isTouchDevice &&
                              expandedCardIndex === index)
                              ? "translate-y-0"
                              : "translate-y-4"
                          }`}
                          style={{
                            transitionDelay:
                              (isVisible &&
                                showContent === localIndex) ||
                              (isTouchDevice &&
                                expandedCardIndex === index)
                                ? "300ms"
                                : "0ms",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: "400",
                              letterSpacing: "0.1em",
                            }}
                          >
                            COMING SOON
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Number at Bottom - Smooth fade in */}
                    <div
                      className={`transition-all duration-700 ease-out ${
                        (isVisible &&
                          showContent === localIndex) ||
                        (isTouchDevice &&
                          expandedCardIndex === index)
                          ? "opacity-80 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        fontSize: "5rem",
                        lineHeight: "1",
                        fontWeight: "400",
                        transitionDelay:
                          (isVisible &&
                            showContent === localIndex) ||
                          (isTouchDevice &&
                            expandedCardIndex === index)
                            ? "150ms"
                            : "0ms",
                      }}
                    >
                      {/* {division.number} */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
