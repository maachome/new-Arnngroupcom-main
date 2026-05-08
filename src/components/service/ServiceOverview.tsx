import { motion } from "motion/react";
import { ServiceOverviewData } from "../../types/service";

interface ServiceOverviewProps {
  data: ServiceOverviewData;
  color: string;
}

export function ServiceOverview({ data, color }: ServiceOverviewProps) {
  const [leadParagraph, ...supportingParagraphs] = data.paragraphs;
  const visibleSupportingParagraphs = supportingParagraphs.slice(0, 1);
  const visibleHighlights = data.highlights?.slice(0, 3) || [];

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
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="srv-overview-visual"
            >
              {data.image ? (
                <div className="srv-overview-image">
                  <img key={data.image} src={data.image} alt={data.title} />
                  <div className="srv-overview-image-glow" />
                </div>
              ) : null}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.04 }}
              className="srv-overview-copywrap"
            >
              <article className="srv-panel srv-overview-leadpanel">
                <p className="srv-overview-lead">{leadParagraph}</p>
                {visibleSupportingParagraphs.length ? (
                  <div className="srv-overview-body">
                    {visibleSupportingParagraphs.map((paragraph, idx) => (
                      <p key={idx} className="srv-copy">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}

                {visibleHighlights.length ? (
                  <div className="srv-overview-signals">
                    <div className="srv-overview-signalgrid">
                      {visibleHighlights.map((highlight, idx) => (
                        <div key={idx} className="srv-overview-signal">
                          <span className="srv-overview-signalmark" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
