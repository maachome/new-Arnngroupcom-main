import { motion } from "motion/react";
import { useEffect, useState } from "react";

const arnnLogo = "https://res.cloudinary.com/djnxf36jq/image/upload/v1772000146/arnn_omu8nl.png";

const shellStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 9999,
  overflow: "hidden",
  background:
    "radial-gradient(circle at 18% 18%, rgba(122, 156, 255, 0.18), transparent 26%), radial-gradient(circle at 82% 78%, rgba(255, 164, 124, 0.16), transparent 24%), linear-gradient(135deg, #f6f1e8 0%, #efe8dd 50%, #f8f4ee 100%)",
};

export function GlobalLoader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  return (
    <div style={shellStyle}>
      <motion.div
        animate={{ x: [0, 22, 0], y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: isMobile ? "-3rem" : "0",
          left: isMobile ? "-3rem" : "2%",
          width: isMobile ? "11rem" : "18rem",
          height: isMobile ? "11rem" : "18rem",
          borderRadius: "999px",
          background: "rgba(129, 159, 255, 0.20)",
          filter: "blur(54px)",
        }}
      />

      <motion.div
        animate={{ x: [0, -18, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          right: isMobile ? "-2rem" : "6%",
          bottom: isMobile ? "-2rem" : "8%",
          width: isMobile ? "10rem" : "16rem",
          height: isMobile ? "10rem" : "16rem",
          borderRadius: "999px",
          background: "rgba(255, 171, 136, 0.18)",
          filter: "blur(56px)",
        }}
      />

      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: isMobile ? "24px 18px" : "40px 24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{
            width: "min(440px, 100%)",
            display: "grid",
            justifyItems: "center",
            textAlign: "center",
          }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "relative",
              width: isMobile ? "112px" : "136px",
              height: isMobile ? "112px" : "136px",
              display: "grid",
              placeItems: "center",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "999px",
                background:
                  "conic-gradient(from 180deg, rgba(183,138,47,0.10), rgba(45,99,242,0.65), rgba(240,131,92,0.5), rgba(183,138,47,0.10))",
                padding: "1px",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
              }}
            />

            <div
              style={{
                width: isMobile ? "84px" : "100px",
                height: isMobile ? "84px" : "100px",
                display: "grid",
                placeItems: "center",
              }}
            >
              <img
                src={arnnLogo}
                alt="ARNN Group"
                style={{
                  width: isMobile ? "98px" : "88px",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </motion.div>

          <div
            style={{
              marginTop: isMobile ? "24px" : "28px",
              color: "#162033",
              fontFamily: "Nunito, sans-serif",
              fontSize: isMobile ? "clamp(1.6rem, 8vw, 2rem)" : "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.02,
            }}
          >
            ARNN Group
          </div>

          <div
            style={{
              marginTop: "10px",
              color: "#6a7388",
              fontSize: isMobile ? "13px" : "14px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Building legacies. Empowering futures.
          </div>

          <div
            style={{
              marginTop: isMobile ? "24px" : "28px",
              width: isMobile ? "148px" : "172px",
              height: "3px",
              borderRadius: "999px",
              background: "rgba(24, 34, 58, 0.08)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <motion.div
              initial={{ x: "-45%", width: "42%" }}
              animate={{ x: ["-45%", "165%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                insetBlock: 0,
                left: 0,
                borderRadius: "999px",
                background: "linear-gradient(90deg, #b78a2f 0%, #2d63f2 52%, #f0835c 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
