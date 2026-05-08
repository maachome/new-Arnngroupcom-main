import { motion } from "motion/react";
import { BadgeCheck, ClipboardCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { ServiceGovernanceData } from "../../types/service";

interface ServiceGovernanceProps {
  data?: ServiceGovernanceData;
  color: string;
  serviceTitle: string;
}

const icons = [ShieldCheck, ClipboardCheck, FileCheck2, BadgeCheck];

function buildDefaultGovernance(serviceTitle: string): ServiceGovernanceData {
  const key = serviceTitle.toLowerCase();

  const items =
    key.includes("economic empowerment")
      ? [
          { title: "Program oversight", description: "Engagements are reviewed against public-interest relevance, feasibility, and implementation practicality before full activation." },
          { title: "Stakeholder alignment", description: "Government, investor, and operating counterpart expectations are coordinated through clearly defined review and decision pathways." },
          { title: "Execution control", description: "Milestones, approvals, and reporting structure are maintained to keep delivery disciplined across multiple participants." },
          { title: "Continuity assurance", description: "The operating model remains focused on accountability, local relevance, and long-term program stability beyond initial launch." },
        ]
      : key.includes("real estate")
        ? [
            { title: "Development review", description: "Project direction is tested against commercial rationale, site conditions, and long-term asset positioning before progression." },
            { title: "Technical coordination", description: "Design, delivery, and operating inputs are aligned through structured review rather than informal parallel decision-making." },
            { title: "Quality checkpoints", description: "Defined checkpoints help maintain consistency across planning, implementation, and readiness for operation." },
            { title: "Asset continuity", description: "Oversight remains focused on usability, brand fit, and post-handover continuity rather than launch-stage delivery alone." },
          ]
        : key.includes("information & communication technologies")
          ? [
              { title: "Solution governance", description: "Technology decisions are assessed against business fit, reliability expectations, and realistic implementation requirements." },
              { title: "Security discipline", description: "Delivery planning considers access control, system integrity, and appropriate operational safeguards from the outset." },
              { title: "Implementation standards", description: "Structured testing, deployment review, and handover discipline help reduce operational risk across rollout phases." },
              { title: "Service continuity", description: "Ongoing support expectations and operational ownership are clarified to maintain continuity after go-live." },
            ]
          : key.includes("agro-aquaculture")
            ? [
                { title: "Production controls", description: "Operational methods are organized around quality consistency, resource discipline, and practical site suitability." },
                { title: "Traceability approach", description: "Key handling and production stages are structured to support visibility, accountability, and downstream confidence." },
                { title: "Partner standards", description: "Supporting operators and suppliers are aligned to working methods intended to preserve consistency in delivery." },
                { title: "Supply continuity", description: "Oversight extends beyond production to continuity across handling, movement, and ongoing operational reliability." },
              ]
            : key.includes("fashion industries")
              ? [
                  { title: "Brand discipline", description: "Collections, sourcing decisions, and retail presentation are guided through a consistent commercial and brand lens." },
                  { title: "Production review", description: "Supplier and production relationships are evaluated for quality, timing control, and category suitability." },
                  { title: "Merchandising consistency", description: "Product decisions are coordinated to preserve coherence across customer-facing channels and market positioning." },
                  { title: "Operating assurance", description: "The model remains focused on reliable execution, measured expansion, and continuity across retail or brand activity." },
                ]
              : key.includes("empowering global talent")
                ? [
                    { title: "Verification framework", description: "Recruitment activity is managed around verified employer review, worker documentation discipline, and procedural clarity." },
                    { title: "Worker protection", description: "Processes are shaped to reduce ambiguity and support more transparent movement through the placement pathway." },
                    { title: "Compliance controls", description: "Coordination with institutional and training stakeholders helps maintain standards across onboarding and deployment." },
                    { title: "Case continuity", description: "Support remains focused on follow-through, issue visibility, and practical continuity after initial placement." },
                  ]
                : key.includes("global healthcare")
                  ? [
                      { title: "Care coordination", description: "Service delivery is built around clarity in communication, provider coordination, and patient pathway continuity." },
                      { title: "Provider review", description: "Hospitals, specialists, and care networks are considered through quality, relevance, and coordination readiness." },
                      { title: "Documentation discipline", description: "Treatment support is organized through structured information handling and practical case management controls." },
                      { title: "Journey assurance", description: "Oversight stays focused on continuity before, during, and after care rather than appointment scheduling alone." },
                    ]
                  : key.includes("agrifuture global")
                    ? [
                        { title: "Program structure", description: "Agricultural activation is organized through phased planning, feasibility discipline, and implementation realism." },
                        { title: "Community safeguards", description: "Local participation, training pathways, and continuity expectations are considered as part of the operating model." },
                        { title: "Field execution controls", description: "Delivery is guided through practical checkpoints across land use, infrastructure readiness, and production operations." },
                        { title: "Long-term assurance", description: "The model remains aligned to sustainability, operational continuity, and durable value creation over time." },
                      ]
                    : key.includes("furniture and furnishing sectors")
                      ? [
                          { title: "Project coordination", description: "Residential, hospitality, and commercial furnishing work is aligned through controlled specification and delivery review." },
                          { title: "Material standards", description: "Selections are assessed for suitability, finish consistency, and fit with the intended use environment." },
                          { title: "Supplier discipline", description: "Production and sourcing relationships are managed through clear quality and timing expectations." },
                          { title: "Installation continuity", description: "Oversight extends through handover and placement to preserve project coherence and user readiness." },
                        ]
                      : [
                          { title: "Format governance", description: "Food and beverage concepts are reviewed for operational realism, location fit, and commercial sustainability." },
                          { title: "Supply consistency", description: "Core delivery standards prioritize product reliability, service readiness, and repeatable customer experience." },
                          { title: "Operating controls", description: "Execution is supported through structured review of rollout, site readiness, and day-to-day service continuity." },
                          { title: "Brand assurance", description: "The business model remains focused on disciplined expansion, controlled quality, and stable concept delivery." },
                        ];

  return {
    title: "Governance, Standards & Assurance",
    subtitle: "Operating Discipline",
    intro: `The ${serviceTitle.toLowerCase()} business is structured around practical governance, quality controls, and execution discipline rather than promotional scale claims alone.`,
    items,
  };
}

export function ServiceGovernance({
  data,
  color,
  serviceTitle,
}: ServiceGovernanceProps) {
  const governance = data ?? buildDefaultGovernance(serviceTitle);

  return (
    <section className="srv-section" style={{ ["--srv-accent" as string]: color }}>
      <div className="srv-container">
        <div className="srv-governance-shell">
          <div className="srv-governance-header">
            {governance.subtitle ? <div className="srv-chip">{governance.subtitle}</div> : null}
            <h2 className="srv-heading mt-5">{governance.title}</h2>
            {governance.intro ? (
              <p className="srv-copy mt-5 max-w-[60ch]">{governance.intro}</p>
            ) : null}
          </div>

          <div className="srv-governance-grid">
            {governance.items.map((item, idx) => {
              const Icon = icons[idx % icons.length];

              return (
                <motion.article
                  key={`${item.title}-${idx}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="srv-governance-card"
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
