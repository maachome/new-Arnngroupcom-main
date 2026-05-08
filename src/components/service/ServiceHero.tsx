import { motion, useScroll, useTransform } from "motion/react";
import { ServiceHeroData } from "../../types/service";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  data: ServiceHeroData;
  color: string;
}

export function ServiceHero({ data, color }: ServiceHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  const activeMediaUrl = String(
    isMobile && data.mobileMediaUrl ? data.mobileMediaUrl : data.mediaUrl,
  );
  const youtubeMatch = activeMediaUrl.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/i,
  );
  const youtubeVideoId = youtubeMatch?.[1];
  const isYoutubeVideo = data.mediaType === "video" && Boolean(youtubeVideoId);
  const youtubeEmbedUrl = youtubeVideoId
    ? `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&fs=0&disablekb=1`
    : "";
  const videoMimeType = activeMediaUrl.toLowerCase().endsWith(".webm")
    ? "video/webm"
    : "video/mp4";

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  const servicePillars = [
    data.badge || "Structured sector engagement",
    "Long-term operating alignment",
  ].filter(Boolean);

  const scrollToNext = () => {
    const nextSection = document.querySelector("[data-service-section]");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="srv-hero"
      style={{ ["--srv-accent" as string]: color }}
    >
      {data.mediaType === "video" ? (
        <div className="srv-hero-media z-0">
          {isYoutubeVideo ? (
            <motion.div style={{ scale }} className="absolute inset-0 overflow-hidden">
              <iframe
                src={youtubeEmbedUrl}
                title="Hero video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="pointer-events-none border-0 bg-video-blur"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "max(100%, 177.78vh)",
                  height: "max(100%, 56.25vw)",
                }}
              />
            </motion.div>
          ) : (
            <motion.video
              key={activeMediaUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ scale }}
              className="bg-video-blur"
            >
              <source src={activeMediaUrl} type={videoMimeType} />
            </motion.video>
          )}
        </div>
      ) : (
        <motion.div style={{ scale }} className="srv-hero-media z-0">
          <div
            className="srv-hero-media-image bg-cover bg-center"
            style={{ backgroundImage: `url(${activeMediaUrl})` }}
          />
        </motion.div>
      )}

      <div className="srv-hero-overlay" />

      <div className="srv-hero-grid">
        <div className="srv-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="srv-hero-content"
          >
            <div className="srv-hero-copy">
              {data.businessLogoUrl && (
                <div className="srv-hero-logo">
                  {data.websitelink ? (
                    <a href={data.websitelink} target="_blank" rel="noopener noreferrer">
                      <img src={data.businessLogoUrl} alt="Business logo" />
                    </a>
                  ) : (
                    <img src={data.businessLogoUrl} alt="Business logo" />
                  )}
                </div>
              )}

              <div className="srv-hero-meta">
                <span className="srv-hero-meta-label">ARNN Group Business Vertical</span>
              </div>

              {data.subheadline && <p className="srv-eyebrow">{data.subheadline}</p>}

              <h1 className="srv-hero-title">{data.headline}</h1>
              <p className="srv-lead srv-hero-desc">{data.description}</p>

              <div className="srv-hero-actions">
                <button className="srv-button srv-button-primary" onClick={scrollToNext}>
                  View business scope
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="srv-hero-proofbar">
                {servicePillars.map((item, idx) => (
                  <div key={`${item}-${idx}`} className="srv-hero-proofitem">
                    <span className="srv-side-index">{`0${idx + 1}`}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="srv-hero-scroll cursor-pointer" onClick={scrollToNext}>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
        </motion.div>
      </div>
    </section>
  );
}
