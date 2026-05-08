import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Landmark,
  MoveRight,
  Orbit,
  ShieldCheck,
  Target,
  Users2,
  Waypoints,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/service-redesign.css";

const aboutHeroVideo =
  "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Real+estate.mp4";

const stats = [
  { value: "1996", label: "group foundation" },
  { value: "10", label: "business sectors" },
  { value: "Cross-border", label: "operating outlook" },
  { value: "Long-term", label: "investment posture" },
];

const overviewSignals = [
  "Founded in 1996 with a long-horizon business mindset.",
  "Active across 10 sectors spanning development, operations, services, and strategic platforms.",
  "Cross-border outlook shaped by partnership discipline and execution continuity.",
];

const capabilities = [
  {
    icon: Orbit,
    title: "Strategic development",
    description:
      "ARNN Group evaluates sectors, ventures, and opportunities through a portfolio lens rather than isolated deal-making.",
    details: "Business selection is expected to align with long-term fit, timing, and execution realism.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Partnership structuring",
    description:
      "The group works with governments, investors, operators, and delivery specialists through clearer role definition.",
    details: "That structure helps preserve accountability, continuity, and commercial clarity across sectors.",
  },
  {
    icon: Building2,
    title: "Operating range",
    description:
      "The platform spans development-led, operational, service, and investment-oriented businesses under one business standard.",
    details: "This allows ARNN to participate across different market realities without losing institutional coherence.",
  },
  {
    icon: BadgeCheck,
    title: "Execution stewardship",
    description:
      "The emphasis remains on viability after launch, not just initial presentation or market entry.",
    details: "Governance, quality controls, and continuity expectations are built into the way the group expands.",
  },
];

const philosophy = [
  {
    number: "01",
    title: "Portfolio intelligence",
    description:
      "Each venture is expected to strengthen the wider group, not simply stand alone as a disconnected business line.",
  },
  {
    number: "02",
    title: "Selective ambition",
    description:
      "The group enters spaces where conviction, timing, and stewardship can produce meaningful long-term relevance.",
  },
  {
    number: "03",
    title: "Operational discipline",
    description:
      "Structure, trust, and delivery quality are treated as core parts of the business model rather than secondary refinements.",
  },
  {
    number: "04",
    title: "Taste in execution",
    description:
      "Commercial logic matters, but so does the clarity, refinement, and credibility of the final experience.",
  },
];

const governance = [
  {
    icon: ShieldCheck,
    title: "Portfolio governance",
    description:
      "Opportunities are reviewed against relevance, feasibility, and long-term fit before the group commits operating attention or strategic weight.",
  },
  {
    icon: Landmark,
    title: "Execution standards",
    description:
      "Projects and ventures move through clearer checkpoints intended to preserve accountability and operational clarity across delivery.",
  },
  {
    icon: Users2,
    title: "Partnership discipline",
    description:
      "Institutional, investor, operator, and technical relationships are organized through defined roles rather than loose coordination.",
  },
  {
    icon: Globe2,
    title: "Continuity focus",
    description:
      "The group remains oriented toward continuity after launch so businesses can mature with stability instead of peaking at presentation stage.",
  },
];

const stakeholders = [
  {
    icon: Landmark,
    title: "Governments and public bodies",
    description:
      "The group engages where policy alignment, approvals, and long-term economic relevance shape execution conditions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Investors and capital partners",
    description:
      "Capital relationships are approached through strategic fit, commercial discipline, and long-view operating viability.",
  },
  {
    icon: Building2,
    title: "Operators and business owners",
    description:
      "Sector operators and commercial partners are engaged where operational strength and delivery continuity matter beyond launch.",
  },
  {
    icon: Users2,
    title: "Technical and delivery specialists",
    description:
      "Specialist collaborators support design, implementation, systems, and execution quality across different verticals.",
  },
];

const sectors = [
  {
    title: "Economic Empowerment",
    slug: "economic-empowerment",
    summary: "Public-private and investment-oriented initiatives aligned to long-term economic value creation.",
  },
  {
    title: "Real Estate Development",
    slug: "real-estate-development",
    summary: "Development platforms shaped by hospitality, asset quality, and long-view commercial positioning.",
  },
  {
    title: "Fintech, Crypto & Blockchain Innovation",
    slug: "ict",
    summary: "Technology-led platforms spanning infrastructure, software, and implementation discipline.",
  },
  {
    title: "Agro-Aquaculture",
    slug: "agro-aquaculture",
    summary: "Production systems built around innovation, operational control, and sustainability.",
  },
  {
    title: "Fashion Industries",
    slug: "fashion-industries",
    summary: "Brand, sourcing, and customer-facing businesses where execution quality shapes market credibility.",
  },
  {
    title: "Empowering Global Talent",
    slug: "empowering-global-talent",
    summary: "Structured recruitment and workforce pathways with stronger emphasis on verification and continuity.",
  },
  {
    title: "Global Healthcare",
    slug: "healthcare-access",
    summary: "Care access and treatment coordination supported by provider quality and managed patient journeys.",
  },
  {
    title: "AgriFuture Global",
    slug: "food-safety",
    summary: "Land activation and food-security programs combining policy alignment and field execution.",
  },
  {
    title: "Furniture and Furnishing Sectors",
    slug: "luxury-furniture",
    summary: "Residential, hospitality, and project furnishing with design, sourcing, and delivery coordination.",
  },
  {
    title: "F&B Segments",
    slug: "fb-segments",
    summary: "Concept, operating, and market expansion models across food and beverage formats.",
  },
];

const trajectory = [
  {
    title: "Foundation",
    details: "1996",
    description: "ARNN Group begins with entrepreneurial discipline and a long-view approach to value creation.",
  },
  {
    title: "Expansion",
    details: "Scale",
    description: "The group expands across sectors while maintaining a selective posture toward opportunity and execution.",
  },
  {
    title: "Current mode",
    details: "Today",
    description: "The business operates as a connected platform where partnerships, design quality, and operations reinforce one another.",
  },
];

export function AboutUs() {
  return (
    <div className="srv-shell about-srv min-h-screen flex flex-col">
      <Header />

      <main>
        <section className="srv-hero about-srv-hero">
          <div className="srv-hero-media z-0">
            <motion.video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="bg-video-blur"
            >
              <source src={aboutHeroVideo} type="video/mp4" />
            </motion.video>
          </div>
          <div className="srv-hero-overlay about-srv-hero-overlay" />

          <div className="srv-hero-grid">
            <div className="srv-container">
              <div className="about-srv-hero-stage">
                <div className="srv-hero-content">
                  <div className="srv-chip">
                    <Waypoints size={14} />
                    <span>About ARNN Group</span>
                  </div>
                  <p className="srv-eyebrow">Built with precision. Expanded with intent.</p>
                  <h1 className="srv-hero-title">
                    A group platform built to develop credible businesses across sectors, markets, and long-term opportunities.
                  </h1>
                  <p className="srv-copy srv-hero-desc">
                    ARNN Group develops and coordinates businesses through a disciplined portfolio approach built on commercial logic,
                    operating structure, and long-term coherence across the wider group.
                  </p>

                  <div className="srv-hero-actions">
                    <Link to="/contact" className="srv-button srv-button-primary">
                      Contact the group
                      <ArrowRight size={18} />
                    </Link>
                    <a href="#about-overview" className="srv-button srv-button-secondary">
                      Read the story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="srv-section about-srv-stats">
          <div className="srv-container">
            <div className="srv-stats-grid about-srv-stats-grid">
              {stats.map((item) => (
                <article key={item.label} className="srv-stat">
                  <p className="srv-stat-label">{item.label}</p>
                  <div className="srv-stat-value">
                    <span>{item.value}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about-overview" className="srv-section">
          <div className="srv-container">
            <div className="srv-overview-shell">
              <div className="srv-overview-heading">
                <div className="srv-chip">
                  <Blocks size={14} />
                  <span>Group overview</span>
                </div>
                <h2 className="srv-heading mt-5">
                  ARNN Group is structured to connect strategy, operations, and long-term portfolio value.
                </h2>
              </div>

              <div className="srv-overview-grid">
                <div className="srv-overview-visual">
                  <div className="srv-panel about-srv-overview-visual">
                    <span className="srv-card-label">Group structure</span>
                    <h3 className="srv-card-title">A connected portfolio model rather than a disconnected holding approach.</h3>
                    <p className="srv-card-copy">
                      Each vertical is expected to stand on its own commercial merit while also contributing to the strength,
                      credibility, and continuity of the wider group.
                    </p>
                  </div>
                </div>

                <div className="srv-overview-copywrap">
                  <div className="srv-overview-leadpanel">
                    <p className="srv-overview-lead">
                      ARNN Group is structured to connect strategy, operations, and long-term portfolio value across multiple sectors.
                    </p>
                    <div className="srv-overview-body">
                      <p className="srv-copy">
                        The group does not treat sector participation as a branding exercise. Each business is expected to follow commercial logic,
                        disciplined execution, and a credible path to maturity while reinforcing the wider platform.
                      </p>
                    </div>
                    <div className="srv-overview-signals">
                      <div className="srv-overview-signalgrid">
                        {overviewSignals.map((item) => (
                          <div key={item} className="srv-overview-signal">
                            <span className="srv-overview-signalmark" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="srv-section">
          <div className="srv-container">
            <div className="srv-features-shell">
              <div className="srv-features-heading">
                <div className="srv-chip">
                  <BadgeCheck size={14} />
                  <span>Group capabilities</span>
                </div>
                <h2 className="srv-heading mt-5">
                  The group brings together strategy, structuring, delivery, and operating range.
                </h2>
              </div>

              <div className="srv-features-layout">
                <article className="srv-feature-hero">
                  <div className="srv-feature-hero-top">
                    <span className="srv-feature-tag">Active platform</span>
                  </div>
                  <div className="srv-feature-hero-copy">
                    <h3>ARNN Group functions as an active business platform rather than a passive holding structure.</h3>
                    <p>
                      Value is created not only through ownership or participation, but through the ability to shape, coordinate,
                      and steward ventures with discipline across different sectors.
                    </p>
                    <strong>Same corporate system. Same premium hierarchy. Same operational tone.</strong>
                  </div>
                </article>

                <div className="srv-feature-column">
                  {capabilities.slice(0, 2).map((item) => {
                    const Icon = item.icon;
                    return (
                      <article key={item.title} className="srv-feature-card">
                        <div className="srv-card-icon">
                          <Icon size={20} />
                        </div>
                        <div className="srv-feature-card-top">
                          <span>Capability</span>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <small>{item.details}</small>
                      </article>
                    );
                  })}
                </div>

                <div className="srv-feature-column">
                  {capabilities.slice(2).map((item) => {
                    const Icon = item.icon;
                    return (
                      <article key={item.title} className="srv-feature-card srv-feature-card-alt">
                        <div className="srv-card-icon">
                          <Icon size={20} />
                        </div>
                        <div className="srv-feature-card-top">
                          <span>Capability</span>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <small>{item.details}</small>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="srv-section">
          <div className="srv-container">
            <div className="srv-process-shell">
              <div className="srv-process-heading">
                <div className="srv-chip">
                  <Target size={14} />
                  <span>How we operate</span>
                </div>
                <h2 className="srv-heading mt-5">A sharper operating philosophy behind every vertical.</h2>
              </div>
              <div className="srv-process-grid">
                {philosophy.map((item) => (
                  <article key={item.number} className="srv-process-card">
                    <div className="srv-process-marker">
                      <span>{item.number}</span>
                    </div>
                    <div className="srv-process-card-top">
                      <span className="srv-process-meta">Operating principle</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="srv-section">
          <div className="srv-container">
            <div className="srv-partnership-shell">
              <div className="srv-partnership-header">
                <div className="srv-chip">
                  <Users2 size={14} />
                  <span>Who we work with</span>
                </div>
                <h2 className="srv-heading mt-5">The group works across a focused institutional and operating network.</h2>
                <p className="srv-copy mt-5 max-w-[60ch]">
                  ARNN Group is strengthened through structured engagement with stakeholders whose roles matter to long-term business delivery.
                </p>
              </div>
              <div className="srv-partnership-grid">
                {stakeholders.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="srv-partnership-card">
                      <div className="srv-card-icon">
                        <Icon size={20} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="srv-section">
          <div className="srv-container">
            <div className="srv-partnership-shell">
              <div className="srv-partnership-header">
                <div className="srv-chip">
                  <ShieldCheck size={14} />
                  <span>Governance</span>
                </div>
                <h2 className="srv-heading mt-5">Standards and oversight shape how the group expands.</h2>
              </div>
              <div className="srv-partnership-grid">
                {governance.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="srv-partnership-card">
                      <div className="srv-card-icon">
                        <Icon size={20} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="srv-section">
          <div className="srv-container">
            <div className="srv-partnership-shell">
              <div className="srv-partnership-header">
                <div className="srv-chip">
                  <Users2 size={14} />
                  <span>Business verticals</span>
                </div>
                <h2 className="srv-heading mt-5">The group spans distinct sectors with a shared operating standard.</h2>
                <p className="srv-copy mt-5 max-w-[60ch]">
                  ARNN Group’s portfolio reaches across investment-oriented, operating, and service-led businesses while maintaining
                  a common expectation around quality, governance, and execution.
                </p>
              </div>
              <div className="about-srv-sector-grid">
                {sectors.map((item, index) => (
                  <Link key={item.slug} to={`/services/${item.slug}`} className="about-srv-sector-card">
                    <span className="about-srv-sector-index">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span className="about-srv-sector-link">View sector</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="srv-section">
          <div className="srv-container">
            <div className="srv-success-header">
              <div className="srv-chip">
                <Globe2 size={14} />
                <span>Trajectory</span>
              </div>
              <h2 className="srv-heading mt-5">Progress shaped by intent rather than volume.</h2>
            </div>
            <div className="srv-success-grid about-srv-trajectory-grid">
              {trajectory.map((item) => (
                <article key={item.title} className="srv-story">
                  <div className="srv-story-meta">
                    <span className="srv-region">{item.title}</span>
                  </div>
                  <h3 className="srv-story-title">{item.details}</h3>
                  <p className="srv-story-copy">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="srv-section">
          <div className="srv-container">
            <div className="srv-panel srv-cta-grid">
              <div>
                <div className="srv-chip">
                  <Orbit size={14} />
                  <span>Group outlook</span>
                </div>
                <h2 className="srv-heading mt-5">The next stage is about disciplined expansion, not louder presentation.</h2>
                <p className="srv-copy mt-5 max-w-[58ch]">
                  ARNN Group’s direction remains centered on businesses that can hold strategic weight over time.
                  That means measured sector participation, credible partnerships, and execution models that remain viable beyond the first impression.
                </p>
              </div>
              <div className="srv-cta-actions">
                <Link to="/contact" className="srv-button srv-button-primary">
                  Start a conversation
                  <MoveRight size={18} />
                </Link>
                <a href="#about-overview" className="srv-button srv-button-secondary">
                  Return to overview
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
