import { motion } from "motion/react";

const loaderNotes = [
  "Strategic ventures",
  "Refined execution",
  "Global portfolio",
];

const shellStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 9999,
  overflow: "hidden",
  background:
    "radial-gradient(circle at 18% 16%, rgba(122, 156, 255, 0.16), transparent 24%), radial-gradient(circle at 82% 20%, rgba(255, 164, 124, 0.20), transparent 22%), linear-gradient(135deg, #f5f2ec 0%, #efe8de 52%, #f8f5f0 100%)",
};

const panelBorder = "1px solid rgba(20, 26, 42, 0.08)";

export function GlobalLoader() {
  return (
    <div style={shellStyle}>
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "12%",
          left: "-2rem",
          width: "14rem",
          height: "14rem",
          borderRadius: "999px",
          background: "rgba(129, 159, 255, 0.16)",
          filter: "blur(48px)",
        }}
      />
      <motion.div
        animate={{ x: [0, -16, 0], y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          right: "4%",
          bottom: "10%",
          width: "16rem",
          height: "16rem",
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
          padding: "32px 20px",
        }}
      >
        <div
          style={{
            width: "min(1120px, 100%)",
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "minmax(0, 1fr)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: "20px",
                gridTemplateColumns: "minmax(0, 1fr)",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.72)",
                  background: "rgba(255,255,255,0.58)",
                  backdropFilter: "blur(22px)",
                  WebkitBackdropFilter: "blur(22px)",
                  borderRadius: "34px",
                  boxShadow: "0 28px 90px rgba(18, 24, 39, 0.10)",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    border: panelBorder,
                    background: "rgba(255,255,255,0.74)",
                    color: "#2d374d",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "999px",
                      background: "#2d63f2",
                      display: "inline-block",
                    }}
                  />
                  <span>Arnn Group</span>
                </div>

                <div style={{ marginTop: "28px", maxWidth: "760px" }}>
                  <div
                    style={{
                      color: "#6d768c",
                      fontSize: "12px",
                      fontWeight: 800,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                    }}
                  >
                    Modern group platform
                  </div>

                  <div
                    style={{
                      marginTop: "16px",
                      color: "#121a2f",
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(2.5rem, 6vw, 5.1rem)",
                      lineHeight: 0.94,
                      letterSpacing: "-0.06em",
                    }}
                  >
                    Building the next surface with sharper hierarchy.
                  </div>

                  <div
                    style={{
                      marginTop: "22px",
                      maxWidth: "56ch",
                      color: "#586178",
                      fontSize: "15px",
                      fontWeight: 700,
                      lineHeight: 1.75,
                    }}
                  >
                    The portfolio experience is loading with the newer visual direction, cleaner
                    motion language, and stronger brand control.
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "32px",
                    display: "grid",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "16px",
                      color: "#6b748a",
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span>Preparing experience</span>
                    <span>Loading</span>
                  </div>

                  <div
                    style={{
                      position: "relative",
                      height: "4px",
                      overflow: "hidden",
                      borderRadius: "999px",
                      background: "rgba(32, 39, 61, 0.08)",
                    }}
                  >
                    <motion.div
                      initial={{ x: "-45%", width: "42%" }}
                      animate={{ x: ["-45%", "140%"] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        insetBlock: 0,
                        left: 0,
                        borderRadius: "999px",
                        background:
                          "linear-gradient(90deg, #2d63f2 0%, #5f8dff 56%, #f0835c 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gap: "20px",
                  gridTemplateColumns: "minmax(0, 1fr)",
                }}
              >
                <div
                  style={{
                    border: panelBorder,
                    background: "linear-gradient(180deg, rgba(24,34,58,0.96), rgba(17,24,42,0.94))",
                    borderRadius: "32px",
                    boxShadow: "0 26px 80px rgba(10, 18, 38, 0.16)",
                    padding: "28px",
                    color: "#ffffff",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "18px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color: "rgba(255,255,255,0.42)",
                          fontSize: "11px",
                          fontWeight: 800,
                          letterSpacing: "0.24em",
                          textTransform: "uppercase",
                        }}
                      >
                        Session
                      </div>
                      <div
                        style={{
                          marginTop: "10px",
                          fontWeight: 800,
                          fontSize: "2rem",
                          letterSpacing: "-0.05em",
                          lineHeight: 1,
                        }}
                      >
                        01
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: [0, 90, 180, 270, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      style={{
                        width: "58px",
                        height: "58px",
                        borderRadius: "20px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "rgba(255,255,255,0.04)",
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "999px",
                          background: "#ff9c74",
                          display: "inline-block",
                        }}
                      />
                    </motion.div>
                  </div>

                  <div style={{ marginTop: "28px", display: "grid", gap: "16px" }}>
                    {loaderNotes.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.3 + index * 0.08 }}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "34px minmax(0, 1fr)",
                          gap: "12px",
                          alignItems: "start",
                          paddingTop: index === 0 ? "0" : "16px",
                          borderTop:
                            index === 0 ? "0" : "1px solid rgba(255,255,255,0.10)",
                        }}
                      >
                        <span
                          style={{
                            paddingTop: "4px",
                            color: "#7ea3ff",
                            fontSize: "10px",
                            fontWeight: 800,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                          }}
                        >
                          {`0${index + 1}`}
                        </span>
                        <div
                          style={{
                            color: "rgba(255,255,255,0.78)",
                            fontSize: "14px",
                            fontWeight: 700,
                            lineHeight: 1.7,
                          }}
                        >
                          {item}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    animate={{ opacity: [0.34, 0.74, 0.34] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      marginTop: "28px",
                      color: "rgba(255,255,255,0.36)",
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                    }}
                  >
                    Loading excellence
                  </motion.div>
                </div>

                <div
                  style={{
                    border: panelBorder,
                    background: "rgba(255,255,255,0.56)",
                    borderRadius: "26px",
                    padding: "22px 24px",
                    color: "#23304b",
                  }}
                >
                  <div
                    style={{
                      color: "#73809a",
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                    }}
                  >
                    Status
                  </div>
                  <div
                    style={{
                      marginTop: "12px",
                      fontSize: "15px",
                      fontWeight: 700,
                      lineHeight: 1.75,
                    }}
                  >
                    Editorial, motion, and service surfaces are being prepared.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
