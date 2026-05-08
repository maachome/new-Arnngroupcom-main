import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/about-contact-redesign.css";
import { motion } from "motion/react";
import {
  BadgeCheck,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Globe2,
  MoveRight,
  Orbit,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Users2,
  Waypoints,
} from "lucide-react";
import { Link } from "react-router-dom";

const groupOverview = [
  "ARNN Group operates as a long-horizon business platform rather than a collection of disconnected ventures.",
  "The group combines commercial judgment, operating discipline, and design awareness so each vertical can mature with credibility.",
  "Every new initiative is assessed for strategic fit, execution readiness, and its ability to strengthen the wider portfolio over time.",
];

const stats = [
  { value: "1996", label: "group foundation" },
  { value: "10", label: "business sectors" },
  { value: "Cross-border", label: "operating outlook" },
  { value: "Long-term", label: "investment posture" },
];

const verticals = [
  "Economic Empowerment",
  "Real Estate Development",
  "Information & Communication Technologies",
  "Agro-Aquaculture",
  "Fashion Industries",
  "Empowering Global Talent",
  "Global Healthcare",
  "AgriFuture Global",
  "Furniture and Furnishing Sectors",
  "F&B Segments",
];

const pillars = [
  {
    icon: Orbit,
    title: "Portfolio intelligence",
    body: "Every business is expected to strengthen the wider group, not just itself.",
  },
  {
    icon: Sparkles,
    title: "Taste in execution",
    body: "Good strategy is not enough. The final experience also has to feel refined and intentional.",
  },
  {
    icon: ShieldCheck,
    title: "Operational discipline",
    body: "Structure, trust, and delivery quality are treated as part of the product.",
  },
  {
    icon: Target,
    title: "Selective ambition",
    body: "We enter spaces where conviction, timing, and stewardship can create lasting relevance.",
  },
];

const governance = [
  {
    icon: Shield,
    title: "Portfolio governance",
    body: "The group evaluates opportunities against relevance, feasibility, and long-term fit before committing capital, attention, or delivery resources.",
  },
  {
    icon: BadgeCheck,
    title: "Execution standards",
    body: "Projects and ventures are expected to move through structured checkpoints that preserve quality, accountability, and operational clarity.",
  },
  {
    icon: Building2,
    title: "Partnership discipline",
    body: "Government, investor, operator, and delivery relationships are approached through clearly defined roles rather than loose coordination.",
  },
  {
    icon: Globe2,
    title: "Continuity focus",
    body: "ARNN Group remains oriented toward continuity after launch, ensuring the business model can mature rather than peak at presentation stage.",
  },
];

const partnershipApproach = [
  {
    icon: Users2,
    title: "Institutional counterparts",
    body: "The group engages with public bodies, regulators, and strategic institutions where long-term alignment matters to execution.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Operators and specialists",
    body: "Sector operators, technical specialists, and delivery partners are brought in through roles that preserve clarity and accountability.",
  },
  {
    icon: Orbit,
    title: "Investors and commercial partners",
    body: "Capital relationships are evaluated through strategic fit, commercial structure, and long-view operating relevance.",
  },
];

const trajectory = [
  {
    label: "Foundation",
    year: "1996",
    body: "The group begins with entrepreneurial discipline and a long-view approach to value creation.",
  },
  {
    label: "Expansion",
    year: "Scale",
    body: "ARNN grows across multiple sectors while keeping a deliberate posture toward opportunity and execution.",
  },
  {
    label: "Current mode",
    year: "Today",
    body: "The business operates as a connected platform where partnerships, design, and operations reinforce each other.",
  },
];

export function AboutUs() {
  return (
    <div className="ar2-shell ar2-about">
      <Header />

      <main className="ar2-main">
        <section className="ar2-hero">
          <div className="ar2-noise" />
          <div className="ar2-beam ar2-beam-a" />
          <div className="ar2-beam ar2-beam-b" />

          <div className="ar2-container">
            <motion.div
              className="ar2-about-hero"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <div className="ar2-about-stage">
                <div className="ar2-about-copy">
                  <div className="ar2-chip">
                    <Waypoints size={14} />
                    <span>About ARNN Group</span>
                  </div>
                  <p className="ar2-kicker">Built with precision. Expanded with intent.</p>
                  <h1 className="ar2-display">
                    A group platform built to develop credible businesses across sectors, markets, and long-term opportunities.
                  </h1>
                  <p className="ar2-lead">
                    ARNN Group develops and coordinates businesses through a disciplined portfolio approach.
                    The objective is not expansion for its own sake, but the creation of ventures that are
                    commercially grounded, operationally structured, and coherent within the wider group.
                  </p>

                  <div className="ar2-actions">
                    <Link to="/contact" className="ar2-button ar2-button-solid">
                      Contact the group
                      <ArrowRight size={18} />
                    </Link>
                    <a href="#ar2-about-story" className="ar2-button ar2-button-outline">
                      Read the story
                    </a>
                  </div>
                </div>

                <div className="ar2-about-aside">
                  <div className="ar2-about-panel">
                    <div className="ar2-panel-head">
                      <span>Group overview</span>
                      <span>01</span>
                    </div>
                    <div className="ar2-manifest-list">
                      {groupOverview.map((item, index) => (
                        <article key={item} className="ar2-manifest-item">
                          <span>{`0${index + 1}`}</span>
                          <p>{item}</p>
                        </article>
                      ))}
                    </div>
                  </div>

                  <div className="ar2-about-microstat">
                    <span>Group position</span>
                    <strong>Portfolio-led growth anchored by governance, design quality, and execution discipline.</strong>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="ar2-section ar2-section-tight">
          <div className="ar2-container">
            <div className="ar2-stat-ribbon">
              {stats.map((item) => (
                <article key={item.label} className="ar2-stat-cell">
                  <p className="ar2-stat-value">{item.value}</p>
                  <p className="ar2-stat-label">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ar2-about-story" className="ar2-section">
          <div className="ar2-container">
            <div className="ar2-editorial-grid">
              <motion.article
                className="ar2-editorial-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55 }}
              >
                <div className="ar2-chip">
                  <Sparkles size={14} />
                  <span>Group overview</span>
                </div>
                <h2 className="ar2-heading">
                  ARNN Group is structured to connect strategy, operations, and long-term portfolio value.
                </h2>
                <p className="ar2-body">
                  The group does not treat sector entry as a branding exercise. Each business vertical is
                  expected to stand on commercial logic, disciplined execution, and a credible path to maturity.
                </p>
                <p className="ar2-body">
                  That operating posture allows ARNN to build a portfolio where different sectors reinforce
                  the wider platform through judgment, continuity, and practical business stewardship.
                </p>
              </motion.article>

              <motion.aside
                className="ar2-overview-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.08 }}
              >
                <div className="ar2-panel-head">
                  <span>Business model</span>
                  <span>02</span>
                </div>
                <div className="ar2-overview-list">
                  <article className="ar2-overview-item">
                    <span>Platform logic</span>
                    <p>Each vertical is evaluated not only on standalone potential, but on how it contributes to group-level strength and relevance.</p>
                  </article>
                  <article className="ar2-overview-item">
                    <span>Commercial discipline</span>
                    <p>Growth decisions are expected to preserve market fit, quality standards, and operational viability rather than chase volume.</p>
                  </article>
                  <article className="ar2-overview-item">
                    <span>Long-view stewardship</span>
                    <p>The group remains focused on continuity after launch so businesses can mature with stability and trust.</p>
                  </article>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="ar2-section">
          <div className="ar2-container">
            <div className="ar2-section-head">
              <div className="ar2-chip">
                <Building2 size={14} />
                <span>Business verticals</span>
              </div>
              <h2 className="ar2-heading">The group spans distinct sectors with a shared operating standard.</h2>
              <p className="ar2-body ar2-section-copy">
                ARNN Group’s portfolio reaches across investment-oriented, operating, and service-led businesses while maintaining a common expectation around quality, governance, and execution.
              </p>
            </div>

            <div className="ar2-vertical-grid">
              {verticals.map((item, index) => (
                <motion.article
                  key={item}
                  className="ar2-vertical-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <span className="ar2-vertical-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item}</h3>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="ar2-section">
          <div className="ar2-container">
            <div className="ar2-section-head">
              <div className="ar2-chip">
                <Target size={14} />
                <span>How we operate</span>
              </div>
              <h2 className="ar2-heading">A sharper operating philosophy behind every vertical.</h2>
            </div>

            <div className="ar2-pillar-grid">
              {pillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    className={`ar2-pillar-card ar2-pillar-${index + 1}`}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.48, delay: index * 0.07 }}
                  >
                    <div className="ar2-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ar2-section">
          <div className="ar2-container">
            <div className="ar2-section-head">
              <div className="ar2-chip">
                <ShieldCheck size={14} />
                <span>Governance</span>
              </div>
              <h2 className="ar2-heading">Standards and oversight shape how the group expands.</h2>
            </div>

            <div className="ar2-governance-grid">
              {governance.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    className="ar2-governance-card"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.48, delay: index * 0.06 }}
                  >
                    <div className="ar2-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ar2-section">
          <div className="ar2-container">
            <div className="ar2-editorial-grid ar2-editorial-grid-balanced">
              <motion.article
                className="ar2-editorial-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55 }}
              >
                <div className="ar2-chip">
                  <Orbit size={14} />
                  <span>Partnership approach</span>
                </div>
                <h2 className="ar2-heading">
                  The group works through structured relationships, not opportunistic alignment.
                </h2>
                <p className="ar2-body">
                  ARNN Group engages with public-sector counterparts, investors, operators, and technical
                  partners through defined roles and commercially grounded frameworks.
                </p>
                <p className="ar2-body">
                  This approach reduces ambiguity, strengthens delivery coordination, and helps preserve
                  trust across different sectors and markets.
                </p>
              </motion.article>

              <motion.aside
                className="ar2-overview-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.08 }}
              >
                <div className="ar2-panel-head">
                  <span>Relationship model</span>
                  <span>03</span>
                </div>
                <div className="ar2-overview-list">
                  {partnershipApproach.map((item) => {
                    const Icon = item.icon;
                    return (
                      <article key={item.title} className="ar2-overview-item ar2-overview-item-icon">
                        <div className="ar2-overview-icon">
                          <Icon size={16} />
                        </div>
                        <div>
                          <span>{item.title}</span>
                          <p>{item.body}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="ar2-section">
          <div className="ar2-container">
            <div className="ar2-trajectory-shell">
              <div className="ar2-section-head ar2-section-head-compact">
                <div className="ar2-chip">
                  <Orbit size={14} />
                  <span>Trajectory</span>
                </div>
                <h2 className="ar2-heading">Progress shaped by intent rather than volume.</h2>
              </div>

              <div className="ar2-trajectory-list">
                {trajectory.map((item, index) => (
                  <motion.article
                    key={item.label}
                    className="ar2-trajectory-item"
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div className="ar2-trajectory-meta">
                      <span>{item.label}</span>
                      <strong>{item.year}</strong>
                    </div>
                    <p>{item.body}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ar2-section">
          <div className="ar2-container">
            <motion.div
              className="ar2-outlook"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
            >
              <div className="ar2-chip">
                <Target size={14} />
                <span>Group outlook</span>
              </div>
              <h2 className="ar2-heading">The next stage is about disciplined expansion, not louder presentation.</h2>
              <p className="ar2-body">
                ARNN Group’s direction remains centered on businesses that can hold strategic weight over time.
                That means measured sector participation, credible partnerships, and execution models that remain
                viable beyond the first impression.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="ar2-section ar2-section-end">
          <div className="ar2-container">
            <motion.div
              className="ar2-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="ar2-kicker">Next step</p>
                <h2 className="ar2-heading">
                  If the opportunity matters, the conversation should be direct.
                </h2>
              </div>
              <Link to="/contact" className="ar2-button ar2-button-solid">
                Start a conversation
                <MoveRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
