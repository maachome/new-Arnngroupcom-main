import { motion } from "motion/react";
import { ServiceOverviewData } from "../../types/service";
import { ArrowUpRight, Check } from "lucide-react";

interface ServiceOverviewProps {
  data: ServiceOverviewData;
  color: string;
}

export function ServiceOverview({ data, color }: ServiceOverviewProps) {
  const [leadParagraph, ...supportingParagraphs] = data.paragraphs;

  return (
    <section
      className="srv-section"
      data-service-section
      style={{ ["--srv-accent" as string]: color }}
    >
      <div className="srv-container">
        <div className="srv-overview-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="srv-overview-heading"
          >
            {data.subtitle && <div className="srv-chip">{data.subtitle}</div>}
            <h2 className="srv-heading mt-5">{data.title}</h2>
          </motion.div>

          <div className="srv-overview-grid">
            <motion.div
              initial={{ opacity: 0, x: -34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="srv-overview-visual"
            >
              {data.image ? (
                <div className="srv-overview-image">
                  <img key={data.image} src={data.image} alt={data.title} />
                  <div className="srv-overview-image-glow" />
                </div>
              ) : null}

              <div className="srv-overview-note">
                <span>Focus</span>
                <strong>{data.subtitle || "Service overview"}</strong>
                <p>Built from the same underlying business data, presented with stronger hierarchy.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="srv-overview-copywrap"
            >
              <article className="srv-panel srv-overview-leadpanel">
                <div className="srv-overview-kicker">
                  <span>Overview</span>
                  <ArrowUpRight size={16} />
                </div>
                <p className="srv-overview-lead">{leadParagraph}</p>
              </article>

              {supportingParagraphs.length ? (
                <div className="srv-overview-textgrid">
                  {supportingParagraphs.map((paragraph, idx) => (
                    <article key={idx} className="srv-panel srv-overview-textcard">
                      <p className="srv-copy">{paragraph}</p>
                    </article>
                  ))}
                </div>
              ) : null}

              {data.highlights?.length ? (
                <div className="srv-panel srv-overview-highlights">
                  <div className="srv-overview-kicker">
                    <span>Key signals</span>
                  </div>
                  <div className="srv-overview-highlightgrid">
                    {data.highlights.map((highlight, idx) => (
                      <div key={idx} className="srv-overview-highlight">
                        <div
                          className="srv-overview-highlighticon"
                          style={{ backgroundColor: `${color}18` }}
                        >
                          <Check className="w-4 h-4" style={{ color }} />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
