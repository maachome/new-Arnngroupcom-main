import { motion } from "motion/react";
import { ServiceProcessData } from "../../types/service";
import { Check, Lightbulb, Handshake, Leaf, Target } from "lucide-react";

const iconMap: Record<string, any> = {
  check: Check,
  lightbulb: Lightbulb,
  handshake: Handshake,
  leaf: Leaf,
  target: Target,
};

interface ServiceProcessProps {
  data: ServiceProcessData;
  color: string;
}

export function ServiceProcess({ data, color }: ServiceProcessProps) {
  return (
    <section className="srv-section" style={{ ["--srv-accent" as string]: color }}>
      <div className="srv-container">
        <div className="srv-process-shell">
          <div className="srv-process-heading">
            {data.subtitle && <div className="srv-chip">{data.subtitle}</div>}
            <h2 className="srv-heading mt-5">{data.title}</h2>
          </div>

          <div className="srv-process-rail" />

          <div className="srv-process-grid">
            {data.steps.map((step, idx) => {
              const Icon = step.icon ? iconMap[step.icon] || Check : Check;
              const number = step.number || `${idx + 1}`;

              return (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="srv-process-card"
                >
                  <div className="srv-process-marker">
                    <span>{number}</span>
                  </div>

                  <div className="srv-process-card-top">
                    <div className="srv-card-icon">
                      <Icon size={20} />
                    </div>
                    <div className="srv-process-meta">
                      <span>{`Step 0${idx + 1}`}</span>
                    </div>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
