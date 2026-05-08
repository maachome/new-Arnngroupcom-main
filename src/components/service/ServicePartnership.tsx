import { motion } from "motion/react";
import { Building2, ClipboardCheck, Handshake, Layers3 } from "lucide-react";
import { ServicePartnershipData } from "../../types/service";

interface ServicePartnershipProps {
  data?: ServicePartnershipData;
  color: string;
  serviceTitle: string;
}

const icons = [Handshake, Layers3, ClipboardCheck, Building2];

function buildDefaultPartnership(serviceTitle: string): ServicePartnershipData {
  return {
    title: "Partnership Model",
    subtitle: "How We Engage",
    intro:
      `ARNN Group approaches ${serviceTitle.toLowerCase()} through structured engagement models designed to balance strategic alignment, operational clarity, and long-term execution discipline.`,
    items: [
      {
        title: "Strategic review",
        description:
          "Each opportunity is assessed against business fit, delivery readiness, market conditions, and long-term operating value before formal engagement begins.",
      },
      {
        title: "Engagement structure",
        description:
          "Relationships may be shaped through direct operations, commercial collaboration, advisory support, or phased partnership models depending on sector needs.",
      },
      {
        title: "Execution oversight",
        description:
          "Defined milestones, partner coordination, and operating governance are used to maintain consistency, accountability, and quality across delivery stages.",
      },
      {
        title: "Sustained coordination",
        description:
          "After launch or implementation, the model remains focused on continuity, performance review, and practical refinement as the business relationship evolves.",
      },
    ],
  };
}

export function ServicePartnership({
  data,
  color,
  serviceTitle,
}: ServicePartnershipProps) {
  const partnership = data ?? buildDefaultPartnership(serviceTitle);

  return (
    <section className="srv-section" style={{ ["--srv-accent" as string]: color }}>
      <div className="srv-container">
        <div className="srv-partnership-shell">
          <div className="srv-partnership-header">
            {partnership.subtitle ? <div className="srv-chip">{partnership.subtitle}</div> : null}
            <h2 className="srv-heading mt-5">{partnership.title}</h2>
            {partnership.intro ? (
              <p className="srv-copy mt-5 max-w-[60ch]">{partnership.intro}</p>
            ) : null}
          </div>

          <div className="srv-partnership-grid">
            {partnership.items.map((item, idx) => {
              const Icon = icons[idx % icons.length];

              return (
                <motion.article
                  key={`${item.title}-${idx}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="srv-partnership-card"
                >
                  <div className="srv-card-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
