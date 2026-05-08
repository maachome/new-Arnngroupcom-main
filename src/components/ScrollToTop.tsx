import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed rounded-full bg-white border border-[#dcc48a] flex items-center justify-center transition-shadow duration-300 cursor-pointer group p-0 overflow-visible"
          style={{
            right: window.innerWidth >= 1024 ? "3rem" : window.innerWidth >= 640 ? "3rem" : "1rem",
            bottom: "1.75rem",
            zIndex: 9999,
            width: window.innerWidth >= 1024 ? "64px" : window.innerWidth >= 640 ? "44px" : "40px",
            height: window.innerWidth >= 1024 ? "64px" : window.innerWidth >= 640 ? "44px" : "40px",
            minWidth: window.innerWidth >= 1024 ? "64px" : window.innerWidth >= 640 ? "44px" : "40px",
            minHeight: window.innerWidth >= 1024 ? "64px" : window.innerWidth >= 640 ? "44px" : "40px",
            borderRadius: "9999px",
            boxShadow:
              "0 18px 40px rgba(15, 23, 42, 0.22), 0 8px 18px rgba(183, 138, 47, 0.22), 0 2px 6px rgba(255, 255, 255, 0.65) inset",
          }}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp
              className="h-7 w-7 transition-colors duration-300 sm:h-14 sm:w-14 lg:h-28 lg:w-28"
              style={{ color: "#9a741f" }}
            />
          </motion.div>
          
          {/* Animated Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#dcc48a]/60"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
