import { motion } from "motion/react";
import { Briefcase, Building2, Factory, Globe, ShieldCheck, Users } from "lucide-react";
import { ServiceStakeholderData } from "../../types/service";

interface ServiceStakeholdersProps {
  data?: ServiceStakeholderData;
  color: string;
  serviceTitle: string;
}

const icons = [Building2, Briefcase, Users, Globe, ShieldCheck, Factory];

function buildDefaultStakeholders(serviceTitle: string): ServiceStakeholderData {
  const key = serviceTitle.toLowerCase();

  const items =
    key.includes("economic empowerment")
      ? [
          { title: "Government bodies", description: "Public-sector counterparts involved in policy alignment, approvals, and economic-development priorities." },
          { title: "Strategic investors", description: "Capital participants evaluating structured opportunities across selected sectors and jurisdictions." },
          { title: "Sector operators", description: "Operating partners aligned to delivery in real estate, agriculture, and industrial activity." },
          { title: "Implementation advisors", description: "Technical and commercial stakeholders supporting structuring, review, and execution continuity." },
        ]
      : key.includes("real estate")
        ? [
            { title: "Developers and owners", description: "Parties shaping asset direction, investment rationale, and long-term commercial positioning." },
            { title: "Design specialists", description: "Architects, designers, planners, and technical consultants contributing to project definition and quality." },
            { title: "Hospitality partners", description: "Operators and sector participants involved in hospitality-led assets and destination relevance." },
            { title: "Delivery stakeholders", description: "Teams coordinating execution, operational readiness, and asset continuity beyond launch." },
          ]
        : key.includes("information & communication technologies")
          ? [
              { title: "Enterprise clients", description: "Businesses evaluating digital platforms, infrastructure, or technology-enabled service models." },
              { title: "Implementation partners", description: "Hosting, security, integration, and technical delivery stakeholders supporting deployment." },
              { title: "Product users", description: "Operational end users whose requirements shape usability, reliability, and adoption expectations." },
              { title: "Technology collaborators", description: "Specialist participants supporting architecture, delivery control, and long-term system continuity." },
            ]
          : key.includes("agro-aquaculture")
            ? [
                { title: "Land and facility stakeholders", description: "Parties involved in site readiness, infrastructure use, and production suitability." },
                { title: "Production specialists", description: "Cultivation, aquaculture, and controlled-environment operators supporting practical delivery." },
                { title: "Distribution channels", description: "Stakeholders aligned to quality handling, downstream movement, and product continuity." },
                { title: "Technology providers", description: "Participants supporting monitoring, automation, and resource-efficiency across production systems." },
              ]
            : key.includes("fashion industries")
              ? [
                  { title: "Brand and retail channels", description: "Commercial routes supporting product presentation, customer reach, and controlled market placement." },
                  { title: "Production partners", description: "Manufacturing and sourcing stakeholders aligned to quality, material discipline, and delivery consistency." },
                  { title: "Design and curation teams", description: "Participants shaping collection identity, category balance, and customer-facing coherence." },
                  { title: "Customer-facing operators", description: "Retail and service stakeholders responsible for experience continuity and brand trust." },
                ]
              : key.includes("empowering global talent")
                ? [
                    { title: "Employers", description: "Verified hiring organizations participating within structured worker-protection and compliance frameworks." },
                    { title: "Workers and applicants", description: "Individuals engaging through verified placement, training, and support pathways." },
                    { title: "Compliance institutions", description: "Bodies involved in standards alignment, verification expectations, and procedural oversight." },
                    { title: "Training partners", description: "Stakeholders supporting onboarding, upskilling, and readiness across the recruitment cycle." },
                  ]
                : key.includes("global healthcare")
                  ? [
                      { title: "Patients and families", description: "Primary care stakeholders requiring clear guidance, continuity, and secure coordination." },
                      { title: "Hospitals and specialists", description: "Verified care providers aligned to treatment relevance, network quality, and follow-through." },
                      { title: "Care coordinators", description: "Operational teams handling communication, scheduling, documentation, and journey support." },
                      { title: "Travel-support partners", description: "Stakeholders involved when treatment requires managed cross-border movement and logistics." },
                    ]
                  : key.includes("agrifuture global")
                    ? [
                        { title: "Governments and agencies", description: "Public stakeholders aligned to land activation, agricultural policy, and long-term program feasibility." },
                        { title: "Communities and workers", description: "Local participants engaged in training, production, ownership pathways, and value creation." },
                        { title: "Agri-tech and field operators", description: "Specialists combining practical farm delivery with appropriate technology adoption." },
                        { title: "Investment and program partners", description: "Stakeholders supporting rollout structure, implementation continuity, and scale readiness." },
                      ]
                    : key.includes("furniture and furnishing sectors")
                      ? [
                          { title: "Residential and project clients", description: "Clients seeking curated furnishing outcomes across living, hospitality, and commercial spaces." },
                          { title: "Design and fit-out stakeholders", description: "Teams responsible for aesthetic direction, project detail, and installation coordination." },
                          { title: "Production and sourcing partners", description: "Suppliers and makers aligned to material standards, quality control, and delivery timing." },
                          { title: "Hospitality and commercial operators", description: "Project stakeholders requiring furnishing execution at operational and brand level." },
                        ]
                      : [
                          { title: "Operators and brand partners", description: "Stakeholders shaping concept relevance, day-to-day execution, and commercial continuity." },
                          { title: "Hospitality and site partners", description: "Parties aligned to location performance, guest demand, and service-format suitability." },
                          { title: "Supply and delivery channels", description: "Operational stakeholders supporting product consistency, speed, and service reliability." },
                          { title: "Expansion collaborators", description: "Participants involved in rollout, market entry, and longer-term concept growth planning." },
                        ];

  return {
    title: "Who We Work With",
    subtitle: "Stakeholder Model",
    intro: `The ${serviceTitle.toLowerCase()} business is delivered through coordination across a focused stakeholder network rather than a single operating relationship.`,
    items,
  };
}

export function ServiceStakeholders({
  data,
  color,
  serviceTitle,
}: ServiceStakeholdersProps) {
  const stakeholders = data ?? buildDefaultStakeholders(serviceTitle);

  return (
    <section className="srv-section" style={{ ["--srv-accent" as string]: color }}>
      <div className="srv-container">
        <div className="srv-stakeholders-shell">
          <div className="srv-stakeholders-header">
            {stakeholders.subtitle ? <div className="srv-chip">{stakeholders.subtitle}</div> : null}
            <h2 className="srv-heading mt-5">{stakeholders.title}</h2>
            {stakeholders.intro ? (
              <p className="srv-copy mt-5 max-w-[60ch]">{stakeholders.intro}</p>
            ) : null}
          </div>

          <div className="srv-stakeholders-grid">
            {stakeholders.items.map((item, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <motion.article
                  key={`${item.title}-${idx}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="srv-stakeholder-card"
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
