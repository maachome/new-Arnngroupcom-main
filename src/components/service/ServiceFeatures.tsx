import { motion } from "motion/react";
import { ServiceFeaturesData } from "../../types/service";
import {
  Sparkles, Zap, Shield, Target, Rocket, Globe,
  TrendingUp, Award, Users, Settings, Heart, Star,
  Hotel, Palmtree, Building2, Briefcase, Leaf, Handshake, Lightbulb,
  Sprout, Waves, Package, LineChart, Gem, Shirt, Footprints, ShieldCheck, GraduationCap,
  Video, Stethoscope, Plane, Hospital, DollarSign, Map, Cpu, Wheat,
  Sofa, Lamp, Palette, Factory, Utensils, Coffee, Store, ShoppingBag, Code,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, any> = {
  sparkles: Sparkles,
  zap: Zap,
  shield: Shield,
  target: Target,
  rocket: Rocket,
  globe: Globe,
  trending: TrendingUp,
  award: Award,
  users: Users,
  settings: Settings,
  heart: Heart,
  star: Star,
  hotel: Hotel,
  palmtree: Palmtree,
  "building-2": Building2,
  briefcase: Briefcase,
  leaf: Leaf,
  handshake: Handshake,
  lightbulb: Lightbulb,
  sprout: Sprout,
  waves: Waves,
  package: Package,
  "line-chart": LineChart,
  gem: Gem,
  shirt: Shirt,
  footprints: Footprints,
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  "trending-up": TrendingUp,
  video: Video,
  stethoscope: Stethoscope,
  plane: Plane,
  hospital: Hospital,
  "dollar-sign": DollarSign,
  map: Map,
  cpu: Cpu,
  wheat: Wheat,
  sofa: Sofa,
  lamp: Lamp,
  palette: Palette,
  factory: Factory,
  utensils: Utensils,
  coffee: Coffee,
  store: Store,
  "shopping-bag": ShoppingBag,
  code: Code,
};

interface ServiceFeaturesProps {
  data: ServiceFeaturesData;
  color: string;
}

export function ServiceFeatures({ data, color }: ServiceFeaturesProps) {
  const [featured, ...remaining] = data.items;
  const leftColumn = remaining.filter((_, idx) => idx % 2 === 0);
  const rightColumn = remaining.filter((_, idx) => idx % 2 === 1);
  const FeaturedIcon = featured ? iconMap[featured.icon] || Sparkles : Sparkles;

  return (
    <section className="srv-section" style={{ ["--srv-accent" as string]: color }}>
      <div className="srv-container">
        <div className="srv-features-shell">
          <div className="srv-features-heading">
            {data.subtitle && <div className="srv-chip">{data.subtitle}</div>}
            <h2 className="srv-heading mt-5">{data.title}</h2>
          </div>

          <div className="srv-features-layout">
            {featured ? (
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="srv-feature-hero"
              >
                <div className="srv-feature-hero-top">
                  <div className="srv-card-icon">
                    <FeaturedIcon size={24} />
                  </div>
                  <div className="srv-feature-tag">
                    <span>Primary capability</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="srv-feature-hero-copy">
                  <h3>{featured.title}</h3>
                  <p>{featured.description}</p>
                  {featured.details ? <strong>{featured.details}</strong> : null}
                </div>
              </motion.article>
            ) : null}

            <div className="srv-feature-column">
              {leftColumn.map((feature, idx) => {
                const Icon = iconMap[feature.icon] || Sparkles;
                return (
                  <motion.article
                    key={`${feature.title}-${idx}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                    className="srv-feature-card"
                  >
                    <div className="srv-feature-card-top">
                      <div className="srv-card-icon">
                        <Icon size={20} />
                      </div>
                      <span>{`0${idx + 2}`}</span>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    {feature.details ? <small>{feature.details}</small> : null}
                  </motion.article>
                );
              })}
            </div>

            <div className="srv-feature-column">
              {rightColumn.map((feature, idx) => {
                const Icon = iconMap[feature.icon] || Sparkles;
                return (
                  <motion.article
                    key={`${feature.title}-${idx}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                    className="srv-feature-card srv-feature-card-alt"
                  >
                    <div className="srv-feature-card-top">
                      <div className="srv-card-icon">
                        <Icon size={20} />
                      </div>
                      <span>{`0${idx + leftColumn.length + 2}`}</span>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    {feature.details ? <small>{feature.details}</small> : null}
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
