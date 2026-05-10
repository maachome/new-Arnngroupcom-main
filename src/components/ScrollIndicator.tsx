import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const { scrollY } = useScroll();
  // Fade out as soon as the user starts scrolling
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute bottom-12 inset-x-0 z-10 flex flex-col items-center pointer-events-none"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="relative flex flex-col items-center">
        {/* Modern decorative rings in theme gold - responsive sizes */}
        <motion.div 
          className="absolute inset-[-20px] md:inset-[-30px] rounded-full border border-[#b78a2f]/30"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute inset-[-10px] md:inset-[-15px] rounded-full border border-[#b78a2f]/40"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* The Arrow in theme gold - larger on desktop */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-md rounded-full p-2.5 md:p-4 border border-[#b78a2f]/50 shadow-[0_0_20px_rgba(183,138,47,0.3)]"
        >
          <ChevronDown 
            style={{ color: "#b78a2f" }} 
            className="w-7 h-7 md:w-10 md:h-10"
            strokeWidth={2.5} 
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
