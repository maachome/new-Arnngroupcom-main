import { motion } from "motion/react";
import { ServiceStatsData } from "../../types/service";

interface ServiceStatsProps {
  data: ServiceStatsData;
  color: string;
}

export function ServiceStats({ data, color }: ServiceStatsProps) {
  return (
    <section className="srv-section" style={{ ["--srv-accent" as string]: color }}>
      <div className="srv-container">
        {data.title ? (
          <div className="srv-stats-header">
            <h2 className="srv-heading">{data.title}</h2>
          </div>
        ) : null}

        <div className="srv-stats-grid">
          {data.items.map((stat, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="srv-stat"
            >
              <p className="srv-stat-label">{stat.label}</p>
              <div className="srv-stat-value">
                <span>
                  {stat.prefix || ""}
                  {stat.value}
                  {stat.suffix || ""}
                </span>
              </div>
              {stat.description ? <p className="srv-stat-desc">{stat.description}</p> : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
